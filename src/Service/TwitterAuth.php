<?php

namespace App\Service;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;


class TwitterAuth
{

    private $params;

    private $oauthAccessTokenSecret;

    private $oauthAccessToken;

    private $consumerKey;

    private $consumerSecret;

    private $url;

    private $screenName;

    private $requestType;

    private $count;

    private $extendedTweet;

    /**
     * Get params from services and env from DependencyInjection
     * We know its GET request and we know endpoint we need
     *
     * @param ParameterBagInterface $params
     */
    public function __construct(ParameterBagInterface $params)
    {
        $this->params = $params;
        $this->oauthAccessToken = $this->params->get('oauth_access_token');
        $this->oauthAccessTokenSecret = $this->params->get('oauth_access_token_secret');
        $this->consumerKey = $this->params->get('consumer_key');
        $this->consumerSecret = $this->params->get('consumer_secret');
        $this->url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
        $this->requestType = "GET";
        $this->screenName = "?screen_name=";
        $this->count = "&count=";
        $this->extendedTweet = "&tweet_mode=extended";
    }


    /**
     * Return array of user timeline
     *
     * Generate and encode base string, secret keys and build headers
     *
     * @param string $name
     * @param string $count
     * @return array
     * @throws ClientExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws ServerExceptionInterface
     */
    public function timeline(string $name, string $count)
    {
        //in alpha order required for Oauth
        $oauth = array(
            'oauth_consumer_key' => $this->consumerKey,
            'oauth_nonce' => time(),
            'oauth_signature_method' => 'HMAC-SHA1',
            'oauth_token' => $this->oauthAccessToken,
            'oauth_timestamp' => time(),
            'oauth_version' => '1.0'
        );

        if(isset($name) && $name != null) {
            $screenName = $this->screenName .= $name;
            //update this request param before strip and sort
            $this->screenName = $screenName;
        }

        if(isset($count) && $count != null) {
            $count = $this->count .= $count;
        }

        $extended = $this->extendedTweet;
        //strip and split into oauth array
        $oauth = $this->stripQueryParam($screenName, $count, $extended, $oauth);

        //sort oauth array
        list($oauth, $oauthPairs, $key, $value) = $this->sortOauth($oauth);

        //generate base string and encode secret keys
        $secretKey = rawurlencode($this->consumerSecret) . '&' . rawurlencode($this->oauthAccessTokenSecret);
        $base_string = $this->requestType . '&' . rawurlencode($this->url) . '&' . rawurlencode(implode('&', $oauthPairs));

        //generate and encode signature
        $oauth['oauth_signature'] = $this->encodeSignature($base_string, $secretKey);

        //build headers for request
        $header = $this->generateHeaders($oauth);

        //actual request
        $client = HttpClient::create();
        try {
            $response = $client->request('GET', $this->url . $this->screenName . $this->count . $this->extendedTweet, [
                'headers' => $header,
            ]);
            return $response->toArray(false);
        } catch (TransportExceptionInterface $e) {

        }

        //return as array

    }

    /**
     * encode signature
     *
     * @param string $base_string
     * @param string $compositeKey
     * @return string
     */
    public function encodeSignature(string $base_string, string $compositeKey): string
    {
        return base64_encode(hash_hmac('sha1', $base_string, $compositeKey, true));
    }

    /**
     * strip '?' and split to add to oauth array
     *
     * @param string $screenName
     * @param string $count
     * @param string $extended
     * @param array $oauth
     * @return array
     */
    public function stripQueryParam(string $screenName, string $count, string $extended, array $oauth): array
    {
        $params = array($screenName, $count, $extended);

        foreach ($params as $param) {
            $param = str_replace('?', '', $param);
            $param = str_replace('&', '', $param);
            $split = explode('=', $param);
            $oauth[$split[0]] = urldecode($split[1]);
        }

        return $oauth;
    }

    /**
     * Sort oauth array in alpha order
     *
     * @param array $oauth
     * @return array
     */
    public function sortOauth(array $oauth): array
    {
        ksort($oauth);
        $oauthPairs = array();

        foreach ($oauth as $key => $value) {
            $oauthPairs[] = rawurlencode($key) . '=' . rawurlencode($value);
        }

        return array($oauth, $oauthPairs, $key, $value);
    }

    /**
     * Generate required headers
     *
     * @param $oauth
     * @return array
     */
    public function generateHeaders($oauth): array
    {
        $headers = 'Authorization: OAuth ';
        $values = array();

        foreach ($oauth as $key => $value) {
            $values[] = "$key=\"" . rawurlencode($value) . "\"";
        }

        $headers .= implode(', ', $values);
        $header = array($headers, 'Expect: ');

        return $header;
    }

}