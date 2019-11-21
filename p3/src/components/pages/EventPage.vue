<template>
  <div id="event-page">
    <h1>Event{{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'EventPage',
  props: ['id'],
  data: function() {
    return {};
  }
};
</script>