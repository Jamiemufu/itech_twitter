<?php

namespace App\Controller;

use App\Service\TwitterAuth;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;


class TwitterFeedController extends AbstractController
{
    /**
     * @Route("/twitter_feed", name="twitter_feed")
     *
     * Using my own vue js components for front end via Ajax and post
     * But this is accessible from anywhere so the response can be implemented anywhere
     *
     * @param TwitterAuth $twitter
     * @param Request $request
     * @return JsonResponse
     * @throws ClientExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws ServerExceptionInterface
     * @throws TransportExceptionInterface
     */
    public function getTweets(TwitterAuth $twitter, Request $request)
    {

        /**
         * example request
         *
         * This will get the timeline of the user specified
         *
         * $name = "<sceen_name of user";
         * $twitter->timeline($name);
         *
         */


        $name = "eltonofficial";
        $count = "5";
        $result = $twitter->timeline($name, $count);

        //condensed response to only a few fields we may require
        //saves sorting and filtering on the frontend

        $tweets = array();

        foreach ($result as $key => $tweet) {

            if(isset($tweet['extended_entities'])) {
                $media = $tweet['extended_entities']['media'][0]['expanded_url'];
            } else {
                $media = null;
            }

            $tweets[] = [
                'created_at' => $tweet['created_at'],
                'text' => $tweet['full_text'],
                'retweet_count' => $tweet['retweet_count'],
                'favorite_count' => $tweet['favorite_count'],
                'name' => $tweet['user']['name'],
                'screen_name' => $tweet['user']['screen_name'],
                'profile_image_url' => $tweet['user']['profile_image_url'],
                'profile_banner' => $tweet['user']['profile_banner_url'],
                'followers_count' => $tweet['user']['followers_count'],
                'friends_count' => $tweet['user']['friends_count'],
                'verified' => $tweet['user']['verified'],
                'favourites_count' => $tweet['user']['favourites_count'],
                'link' => "https://twitter.com/elonmusk/status/" . $tweet['id'],
                'url' => $tweet['entities']['urls'],
                'media' => $media,
            ];
        }

        //cache response for an hour, unless different request method made i.e POST to update cache
        $response = new JsonResponse($tweets);
        $response->setPublic();
        $response->setMaxAge(3600);
        $response->isNotModified($request);

        return $response;
    }

    /**
     * @Route("/", name="display")
     *
     * My frontend for the application
     */
    public function viewTweets()
    {

        //render my view where my vue components are
        return $this->render("twitter_feed/index.html.twig");

    }
}
