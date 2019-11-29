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
import * as global from '../global.js';
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
  mounted: function() {
    global.axios.get(global.config.api).then(response => {
      this.events = response.data;
      this.bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      let currentBookmarks = this.bookmarks;
      this.bookmarkedEvents = global._.filter(this.events, function(event) {
        return global._.includes(currentBookmarks, parseInt(event.eventID));
      });
    });
  }
};
</script>

<style scoped>
#events_container {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
