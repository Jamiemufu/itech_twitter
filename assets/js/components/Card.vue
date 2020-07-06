<template>
    <v-card class="card" max-width="300" raised>
        <!--loader-->
        <v-progress-linear
                :active="show"
                :indeterminate="show"
                absolute
                height="7"
                top
                color="red"
        ></v-progress-linear>

        <!--card title-->
        <v-card-title class="card--title">
            <v-icon color="white">
                mdi-twitter
            </v-icon>
            <h2>Twitter</h2>
        </v-card-title>

        <!--if tweet contains media display it or display profile banner-->
        <div v-if="tweet.media">
            <v-img height="100px" v-bind:src="tweet.media" class="card--image"></v-img>
        </div>
        <!--else-->
        <div v-else>
            <v-img height="100px" v-bind:src="tweet.profile_banner" class="card--image"></v-img>
        </div>

        <!--tweet text-->
        <v-card-title class="card--body__text">
            {{tweet.text}}
        </v-card-title>

        <!--profile picture/screen_name-->
        <profile :tweet="tweet"/>
        <bottom-buttons :display="display" :retweet-names="retweetNames" :tweet="tweet" :update="update"/>
        <!--dropdown-->
        <!--if there are retweet names then show drop down-->
        <reply :display="display" :retweet-names="retweetNames" :retweets="retweets"/>
    </v-card>
</template>

<script>
    import Reply from "./Reply";
    import BottomButtons from "./BottomButtons";
    import Profile from "./Profile";

    export default {
        components: {Profile, BottomButtons, Reply},
        // passing in tweet, show and update function to update
        props: ["tweet", "show", "update"],
        data() {
            return {
                tweets: '',
                display: false,
                // create empty object so we can loop through names and get generated uri
                retweets: [],
                retweetNames: [],
            }
        },
        methods: {
            getRetweetNames() {
                // get a match on '@' from tweet text body
                let name = (this.tweet.text.match(/@\S+/g));
                this.retweetNames = name;
            },
            generateRewteetUri() {
                if (this.retweetNames) {
                    for (let i = 0; i < this.retweetNames.length; i++) {
                        // generate uri and filter name
                        // chaining replaces found use cases where 's would slip through
                        let obj = {
                            name: this.retweetNames[i].replace(":", ""),
                            uri: "http://twitter.com/" + this.retweetNames[i].replace(",", "").replace(":", "").replace("'", " ").replace("@", "").split(" ")[0],
                        }
                        this.retweets.push(obj);
                    }
                }
            },
        },
        mounted() {
            this.getRetweetNames();
            this.generateRewteetUri();
        }
    }
</script>

