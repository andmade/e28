<template>
  <div>
    <p>
      <strong>Cards in Deck: {{ size }}</strong>
    </p>
    <img v-if="!deck.empty" src="../assets/deck.jpg" alt="Back of Card Deck" />
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
    },
    empty: function() {
      return this.deck == [];
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