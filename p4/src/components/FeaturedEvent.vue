<template>
  <b-card
    bg-variant="info"
    text-variant="white"
    class="mb-3"
    img-src="https://placekitten.com/300/300"
    img-alt="Card image"
    img-left
  >
    <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
    <b-card-footer class="bg-secondary">
      <address v-html="event.location.replace(/<br \/>/g, ', ')"></address>
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  data: function() {
    return {};
  },

  props: ['event']
};
</script>

<style lang="scss" scoped>
.card {
  //margin-bottom: 20px;

  .card-title {
    font-size: 11pt;
    font-weight: bold;
  }
  .card-img-left {
    max-height: 200px !important;
    object-fit: cover;
  }

  .card-footer {
    padding: 5px;
    border: none;
    padding: 0;
  }
}

address {
  font-size: 0.875rem;
}
</style>
