<template>
  <header v-cloak>
    <h1>Project 2 | War Card Game w/ Vue.js SFC</h1>
    <button
      v-cloak
      @click="showDirections=!showDirections"
    >{{ showDirections ? 'Hide Directions' : 'Show Directions' }}</button>
    <transition name="slide">
      <div class="game-description" v-show="showDirections">
        <p>
          <strong>How to Play:</strong>
          The classic card game
          <i>War</i>
          , with a twist. In this take, a standard 52-card deck is evenly divided
          between two players. Each player starts with a hand of 5 cards. At each turn,
          they simulataneously pick a card to 'go to battle' against the other player.
          The results of the battle are determined as so:
        </p>

        <ul>
          <li>Diamonds beat Spades and Spades beat Hearts</li>
          <li>Hearts beat Clubs and Clubs beat Diamonds</li>
          <li>
            If two cards of the same color (i.e. Spades and Clubs, Hearts and Diamonds)
            are selected, the card with the highest number value wins.
          </li>
          <li>
            Every round won increases the player score by one point. In the event of a
            tie, neither player receives a point. At the end of the game, the player
            with the most points wins. If the players have equal scores, then it ends in
            a draw.
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  props: {
    showDirections: {
      Type: Boolean,
      default: true
    }
  }
};
</script>
<style scoped>
header {
  background-color: #2a3042;
  color: white;
  font-weight: bold;
  padding: 5px 20px;
  margin-bottom: 10px;
}

h1 {
  display: inline-block;
  vertical-align: middle;
}

button {
  display: inline-block;
  margin: 0 30px;
  vertical-align: middle;
  background-color: #82a59d;
}
</style>