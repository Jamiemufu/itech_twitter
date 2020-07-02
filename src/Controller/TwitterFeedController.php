<?php

namespace App\Controller;

use App\Service\TwitterAuth;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TwitterFeedController extends AbstractController
{
    /**
     * @Route("/", name="twitter_feed")
     */
    public function index(TwitterAuth $twitter)
    {
        return $this->render('twitter_feed/index.html.twig', [
            'controller_name' => 'TwitterFeedController',
        ]);
    }
}
