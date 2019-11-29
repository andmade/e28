<template>
  <router-link
    exact
    :key="event.eventID"
    :to="{ name: 'event', params: { id: event.eventID } }"
    class="event-link"
  >
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img :src="event.eventThumb" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h2 class="is-size-5">{{ event.title | nohtml }}</h2>
          <p class="event-time">
            <time datetime="event.startDateTime">
              {{ event.startDateTime | prettydate }}
            </time>
          </p>
          <p>
            {{ event.description | nohtml }}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left level-item">
            <span class="icon is-small">
              <i class="fas fa-map-marked-alt"></i>
            </span>
            <address
              class="is-size-7 event-location"
              v-html="event.location.replace(/<br \/>/g, ', ')"
            ></address>
          </div>
        </nav>
      </div>
    </article>
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

<style scoped>
.box {
}
.media {
  /* overflow: hidden; */
  margin-left: 30px;
  max-height: 40vh !important;
}

figure {
  max-width: 20% !important;
  overflow: hidden;
}

h2 {
  margin-bottom: 0 !important;
}

.event-time {
  margin-top: 0;
}

.event-location {
  max-width: 90%;
  overflow-wrap: break-word;
}

address {
  padding-left: 5px;
}

.event-link {
  color: inherit;
}
</style>
