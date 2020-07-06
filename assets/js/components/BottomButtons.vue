<template>
    <v-card-subtitle class="card-subtitle__links--container">
        <!--links and refresh button-->
        <div class="card-subtitle__links">
            <!--start of dropdown arrow-->
            <div class="card-dropdown__arrow" v-if="retweetNames">
                <v-card-actions>
                    <v-btn icon color="blue" @click="display = !display">
                        <v-icon color="white">{{ display ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
            <!--end drop down arrow-->
            <!--link icon-->
            <div>
                <v-btn icon color="white" v-bind:href="tweet.link" target="_blank">
                    <v-icon>mdi-link-variant</v-icon>
                </v-btn>
            </div>
            <!--refresh icon-->
            <div>
                <v-btn icon color="white" @click="update">
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
            </div>
        </div>
    </v-card-subtitle>
</template>
<script>
    export default {
        name: 'bottom-buttons',
        props: {
            display: {},
            retweetNames: {},
            tweet: {},
            update: {}
        }
    }
</script>