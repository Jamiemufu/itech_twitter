<template>
    <div v-if="retweetNames">
        <!--start of drop down content-->
        <v-expand-transition>
            <!--if btn toggled-->
            <div v-show="display">
                <v-card-subtitle class="card-dropdown">
                    <div class="card-dropdown__replies">
                        <!--scrape retweet names and display as replies-->
                        <div v-if="retweetNames">
                            <div class="card-dropdown__replies">
                                <!--generic lavel-->
                                <span>Replying to: </span>
                                <!--names are scraped from tweet text-->
                                <div v-for="retweet in retweets">
                                    <a v-bind:href="retweet.uri" target="_blank">
                                        {{retweet.name}}
                                    </a>
                                </div>
                                <!--end of v-for-->
                            </div>
                        </div>
                        <!--end v-if-->
                    </div>
                </v-card-subtitle>
            </div>
        </v-expand-transition>
    </div>
</template>
<script>
    export default {
        name: 'reply',
        props: {
            display: {},
            retweetNames: {},
            retweets: {}
        }
    }
</script>
