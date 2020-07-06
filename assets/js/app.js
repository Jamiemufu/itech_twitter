/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.scss';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log("loaded");

/**
 * Imports and consts
 */
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import Vue from 'vue';
import vuetify from './plugins/vuetify'

/**
 * Components
 */
Vue.component('twitterfeed', require('./components/Twitterfeed').default);
Vue.component('card', require('./components/Card').default);

/**
 * Create a fresh Vue Application instance
 */
new Vue({
    vuetify,
}).$mount('#app')
