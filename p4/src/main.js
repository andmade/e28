import Vue from 'vue';
import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import EventsPage from './pages/EventsPage.vue';
import EventPage from './pages/EventPage.vue';
// import BookmarksPage from './pages/BookmarksPage.vue';
import store from './store/index.js';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import BootstrapVue from 'bootstrap-vue';
import './assets/css/custom.scss';
Vue.use(BootstrapVue);

Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

export const _ = require('lodash');

/* ****************** ROUTES ***************** */
const routes = [
  { path: '/', component: HomePage, name: 'home', props: true },
  { path: '/events', component: EventsPage, name: 'events', props: true },
  { path: '/event/:id', component: EventPage, name: 'event', props: true },
  { path: '/bookmarks/', component: HomePage, name: 'bookmarks', props: true }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});
/* ****************** FILTERS ***************** */
const stripHtml = require('string-strip-html');

// From Vue Docs: https://vuejs.org/v2/guide/filters.html
Vue.filter('capitalize', function(value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('nohtml', function(value) {
  if (!value) return '';
  value = value.toString();
  return stripHtml(value);
});

Vue.filter('location', function(value) {
  if (!value) return '';
  value = value.toString();
  return stripHtml(value, { onlyStripTags: ['br'] });
});

// Vue.filter('prettydate', function(value) {
//   if (!value) return '';
//   value = value.toString();
//   return moment(value).format('MMMM D, YYYY');
// });

new Vue({
  store: store,
  router: router,
  render: h => h(App)
}).$mount('#app');
