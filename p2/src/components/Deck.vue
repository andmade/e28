<template>
  <div>
    <p>
      <strong>Cards in Deck: {{ size }}</strong>
    </p>
    <img src="../assets/deck.jpg" alt="Back of Card Deck" />
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  computed: {
    size: function() {
      return this.deck != [] ? this.deck.length : 0;
    }
  },
  props: {
    deck: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>
<style>
</style>