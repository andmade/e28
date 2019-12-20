<template>
  <div class="columns">
    <div id="sidebar_container" class="column is-one-fifth">
      <SidebarMenu></SidebarMenu>
    </div>
    <div id="event_container" class="column" v-if="event">
      <img class="event-image" :src="event.eventImage" alt="" />
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
        <p>
          {{ event.startDateTime | prettydate }} - {{ event.endDateTime | prettydate }}
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
  </div>
</template>

<script>
import * as global from '../global.js';
import SidebarMenu from '../components/SidebarMenu';

export default {
  name: 'EventPage',
  components: { SidebarMenu },
  data: function() {
    return {
      id: null,
      event: null,
      bookmarks: null,
      bookmarked: null
    };
  },
  mounted: function() {
    global.axios.get(global.config.api).then(response => {
      let events = response.data;
      this.id = this.$route.params.id;
      let targetID = this.id;
      this.event = global._.find(events, function(evt) {
        return targetID == evt.eventID;
      });
      this.bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      this.bookmarked = global._.includes(this.bookmarks, parseInt(this.id));
    });
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
