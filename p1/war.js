let cardMapping = new Map([
  [1, 'A'],
  [2, '2'],
  [3, '3'],
  [4, '4'],
  [5, '5'],
  [6, '6'],
  [7, '7'],
  [8, '8'],
  [9, '9'],
  [10, '10'],
  [11, 'J'],
  [12, 'Q'],
  [13, 'K']
]);

let generateDeck = function() {
  let deck = [];
  cardMapping.forEach(function(cardName, cardValue) {
    ['spades', 'clubs', 'hearts', 'diamonds'].forEach(function(cardSuit) {
      deck.push({ name: cardName, value: cardValue, suit: cardSuit });
    });
  });
  return deck;
};

let app = new Vue({
  el: '#game',
  data: {
    newGame: true,
    showDirections: true,
    deck: generateDeck(),
    playerSelection: null,
    computerSelection: null,
    playerDeck: [],
    playerHand: [],
    computerDeck: [],
    computerHand: [],
    playerScore: 0,
    computerScore: 0,
    previousPlayerCard: null,
    previousComputerCard: null,
    roundCount: 1,
    roundResult: null,
    gameResult: null,
    suitRanking: {
      spades: { weak: 'diamonds', strong: 'hearts' },
      clubs: { weak: 'hearts', strong: 'diamonds' },
      diamonds: { weak: 'clubs', strong: 'spades' },
      hearts: { weak: 'spades', strong: 'clubs' }
    }
  },
  computed: {
    playerCard: function() {
      return this.playerHand[this.playerSelection];
    },
    computerCard: function() {
      return this.computerHand[this.computerSelection];
    }
  },
  watch: {
    roundCount: function() {
      this.previousPlayerCard = this.playerCard;
      this.previousComputerCard = this.computerCard;
      this.updateHand(this.playerHand, this.playerSelection, this.playerDeck);
      this.updateHand(this.computerHand, this.computerSelection, this.computerDeck);
      this.playerSelection = null;
      this.computerSelection = null;

      if (!this.playerHand.length) {
        this.gameResult =
          this.playerScore > this.computerScore
            ? 'WIN'
            : this.playerScore < this.computerScore
            ? 'LOSE'
            : 'TIE';
      }
    }
  },
  mounted: function() {
    //Uncomment the below line to start the game automatically on load
    //this.startGame();
  },
  // https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
  methods: {
    shuffleDeck: function() {
      let newDeck = this.deck;
      for (currentCard = 51; currentCard > 0; currentCard--) {
        let newCard = Math.floor(Math.random() * (currentCard + 1));
        let oldCard = newDeck[currentCard];
        newDeck[currentCard] = newDeck[newCard];
        newDeck[newCard] = oldCard;
      }
      return newDeck;
    },

    updateHand: function(cardHand, selectedCard, cardDeck) {
      let newCard = cardDeck.shift();
      if (newCard != null) {
        cardHand.splice(selectedCard, 1, newCard);
      } else {
        cardHand.splice(selectedCard, 1);
      }
    },

    selectComputerCard: function() {
      this.computerSelection = Math.floor(Math.random() * (this.computerHand.length - 1));
    },

    rankCards: function(firstCard, secondCard) {
      if (this.suitRanking[firstCard.suit].weak == secondCard.suit) {
        return 'LOSE';
      } else if (this.suitRanking[firstCard.suit].strong == secondCard.suit) {
        return 'WIN';
      } else {
        return firstCard.value < secondCard.value
          ? 'LOSE'
          : firstCard.value > secondCard.value
          ? 'WIN'
          : 'TIE';
      }
    },

    scoreRound: function() {
      this.roundResult = this.rankCards(this.playerCard, this.computerCard);
      switch (this.roundResult) {
        case 'WIN':
          this.playerScore++;
          break;
        case 'LOSE':
          this.computerScore++;
          break;
      }
    },

    conductBattle: function() {
      this.selectComputerCard();
      this.scoreRound();
      this.roundCount++;
    },

    startGame: function() {
      let newDeck = this.shuffleDeck();

      this.playerDeck = newDeck.slice(0, 26);
      this.computerDeck = newDeck.slice(26);

      this.playerHand = this.playerDeck.splice(0, 5);
      this.computerHand = this.computerDeck.splice(0, 5);

      this.newGame = false;
      this.showDirections = false;
    },
    replayGame: function() {
      this.startGame();

      this.previousPlayerCard = null;
      this.previousComputerCard = null;

      this.playerScore = 0;
      this.computerScore = 0;

      this.roundResult = null;
      this.gameResult = null;
    }
  }
});
