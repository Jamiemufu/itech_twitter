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

    private $requestParam;

    private $requestType;


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
        $this->requestParam = "?screen_name=";

    }


    /**
     * Return array of user timeline
     *
     * Generate and encode base string, secret keys and build headers
     *
     * @param string $name
     * @return array
     * @throws ClientExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws ServerExceptionInterface
     * @throws TransportExceptionInterface
     */
    public function timeline(string $name)
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

        $screenName = $this->requestParam;
        $screenName .= $name;

        //update this request param before strip and sort
        $this->requestParam = $screenName;

        //strip and split into oauth array
        $oauth = $this->stripQueryParam($screenName, $oauth);

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
        $response = $client->request('GET', $this->url . $this->requestParam, [
            'headers' => $header,
        ]);

        //return as array
        return $response->toArray();
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
     * @param array $oauth
     * @return array
     */
    public function stripQueryParam(string $screenName, array $oauth): array
    {
        $screenName = str_replace('?', '', $screenName);
        $split = explode('=', $screenName);
        $oauth[$split[0]] = urldecode($split[1]);

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