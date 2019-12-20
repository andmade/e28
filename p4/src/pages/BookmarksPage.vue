<template>
  <div class="columns">
    <div id="events_container" class="column">
      <div class="columns is-multiline">
        <EventItem
          v-for="event in bookmarkedEvents"
          :key="event.eventID"
          :event="event"
          :bookmarks="bookmarks"
        ></EventItem>
      </div>
    </div>
  </div>
</template>
<script>
import EventItem from '../components/EventItem';
export default {
  name: 'BookmarksPage',
  components: { EventItem },
  data: function() {
    return {
      bookmarks: null,
      bookmarkedEvents: null,
      events: null
    };
  },
  }
};
</script>

<style scoped>
#events_container {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
