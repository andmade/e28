<template>
  <div id="app">
    <TopNav :links="links"></TopNav>
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

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>
