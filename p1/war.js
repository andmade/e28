/* 
1. implement computer pick
2. implement battle function */

let app = new Vue({
  el: '#game',
  data: {
    playerSelection: null,
    playerDeck: [
      { name: '5', value: 5, suit: 'spades' },
      { name: 'J', value: 11, suit: 'diamonds' },
      { name: 'Q', value: 12, suit: 'hearts' },
      { name: 'A', value: 1, suit: 'spades' }
    ],
    playerHand: [
      { name: '4', value: 4, suit: 'spades' },
      { name: '10', value: 10, suit: 'diamonds' },
      { name: 'K', value: 13, suit: 'hearts' },
      { name: 'K', value: 13, suit: 'spades' }
    ],
    computerCard: null,
    computerDeck: [
      { name: '4', value: 4, suit: 'spades' },
      { name: '10', value: 10, suit: 'diamonds' },
      { name: 'K', value: 13, suit: 'hearts' },
      { name: 'K', value: 13, suit: 'spades' }
    ],
    computerHand: [
      { name: '4', value: 4, suit: 'hearts' },
      { name: '10', value: 10, suit: 'clubs' },
      { name: 'K', value: 13, suit: 'diamonds' },
      { name: 'K', value: 13, suit: 'clubs' }
    ],
    playerScore: 0,
    computerScore: 0,
    previousPlayerCard: null,
    previousComputerCard: null,
    roundCount: 1,
    roundResult: null,
    gameResult: null
  },
  filters: {
    cardString(card) {
      return card.name + ' of ' + card.suit;
    }
  },
  computed: {
    playerCard: function() {
      return this.playerHand[this.playerSelection];
    }
  },
  watch: {
    // Watcher which updates the players hand while the round results are calculated
    roundCount: function() {
      this.previousPlayerCard = this.playerCard;
      this.previousComputerCard = this.computerCard;
      this.updateHand(this.playerHand, this.playerSelection, this.playerDeck);
      this.updateHand(this.computerHand, this.computerCard, this.computerDeck);
      this.playerSelection = null;
      this.computerCard = null;
    }
  },
  methods: {
    updateHand: function(cardHand, selectedCard, cardDeck) {
      let newCard = cardDeck.shift();
      if (newCard != null) {
        cardHand.splice(selectedCard, 1, newCard);
      } else {
        cardHand.splice(selectedCard, 1);
      }
    },
    updatePlayerHand: function() {
      // if (!this.playerSelection && this.playerSelection !== 0) {
      //   //TODO: Put in some sort of notice to player to pick a card first. For now, log.
      //   console.log('No card selected');
      //   return;
      // }
      this.updateHand(this.playerHand, this.playerSelection, this.playerDeck);
    },

    selectComputerCard: function() {
      let computerSelection = Math.floor(Math.random() * (this.computerHand.length - 1));
      console.log(computerSelection);
      this.computerCard = this.computerHand[computerSelection];
      console.log(this.computerCard.name + this.computerCard.suit);
    },
    scoreRound: function() {
      if (this.playerCard.value > this.computerCard.value) {
        this.roundResult = 'win';
        this.playerScore++;
      } else if (this.playerCard.value < this.computerCard.value) {
        this.roundResult = 'lose';
        this.computerScore++;
      } else {
        this.roundResult = 'tie';
      }
      console.log('player: ' + this.playerCard.value + ' ' + this.roundResult);
    },

    conductBattle: function() {
      this.selectComputerCard();
      this.scoreRound();
      this.roundCount++;
      /* 
      1. select and update computer card/hand/deck
      2. compare score and return results
      3. update player and computer scores
      4. display the cards on screen
      */
    }
  }
});
