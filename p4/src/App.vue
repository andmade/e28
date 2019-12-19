<template>
  <div id="app">
    <TopNav :links="links"></TopNav>
    <router-view></router-view>
  </div>
</template>
<script>
import TopNav from './components/TopNav.vue';

export default {
  name: 'app',
  components: { TopNav },
  data: function() {
    return { links: ['home', 'events', 'bookmarks'] };
  },
  mounted: function() {
    this.$store.dispatch('setEvents');
  }
};
</script>
