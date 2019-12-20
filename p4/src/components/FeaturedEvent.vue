<template>
  <router-link
    exact
    :key="event.eventID"
    :to="{ name: 'event', params: { id: event.eventID } }"
    class="event-link"
  >
    <b-card
      :img-src="event.thumbnail"
      img-alt="Card image"
      img-left
      :title="event.title | nohtml"
    >
      <b-card-text>
        <p>{{ event.startDateTime | moment('ddd, MMM M') }}</p>
        <p v-if="!event.allDay">
          {{ event.startDateTime | moment('h a') }} -
          {{ event.endDateTime | moment('h a') }}
        </p>
        <div class="address-container">
          <i class="fas fa-map-marked-alt"></i>
          <address v-html="event.location.replace(/<br \/>/g, ', ')"></address>
        </div>
      </b-card-text>
    </b-card>
  </router-link>
</template>

<script>
export default {
  data: function() {
    return {};
  },

  props: ['event']
};
</script>

<style lang="scss" scoped>
.card-text {
  font-size: 1.1em;
  p {
    padding: 0;
    margin: 0;
  }
}

.event-link {
  text-decoration: none;
  color: #000;
}
.card {
  margin-bottom: 20px;

  .card-title {
    font-size: 1.5em;
    font-weight: bold;
  }
  .card-img-left {
    max-height: 220px !important;
    object-fit: cover;
  }

  .card-footer {
    padding: 5px;
    border: none;
    padding: 0;
  }
}

address {
  font-size: 0.875rem;
}

.address-container {
  i {
    float: left;
    padding-right: 5px;
  }
}
</style>
