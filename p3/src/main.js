import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'bulma/css/bulma.css';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const stripHtml = require('string-strip-html');
const moment = require('moment');

//From Vue Docs
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

import HomePage from './components/pages/HomePage.vue';
import EventsPage from './components/pages/EventsPage.vue';
import EventPage from './components/pages/EventPage.vue';
import BookmarksPage from './components/pages/BookmarksPage.vue';
import SearchPage from './components/pages/SearchPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'home', props: true },
  { path: '/events', component: EventsPage, name: 'events', props: true },
  { path: '/events/:id', component: EventPage, name: 'event', props: true },
  { path: '/bookmarks/', component: BookmarksPage, name: 'bookmarks', props: true },
  { path: '/search/', component: SearchPage, name: 'search', props: true }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
