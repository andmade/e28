<template>
  <b-col>
    <b-card no-body img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="col">
      <router-link :to="{ name: 'event', params: { id: event.eventID } }">
        <b-card-img :src="event.thumbnail"></b-card-img>
      </router-link>
      <b-card-body>
        <b-card-title>{{ event.title | nohtml }}</b-card-title>

        <b-card-text>
          <p>{{ event.startDateTime | moment("ddd, MMM M") }}</p>
          <p
            v-if="!event.allDay"
          >{{ event.startDateTime | moment("h a") }} - {{ event.endDateTime | moment("h a") }}</p>
          <p>
            <i class="fa-bookmark" :class="[bookmarked ? 'fas' : 'far']"></i>
          </p>
          <div class="address-container">
            <i class="fas fa-map-marked-alt"></i>
            <address v-html="event.location.replace(/<br \/>/g, ', ')"></address>
          </div>
        </b-card-text>
      </b-card-body>
      <router-link class="footer-link" :to="{ name: 'event', params: { id: event.eventID } }">
        <b-card-footer footer-bg-variant="info" footer-text-variant="light">More Info</b-card-footer>
      </router-link>
    </b-card>
  </b-col>
</template>

<script>
export default {
  data: function() {
    return {
      bookmarked: global._.includes(this.bookmarks, this.event.eventID)
    };
  },

  props: ['event', 'bookmarks']
};
</script>

<style lang="scss" scoped>
.card-title {
  overflow: hidden;
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 0;
}

.col {
  margin-bottom: 10px;
}

.card-img {
  object-fit: cover;
  max-height: 150px !important;
  overflow: hidden;
}

.card-body {
  padding: 8px;
}

.card-text {
  font-size: 0.9em;
  p {
    padding: 0;
    margin: 0;
  }
}

.footer-link {
  text-decoration: none;
}

.card-footer {
  padding: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 1em;
}

article {
  height: 100%;
  padding: 0;
}
address {
  text-emphasis: wrap !important;
  max-width: 100%;
  font-size: 0.8em;
}

.address-container {
  i {
    float: left;
    padding-right: 5px;
  }
}

figure {
  max-height: 150px !important;
  overflow: hidden;
}
</style>
