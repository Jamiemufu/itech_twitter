<template>
    <div>
        <p>Twitter Feed</p>
        <div v-for="item in tweets">
            <card :tweet="item"></card>
        </div>
    </div>
</template>

<script>
    export default {
        props: [],
        data() {
            return {
                tweets: '',
            }
        },
        created() {
            // post request to the twitterfeed
            axios.post('/twitter_feed')
                .then(response => {
                    // save response to this instance of tweets
                    this.tweets = response.data;
                });
        },
        methods: {
            //update on request
            // will update child components as passed as props
            update() {
                axios.post('/twitter_feed')
                    .then(response => {
                        this.tweets = response.data;
                    })
            }
        }
    }
</script>

<style scoped>
</style>