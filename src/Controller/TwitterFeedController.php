<?php

namespace App\Controller;

use App\Service\TwitterAuth;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class TwitterFeedController extends AbstractController
{
    /**
     * @Route("/twitter_feed", name="twitter_feed")
     *
     * Using my own vue js components for front end via Ajax and post
     * But this is accessible from anywhere so the response can be implemented anywhere
     *
     */
    public function index(TwitterAuth $twitter)
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


        $name = "elonmusk";
        $result = $twitter->timeline($name);

        //condensed response to only a few fields we may require
        //saves sorting and filtering on the frontend

        $tweets = array();

        foreach ($result as $key => $tweet) {
            $tweets[] = [
                'created_at' => $tweet['created_at'],
                'text' => $tweet['text'],
                'retweet_count' => $tweet['retweet_count'],
                'favorite_count' => $tweet['favorite_count'],
                'name' => $tweet['user']['name'],
                'screen_name' => $tweet['user']['screen_name'],
                'profile_image_url' => $tweet['user']['profile_image_url'],
                'profile_banner' => $tweet['user']['profile_banner_url'],
                'followers_count' => $tweet['user']['followers_count'],
                'friends_count' => $tweet['user']['friends_count'],
                'verified' => $tweet['user']['verified'],
                'favourites_count_count' => $tweet['user']['favourites_count'],
                'link' => "https://twitter.com/elonmusk/status/" . $tweet['id'],
                'url' => $tweet['entities']['urls'],
            ];
        }

        return new JsonResponse($tweets);

    }

    /**
     * @Route("/timeline", name="display")
     *
     * My frontend for the application
     */
    public function displayTweet()
    {

        //render my view where my vue components are
        return $this->render("twitter_feed/index.html.twig");

    }
}
