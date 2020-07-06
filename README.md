# itech_twitter
iTech Media technical test

# Twitter OAuth service 

# Installation (Working Example so far...)
1) Clone Repository.
2) Composer install
3) You should not need to install any node packages as its all built (now), but if you do. npm install, then npm run dev/production/watch...
4) There are 2 parameters you can set inside the TwitterFeedController, the screen_name and number of tweets you want. Set these accordingly.
5) In terminal run Symfony server:start. There is no database, so no .env vars need to be change, or migrations to run etc.
6) If using symfony server:start (recommended as its just quicker) follow the link from the terminal.
7) You will be directed to 5 (default) styled twitter card components with the response data.


# Solution
- Created a service to generate and encode parameters and headers and authenticate with twitter API.
- Using Symfony's caching and caching results for one hour - The only exception to this, is when a post request is made
- This will drastically reduce the number of API calls. Always a concern....
- I am condensing the response object before it goes over the front end, just cherry picking data we need.
- Vue front end application, takes the response object as a prop.
- When the component gets created, it will fetch via 'GET'. This will get the cached data, which is refreshed every hour on the server AND axios makes a request every hour.
- There is a user refresh button, this will 'POST' a new request - which just tells the cache its invalid and needs to send over a new request.
- There is a loading bar ontop of each twitter card, the loading bar will show twitter cards loading whenever the user refreshes or hourly, when the cache gets refreshed.
- The route is accessable from anywhere, so for this case, anyone can get the request if it's public facing. /twitter_feed.
- I am sure there a million different way to implement the front-end to this. I just decided to use vue, and show some JS coding.

# Twitter card
- The card has twitter text, extended from the extended_tweets parameter.
- The card will either show the profile banner picture or a media picture if the tweet contains a picture
- The vue application scrapes the twitter text for any re-tweets, the generates an object of re-tweet names and links
- The twitter then has a drop down with names and link to the people the tweet has been re-tweeted to.
- The twitter card also has profile name, picture and how many likes and retweets it's had.
- The twitter card has a refresh button and link button

# Build Files

I have recently included the build files, so you should not have to install npm packages and run 'npm run' - These are dev compiled and not minimised - for ease of reading.
## Thank you for this opportunity, and I look forward to feedback
