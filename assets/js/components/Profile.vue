<template>
    <v-card-subtitle class="card-subtitle__profile">
        <div class="card-subtitle__profile--container">
            <div>
                <img v-bind:src="tweet.profile_image_url">
            </div>

            <div>
                <p>@{{tweet.screen_name}}</p>
            </div>
        </div>
        <!--likes and rewteets-->
        <div class="card-subtitle__icon--container">
            <div class="">
                <v-icon color="red">mdi-heart</v-icon>
                <span>{{tweet.favorite_count}}</span>
            </div>

            <div class="">
                <v-icon color="white">mdi-undo-variant</v-icon>
                <span>{{tweet.retweet_count}}</span>
            </div>
        </div>
    </v-card-subtitle>
</template>
<script>
    export default {
        name: 'profile',
        props: {
            tweet: {}
        }
    }
</script>