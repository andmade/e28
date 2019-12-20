<template>
  <b-container>
    <div id="event_container" v-if="event">
      <img class="event-image" :src="event.largeImage" alt="Event Image" />
      <h1 class="title is-size-2">
        {{ event.title | nohtml }}
        <span class="event-bookmark icon is-small" @click="toggleBookmark">
          <i class="fa-bookmark" :class="[bookmarked ? 'fas' : 'far']"></i>
        </span>
      </h1>

      <section class="event-categories">
        <span class="tag is-success" v-for="category in event.categories" :key="category">
          {{ category }}
        </span>
      </section>
      <section>
        <h2>When:</h2>
        <p>{{ event.startDateTime | moment('ddd, MMM M') }}</p>
        <p>
          {{ event.startDateTime | moment('h a') }} -
          {{ event.endDateTime | moment('h a') }}
        </p>
      </section>
      <section>
        <h2>Location:</h2>
        <address v-html="event.location.replace(/<br \/>/g, ', ')"></address>
      </section>
      <section>
        <h2>Description:</h2>
        <p>{{ event.description | nohtml }}</p>
      </section>
      <section v-if="event.contact">
        <h2>Contact:</h2>
        <p v-html="event.contact"></p>
      </section>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'EventPage',
  components: {},
  data: function() {
    return {
      id: null,
      bookmarks: null,
      bookmarked: null
    };
  },
  computed: {
    event: function() {
      return this.$store.getters.getEventById(this.$route.params.id);
    }
  },
  methods: {
    toggleBookmark: function() {
      if (this.bookmarked) {
        global.removeFromBookmarks(this.event.eventID);
        this.bookmarked = false;
      } else {
        global.addToBookmarks(this.event.eventID);
        this.bookmarked = true;
      }
    }
  }
};
</script>

<style scoped>
.event-image {
  max-width: 400px;
}
h2 {
  font-weight: bold;
  font-size: 1.25em;
}

section {
  margin-bottom: 10px;
}

.tag {
  font-weight: bold;
  margin-right: 10px;
}

.event-bookmark {
  cursor: pointer;
}
</style>
