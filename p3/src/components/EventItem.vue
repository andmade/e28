<template>
  <router-link
    exact
    :key="event.eventID"
    :to="{ name: 'event', params: { id: event.eventID } }"
    class="column is-one-quarter card-container"
  >
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img :src="event.eventThumb" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p class="event-title">{{ event.title | nohtml }}</p>
          <p class="event-time">{{ event.startDateTime | prettydate }}</p>

          <div class="event-location level">
            <span class="icon is-small level-item">
              <i class="fa-bookmark" :class="[bookmarked ? 'fas' : 'far']"></i>
            </span>
            <span class="icon is-small level-item">
              <i class="fas fa-map-marked-alt"></i>
            </span>
            <address
              class="is-size-7 level-item"
              v-html="event.location.replace(/<br \/>/g, ', ')"
            ></address>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import * as global from '../global.js';

export default {
  data: function() {
    return {
      bookmarked: global._.includes(this.bookmarks, this.event.eventID)
    };
  },

  props: ['event', 'bookmarks']
};
</script>

<style scoped>
p {
  padding: 0 !important;
  margin: 0 !important;
}
.level-item {
  padding: 10px;
}
address {
  text-emphasis: wrap !important;
  max-width: 100%;
}

.event-title {
  font-weight: bold;
}

.event-location {
  position: absolute;
  bottom: 0;
  padding: 5px;
  max-width: 80%;
  overflow-wrap: break-word;
}
figure {
  max-height: 150px !important;
  overflow: hidden;
}

.card-content {
  padding: 5px;
  height: 160px;
}
</style>
