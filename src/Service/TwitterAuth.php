<?php

namespace App\Service;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class TwitterAuth
{
    private $oathAccessToken;

    private $oathAccessTokenSecret;

    private $consumerKey;

    private $consumerSecret;

    private $params;

    /**
     * Get params from services and env from DependencyInjection
     */
    public function __construct(ParameterBagInterface $params)
    {
        $this->params = $params;
        $this->oauthAccessToken = $this->params->get('oauth_access_token');
        $this->oauthAccessTokenSecret = $this->params->get('oauth_access_token_secret');
        $this->consumerKey = $this->params->get('consumer_key');
        $this->consumerSecret = $this->params->get('consumer_secret');
    }

}