<template>
  <main>
    <b-container fluid>
      <b-row>
        <b-col sm="12" md="4">
          <b-jumbotron header="here@">
            <p class="lead">
              Looking for something to do here at campus?
              <span class="text-brand-emphasis text-primary">You've found it!</span>
            </p>
            <p class="sub-lead">
              Browse, search, and bookmark from among hundreds of campus events.
            </p>
            <b-button variant="primary" href="#">Browse All Events</b-button>
          </b-jumbotron>
        </b-col>

        <b-col sm="12" md="8">
          <h2>Featured Events</h2>
          <b-row align-h="around" class="row-cols-1 row-cols-md-3">
            <FeaturedEvent
              v-for="event in featuredEvents"
              :key="event.eventID"
              :event="event"
            ></FeaturedEvent>
          </b-row>
        </b-col>
        <!-- <b-col
          sm="4"
          v-for="featured in featuredEvents"
          :key="featuredEvents.eventID"
        >Featured Events</b-col>-->
      </b-row>
    </b-container>
  </main>
</template>

<script>
import FeaturedEvent from '../components/FeaturedEvent';
export default {
  name: 'HomePage',
  components: { FeaturedEvent },
  data: function() {
    return {};
  },
  computed: {
    featuredEvents: function() {
      return this.$store.getters.featuredEvents;
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  padding: 15px;
  background-color: #e9ecef;
}

.container-fluid {
  padding: 0;
}

.jumbotron h1 {
  font-weight: bold;
}
.jumbotron .lead {
  font-size: 1.5em;
}

.jumbotron .sub-lead {
  font-size: 1.1em;
}

.text-brand-emphasis {
  font-weight: bold;
}
</style>
