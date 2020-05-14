import Vue from 'vue';

import PouchVue from 'pouch-vue';
import PouchDB from 'pouchdb-browser';
import PouchFind from 'pouchdb-find';
import PouchLiveFind from 'pouchdb-live-find';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import App from './App.vue';

PouchDB.plugin(PouchFind);
PouchDB.plugin(PouchLiveFind);

Vue.use(PouchVue, {
  pouch: PouchDB,
  defaultDB: 'pwa-notes'
});

Vue.use(VueMaterial);

new Vue({
  el: '#app',
  render: function(h) {
    return h(App);
  }
});
