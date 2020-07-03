# itech_twitter
iTech Media technical test

# Twitter OAuth service 
# Displaying recent tweets for user

# Installation (Working Example so far...)
1) Clone Repository.
2) composer install then yarn install/npm install.
3) In terminal run Symfony server/start. There is no database, so no .env vars need to be change, or migrations run etc.
4) Change the name in TwitterFeedController to the user you want to get tweets from.

# Instructions (will change when project finished)
1) The service (TwitterAuth) will then properly authenticate your request and return the last 20 tweets.
2) Front-end: I have setup a route, view and vue components) - The vue component will get the response via Axios post request.
3) The route is accessable from anywhere, so this request can be implemented any way you want but the site needs to running.

