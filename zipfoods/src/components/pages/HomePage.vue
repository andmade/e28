<template>
  <div>
    <p>ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.</p>

    <ShowFeatured :category='featuredCategory' />
  </div>
</template>

<script>
import ShowFeatured from './../ShowFeatured.vue';
export default {
  components: {
    ShowFeatured
  },
  props: ['featuredCategory']
};
</script>

<style>
</style>