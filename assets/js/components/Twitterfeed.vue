<template>
    <div>
        <p>Twitter Feed</p>
        <!--cards-->
        <div v-for="item in tweets">
            <card :tweet="item"></card>
        </div>
        <!--update-->
        <div>
            <button @click="update">Update</button>
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
            //create component with request ready
            this.fetch()
        },
        mounted() {
            // refresh the data in the component every hour
            this.refresh()
        },
        methods: {
            update() {
                //immediately update and refresh cache
                axios.post('/twitter_feed')
                    .then(response => {
                        // save response to this instance of tweets
                        this.tweets = response.data;
                    });
            },
            fetch() {
                //get request will hit cache
                axios.get('/twitter_feed')
                    .then(response => {
                        this.tweets = response.data;
                    });
            },
            //call update every hour - inline with server cache refresh
            refresh() {
                setInterval(() => {
                    this.update()
                }, 1000 * 60 * 60);
            },
        }
    }
</script>

<style scoped>
</style>