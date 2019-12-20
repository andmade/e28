<template>
  <main>
    <b-container fluid>
      <b-row>
        <b-col class="jumbtron-container" sm="12" md="5">
          <b-jumbotron header="here@">
            <p class="lead">
              Looking for something to do here at campus?
              <span
                class="text-brand-emphasis text-primary"
              >You've found it!</span>
            </p>
            <p class="sub-lead">Browse, search, and bookmark from among hundreds of campus events.</p>
            <b-button :to="{ name: 'events' }" variant="primary" href="#">Browse All Events</b-button>
          </b-jumbotron>
        </b-col>

        <b-col sm="12" md="7">
          <b-row align-h="around">
            <FeaturedEvent v-for="event in featuredEvents" :key="event.eventID" :event="event"></FeaturedEvent>
          </b-row>
        </b-col>
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
main,
.container-fluid,
.row {
  min-height: 100%;
}

.lead {
  font-weight: bold;
}
.container-fluid {
  padding-left: 0;
}

.btn-primary {
  display: inline-block;
  font-size: 1.5em;
  margin-left: 25%;
}

.jumbotron {
  background-color: #f6f7f9 !important;
  height: 100%;
  margin-bottom: 0;
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
