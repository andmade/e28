<template>
  <div class="columns">
    <div id="sidebar_container" class="column is-one-fifth">
      <SidebarMenu></SidebarMenu>
    </div>
    <div id="events_container" class="column">
      <div class="columns is-multiline">
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
      bookmarks: JSON.parse(localStorage.getItem('bookmarks'))
    };
  },
  mounted: function() {
    global.axios.get(global.config.api).then(response => {
      this.events = response.data;
    });
  }
};
</script>

<style>
#event_container {
  max-width: 800px;
}
</style>
