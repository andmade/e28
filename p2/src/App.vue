<template>
  <div id="app">
    <Header :show-directions="showDirections"></Header>
    <main v-cloak>
      <button v-if="newGame" @click="startGame()" @keyup.enter="startGame()">Ready? Let's Begin!</button>
      <div id="game_area" v-if="!newGame">
        <BattleArena
          :round-result="roundResult"
          :player-card="previousPlayerCard"
          :computer-card="previousComputerCard"
        ></BattleArena>
        <Scoreboard
          :game-result="gameResult"
          :player-score="playerScore"
          :computer-score="computerScore"
          @replay-game="replayGame()"
        ></Scoreboard>

        <Hand
          :cards="initialPlayerHand"
          :drawpile="initialPlayerDeck"
          @run-round="runRound($event)"
          @end-game="endGame()"
          :key="gameNumber"
        ></Hand>
      </div>
    </main>
  </div>
</template>

<script>
// import Card from "./components/Card.vue";
import Hand from "./components/Hand.vue";
import Header from "./components/Header.vue";
import BattleArena from "./components/BattleArena.vue";
import Scoreboard from "./components/Scoreboard.vue";
import { generateDeck, roundResults } from "./utils/game.js";

export default {
  name: "app",
  components: {
    //Card,
    Hand,
    Header,
    BattleArena,
    Scoreboard
  },
  data: function() {
    return {
      newGame: true,
      showDirections: true,
      previousPlayerCard: null,
      previousComputerCard: null,
      roundResult: "",
      playerScore: 0,
      computerScore: 0,
      gameDeck: null,
      initialPlayerDeck: null,
      initialPlayerHand: null,
      computerDeck: null,
      gameResult: "",
      gameNumber: 0
    };
  },
  mounted: function() {
    //Uncomment the below line to start the game automatically on load
    // this.startGame();
  },
  methods: {
    startGame: function() {
      this.gameDeck = generateDeck();

      this.initialPlayerDeck = this.gameDeck.slice(0, 26);
      this.computerDeck = this.gameDeck.slice(26);

      this.initialPlayerHand = this.initialPlayerDeck.splice(0, 5);

      this.newGame = false;
      this.showDirections = false;
    },
    runRound: function(playedCard) {
      let computerCard = this.computerDeck.shift();

      this.roundResult = roundResults(playedCard, computerCard);
      switch (this.roundResult) {
        case "WON":
          this.playerScore++;
          break;
        case "LOST":
          this.computerScore++;
          break;
      }
      this.previousPlayerCard = playedCard;
      this.previousComputerCard = computerCard;
    },
    endGame: function() {
      this.gameResult =
        this.playerScore > this.computerScore
          ? "WON"
          : this.playerScore < this.computerScore
          ? "LOST"
          : "TIE";
    },
    replayGame: function() {
      this.previousPlayerCard = null;
      this.previousComputerCard = null;

      this.playerScore = 0;
      this.computerScore = 0;

      this.roundResult = null;
      this.gameResult = null;

      this.startGame();
      this.gameNumber++;
    }
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h2 {
  color: #c55d00;
}
button {
  display: block;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  background-color: #2a3042;
  margin: 0 auto;
}

#game_area {
  display: grid;
  min-width: 800px;
  justify-content: space-around;
  justify-items: center;
  grid-template-areas:
    ". battle score score ."
    "deck deck deck deck deck";
}

h3 {
  font-size: 1.3em;
}

.round-results {
  font-weight: bold;
  font-size: 1.3em;
  margin: 0;
  padding: 0;
}
.WON {
  color: green;
}

.LOST {
  color: red;
}

.TIE {
  color: blue;
}
.endgame-results {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
