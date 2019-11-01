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
        <div class="card-container" :key="card.value+card.suit+'div'" tabindex="-1">
          <input type="radio" :id="card.value+card.suit" :value="index" v-model="playerSelection" />
          <label :for="card.value+card.suit">
            <Card
              :name="card.name"
              :value="card.value"
              :suit="card.suit"
              :key="card.value+card.suit"
            ></Card>
          </label>
        </div>
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
      playerHand: this.cards,
      deck: this.drawpile
    };
  },
  props: {
    cards: Array,
    drawpile: Array,
    resetdata: Boolean
  },
  watch: {
    playerHand: function() {
      if (this.playerHand.length == 0) {
        this.$emit("end-game");
      }
    },
    resetdata: function() {
      this.reset();
    }
  },
  methods: {
    playCard: function() {
      this.$emit("run-round", this.playerHand[this.playerSelection]);
      if (this.deck.length > 0) {
        let newCard = this.deck[0];
        this.deck = this.deck.slice(1);
        this.playerHand.splice(this.playerSelection, 1, newCard);
      } else {
        this.playerHand.splice(this.playerSelection, 1);
      }
      this.playerSelection = null;
    },

    reset: function() {
      console.log("reset");
      this.playerSelection = null;
      this.playerHand = this.cards;
      this.deck = this.drawpile;
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

input[type="radio"]:checked,
.card-container:hover,
.card-container:focus {
  transform: translateY(-50px) scale(1.2);
  outline: 0;
}
</style>