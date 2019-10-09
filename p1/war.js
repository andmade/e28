let app = new Vue({
  el: '#game',
  data: {
    playerCard: null,
    playerDeck: [],
    playerHand: [
      { name: '4', value: 4, suit: 'spades' },
      { name: '10', value: 10, suit: 'diamonds' },
      { name: 'K', value: 13, suit: 'hearts' },
      { name: 'K', value: 13, suit: 'spades' }
    ],
    computerCard: null,
    computerDeck: [],
    computerHand: [],
    playerScore: 0,
    computerScore: 0,
    roundResult: null,
    gameResult: null
  }
});
