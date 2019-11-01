<template>
  <section class="score-section">
    <!-- Score Section -->
    <h2>Score</h2>
    <div class="column">
      <h3>Player</h3>
      <p class="score">{{ playerScore }}</p>
    </div>
    <div class="column">
      <h3>Computer</h3>
      <p class="score">{{ computerScore }}</p>
    </div>
    <template v-if="gameResult">
      <div>
        <p v-if="gameResult != 'TIE'" class="endgame-results">
          Game over! You have
          <span :class="gameResult">{{ gameResult }}</span>
          !
        </p>

        <p v-if="gameResult == 'TIE'" class="endgame-results">
          Game over! The war ended in a
          <span :class="gameResult">{{ gameResult }}</span>!
        </p>
      </div>
      <button @click="$emit('replay-game')" @keyup.enter="$emit('replay-game')">New game</button>
    </template>
  </section>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  props: {
    playerScore: Number,
    computerScore: Number,
    gameResult: String
  }
};
</script>
<style>
.score-section {
  grid-area: score;
  text-align: center;
}
.column {
  width: 48%;
  float: left;
  text-align: center;
}

.score {
  font-weight: bold;
  font-size: 2em;
}
</style>