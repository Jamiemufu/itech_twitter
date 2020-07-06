<template>
    <div>
        <!--cards-->
        <v-app>
            <div v-for="item in tweets">
                <div class="card--container">
                    <!--for each tweet create a card component - and pass in current tweet and show props-->
                    <card :tweet="item" :show="show" :update="update" ></card>
                </div>
            </div>
        </v-app>
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
                //show is used to show the loading bar ontop of tweets
                show: false,
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
                        // if error log response
                        if(response.data.error) {
                            console.log("Error: " + response.data.error)
                        } else {
                            //set show to false, as we will be loading...
                            // save response to this instance of tweets
                            this.tweets = response.data;
                            this.show = true;
                            setTimeout(() => (this.show = false), 2000)
                        }
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    });
            },
            fetch() {
                //get request will hit cache
                //set show to false, as we will be loading...
                axios.get('/twitter_feed')
                    .then(response => {
                        if(response.data.error) {
                            console.log("Error: " + response.data.error)
                        } else {
                            this.tweets = response.data;
                            this.show = true;
                            setTimeout(() => (this.show = false), 2000)
                        }
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
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