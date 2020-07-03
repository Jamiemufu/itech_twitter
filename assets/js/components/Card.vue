<template>
    <div>
        {{tweet.text}}
    </div>
</template>

<script>
    export default {
        props: ["tweet"],
        data() {
            return {
                tweets: '',
            }
        },
    }
</script>

<style scoped>
</style>