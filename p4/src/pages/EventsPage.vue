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
import SidebarMenu from '../components/SidebarMenu';
import EventItem from '../components/EventItem';

export default {
  name: 'EventsPage',
  components: { SidebarMenu, EventItem },
  data: function() {
    return {};
  },
  computed: {
    events: function() {
      return this.$store.getters.filteredEvents;
    }
  }
};
</script>

<style>
#event_container {
  max-width: 800px;
}
</style>
