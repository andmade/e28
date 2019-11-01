<template>
  <div class="player-area">
    <button
      class="play-card-button"
      v-show="playerSelection != null"
      @click="playCard"
      @keyup.enter="playCard"
    >Play Card</button>
    <Deck class="player-deck" :deck="deck"></Deck>
    <div class="card-hand">
      <template v-for="(card, index) in playerHand">
        <label :key="card.value+card.suit+'label'">
          <input type="radio" :id="card.value+card.suit" :value="index" v-model="playerSelection" />
          <Card :name="card.name" :value="card.value" :suit="card.suit" :key="card.value+card.suit"></Card>
        </label>
      </template>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import Deck from "./Deck";

export default {
  components: {
    Card,
    Deck
  },
  data: function() {
    return {
      playerSelection: null,
      playerHand: this.cards.slice(0),
      deck: this.drawpile.slice(0)
    };
  },
  props: {
    cards: Array,
    drawpile: Array
  },
  watch: {
    playerHand: function() {
      if (this.playerHand.length == 0) {
        this.$emit("end-game");
      }
    }
  },
  methods: {
    playCard: function() {
      let chosenCard = this.playerHand[this.playerSelection];
      this.$emit("run-round", chosenCard);
      if (this.deck.length > 0) {
        let newCard = this.deck[0];
        this.deck.shift();
        this.playerHand.splice(this.playerSelection, 1, newCard);
      } else {
        this.playerHand.splice(this.playerSelection, 1);
      }
      this.playerSelection = null;
    }
  }
};
</script>
<style>
.player-area {
  grid-area: deck;
  display: grid;
  grid-template-areas:
    "button button button"
    "pile hand hand";
  row-gap: 1.5em;
  grid-template-rows: 50px auto;
  align-items: end;
  justify-items: stretch;
}

.play-card-button {
  grid-area: button;
  justify-self: center;
  margin-bottom: 15px;
}
.player-deck {
  text-align: center;
  grid-area: pile;
  /* height: 114px; */
}

.player-deck img {
  display: inline-block;
  height: 100%;
}

.card-hand {
  display: table;
  grid-area: hand;
  padding-bottom: 5px;
}

.card-container {
  display: inline-block;
  padding-right: 5px;
}

input[type="radio"] {
  visibility: hidden;
}

input[type="radio"]:checked + .card,
label .card:hover,
label .card:focus {
  transform: translateY(-50px) scale(1.3);
  outline: 0;
}

input[type="radio"]:checked + .card {
  box-shadow: 0 0 7px orangered;
}
</style>