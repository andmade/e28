<template>
  <main>
    <div class="columns">
      <div class="landing-intro-container column">
        <section class="landing-page-intro hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-1">
                P3 Title
              </h1>
              <p class="is-size-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt odio in
                ipsum consequatur aspernatur similique laudantium molestiae suscipit
                voluptatem nostrum. Numquam.
              </p>
            </div>
          </div>
        </section>
        <button class="button is-danger is-medium">Browse Events</button>

        <section class="highlighted-events"></section>
      </div>
      <section class="featured-event column">
        <FeaturedEvent :event="featuredEvents[0]"></FeaturedEvent>
        <FeaturedEvent :event="featuredEvents[2]"></FeaturedEvent>
      </section>
    </div>
  </main>
</template>

<script>
const axios = require('axios');

import FeaturedEvent from '../FeaturedEvent';

export default {
  name: 'HomePage',
  components: { FeaturedEvent },
  data: function() {
    return {
      featuredEvents: null
    };
  },
  mounted: function() {
    axios.get('http://localhost:4000/events').then(response => {
      this.featuredEvents = response.data;
    });
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}
main {
  margin-top: 60px;
  margin-bottom: 20px;
}

.featured-event {
  margin-right: 20px;
}

.landing-page-intro {
}
</style>
