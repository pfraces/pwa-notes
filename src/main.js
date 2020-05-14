import PouchDB from 'pouchdb-browser';
import Vue from 'vue';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import App from './App.vue';

Vue.use(VueMaterial);

new Vue({
  el: '#app',
  render: function(h) {
    return h(App);
  }
});
