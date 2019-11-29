import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'bulma/css/bulma.css';

Vue.use(VueRouter);

Vue.config.productionTip = false;

import HomePage from './pages/HomePage.vue';
import EventsPage from './pages/EventsPage.vue';
import EventPage from './pages/EventPage.vue';
import BookmarksPage from './pages/BookmarksPage.vue';
import SearchPage from './pages/SearchPage.vue';
import CategoryPage from './pages/CategoryPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'home', props: true },
  { path: '/events', component: EventsPage, name: 'events', props: true },
  { path: '/events/:category', component: CategoryPage, name: 'category', props: true },
  { path: '/event/:id', component: EventPage, name: 'event', props: true },
  { path: '/bookmarks/', component: BookmarksPage, name: 'bookmarks', props: true },
  { path: '/search/', component: SearchPage, name: 'search', props: true }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

/* ****************** FILTERS ***************** */
const stripHtml = require('string-strip-html');
const moment = require('moment');

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

Vue.filter('prettydate', function(value) {
  if (!value) return '';
  value = value.toString();
  return moment(value).format('MMMM D, YYYY');
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
