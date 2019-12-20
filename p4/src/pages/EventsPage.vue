<template>
  <b-container fluid>
    <b-row>
      <b-col id="sidebar_container" sm="12" md="2">
        <SidebarMenu></SidebarMenu>
      </b-col>
      <b-col id="events_container" sm="12" md="10">
        <b-row class="row-cols-md-3 row-cols-lg-4">
          <EventItem v-for="event in events" :key="event.eventID" :event="event"></EventItem>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
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
.container-fluid {
  margin-top: 10px;
}
</style>
