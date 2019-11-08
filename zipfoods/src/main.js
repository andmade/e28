import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: ShowHome, props: { featuredCategory: 'snacks' } },
  { path: '/products', name: 'products', component: ShowProducts, props: true },
  { path: '/categories', name: 'categories', component: ShowCategories },
  { path: '/products/:id', name: 'product', component: ProductPage, props: true }
];

import ShowHome from './components/pages/HomePage.vue';
import ShowProducts from './components/pages/ProductsPage.vue';
import ShowCategories from './components/pages/CategoriesPage.vue';
import ProductPage from './components/pages/ProductPage.vue';

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
