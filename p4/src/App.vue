<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import TopNav from './components/TopNav.vue';

export default {
  name: 'app',
  components: { TopNav },
  data: function() {
    return {
      links: ['home', 'events', 'bookmarks']
    };
  }
};
</script>
