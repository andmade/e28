<template>
  <main>
    <div class="columns">
      <div class="landing-intro-container column">
        <section class="landing-page-intro hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-1">
                here@
              </h1>
              <p class="is-size-4">
                Looking for something to do around campus?
                <br />
                <strong>You've found it!</strong>
              </p>
            </div>
          </div>
        </section>
        <router-link exact class="button is-danger is-medium" :to="{ name: 'events' }">
          Browse Events
        </router-link>

        <section class="highlighted-events"></section>
      </div>
      <section class="featured-event column" v-if="featuredEvents">
        <h2 class="is-size-2">Featured Events</h2>
        <FeaturedEvent
          v-for="event in featuredEvents"
          :key="event.eventID"
          :event="event"
        ></FeaturedEvent>
      </section>
    </div>
  </main>
</template>

<script>
import * as global from '../global.js';
import FeaturedEvent from '../components/FeaturedEvent';

export default {
  name: 'HomePage',
  components: { FeaturedEvent },
  data: function() {
    return {
      featuredEvents: null
    };
  },
  mounted: function() {
    global.axios.get(global.config.api).then(response => {
      let events = response.data;
      this.featuredEvents = global._.filter(events, function(event) {
        return event.featured;
      });
    });
  }
};
</script>

<style scoped>
main {
  margin-bottom: 20px;
}

.featured-event {
  margin-right: 20px;
}

.landing-intro-container {
  padding-left: 20px;
  text-align: center;
}

h2 {
  color: #ef2e55;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
}
</style>
