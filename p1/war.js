let app = new Vue({
  el: '#game',
  data: {
    playerSelection: null,
    playerDeck: [
      { value: 5, suit: 'spades' },
      { value: 11, suit: 'diamonds' },
      { value: 12, suit: 'hearts' },
      { value: 1, suit: 'spades' }
    ],
    playerHand: [
      { value: 4, suit: 'spades' },
      { value: 10, suit: 'diamonds' },
      { value: 13, suit: 'hearts' },
      { value: 13, suit: 'spades' }
    ],
    computerCard: null,
    computerDeck: [
      { value: 4, suit: 'spades' },
      { value: 10, suit: 'diamonds' },
      { value: 13, suit: 'hearts' },
      { value: 13, suit: 'spades' }
    ],
    computerHand: [
      { value: 4, suit: 'hearts' },
      { value: 10, suit: 'clubs' },
      { value: 13, suit: 'diamonds' },
      { value: 13, suit: 'spades' }
    ],
    playerScore: 0,
    computerScore: 0,
    roundResult: null,
    gameResult: null,
    cardNames: new Map([
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
    ])
  },
  computed: {
    playerCard: function() {
      return this.playerHand[this.playerSelection];
    }
  },
  methods: {
    playWar: function() {
      if (!this.playerSelection && this.playerSelection !== 0) {
        //TODO: Put in some sort of notice to player to pick a card first. For now, log.
        console.log('No card selected');
        return;
      }
      let newCard = this.playerDeck.shift();
      if (newCard) {
        this.playerHand.splice(this.playerSelection, 1, this.playerDeck.shift());
      } else {
        this.playerHand.splice(this.playerSelection, 1);
      }
      this.playerSelection = null;
    }
  }
});
