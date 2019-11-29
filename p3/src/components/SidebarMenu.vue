<template>
  <div id="sidebar">
    <aside class="menu">
      <p class="menu-label">Categories</p>
      <ul class="menu-list">
        <router-link exact :to="{ name: 'events' }">All</router-link>
        <li v-for="cat in categories" :key="cat">
          <router-link
            exact
            :key="cat"
            :to="{ name: 'category', params: { category: cat } }"
          >
            {{ cat }}
          </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import * as global from '../global.js';

export default {
  data: function() {
    return {
      events: null,
      categories: null
    };
  },
  props: ['category'],
  methods: {
    loadCategories: function() {
      this.categories = global._.chain(this.events)
        .flatMap(function(event) {
          return event.categories;
        })
        .uniq()
        .sort()
        .value();
    }
  },
  mounted: function() {
    global.axios.get(global.config.api).then(response => {
      this.events = response.data;
      this.loadCategories();
    });
  }
};
</script>

<style scoped>
#sidebar {
  padding-left: 20px;
  height: 100vh;
}

.router-link-active {
  color: #ef2e55 !important;
}
</style>
