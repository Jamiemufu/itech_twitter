<?php

namespace App\Controller;

use App\Service\TwitterAuth;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class TwitterFeedController extends AbstractController
{
    /**
     * @Route("/", name="twitter_feed")
     */
    public function index(TwitterAuth $twitter)
    {
        //name of twitter user
        $name = "elon";
        $result = $twitter->timeline($name);

        dd($result);

        return $this->render('twitter_feed/index.html.twig', [
            'controller_name' => 'TwitterFeedController',
        ]);
    }

    /**
     * example request
     *
     * This will get the timeline of the user specified
     *
     * $name = "<sceen_name of user";
     * $screenName="<name of person>";
     *
     * $twitter->timeline(name);
     *
     */
}
