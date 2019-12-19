<template>
  <b-card
    :img-src="event.thumbnail"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 18rem;"
    no-body
  >
    <b-card-body>
      <b-card-title>{{ event.title | nohtml }}</b-card-title>
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the
        card's content.
      </b-card-text>

      <b-button href="#" variant="secondary">Go somewhere</b-button>
    </b-card-body>
    <b-card-footer>
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
  margin-bottom: 20px !important;
  .card-title {
    font-size: 1.1em;
  }
  .card-img-top {
    max-height: 150px !important;
    object-fit: cover;
  }

  .card-footer {
    padding: 5px;
  }
}

address {
  font-size: 0.875rem;
}
</style>
