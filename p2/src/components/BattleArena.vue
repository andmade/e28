<template>
  <section class="battle-arena">
    <!-- War Section -->
    <h2>Round Results</h2>
    <p v-if="roundResult" class="round-results" :class="roundResult">{{ roundResult }}</p>
    <template v-if="roundResult">
      <div class="battle-card">
        <h3>
          Your
          <br />Card
        </h3>
        <Card :name="playerCard.name" :value="playerCard.value" :suit="playerCard.suit"></Card>
      </div>
      <div class="battle-card">
        <h3>
          Computer
          <br />Card
        </h3>
        <Card :name="computerCard.name" :value="computerCard.value" :suit="computerCard.suit"></Card>
      </div>
    </template>
  </section>
</template>
<script>
import Card from "./Card";

export default {
  components: {
    Card
  },
  data: function() {
    return {};
  },
  props: {
    roundResult: String,
    playerCard: Object,
    computerCard: Object
  }
};
</script>
<style>
.battle-arena {
  grid-area: battle;
  min-height: 330px;
  text-align: center;
  width: 100%;
}

.battle-card {
  display: inline-block;
  text-align: center;
}

.battle-card:first-of-type {
  margin-right: 60px;
}
</style>