<template>
  <div class="columns">
    <div id="sidebar_container" class="column is-one-fifth">
      <SidebarMenu :category="category"></SidebarMenu>
    </div>
    <div id="events_container" class="column">
      <div class="columns">
        <EventItem
          v-for="event in events"
          :key="event.eventID"
          :event="event"
          :bookmarks="bookmarks"
        ></EventItem>
      </div>
    </div>
  </div>
</template>

<script>
import * as global from '../global.js';
import EventItem from '../components/EventItem';
import SidebarMenu from '../components/SidebarMenu';

export default {
  name: 'EventsPage',
  components: { EventItem, SidebarMenu },
  data: function() {
    return {
      events: null,
      category: null,
      originalEvents: null,
      bookmarks: JSON.parse(localStorage.getItem('bookmarks'))
    };
  },
  watch: {
    '$route.params.category': function() {
      this.category = this.$route.params.category;
      this.filterEvents();
    }
  },
  mounted: function() {
    global.axios.get(global.config.api).then(response => {
      this.originalEvents = response.data;
      this.events = response.data;
      this.category = this.$route.params.category;
      if (this.category) {
        this.filterEvents();
      }
    });
  },
  methods: {
    filterEvents: function() {
      let category = this.category;
      if (category) {
        this.events = global._.filter(this.originalEvents, function(event) {
          return global._.includes(event.categories, category);
        });
      }
    }
  }
};
</script>
