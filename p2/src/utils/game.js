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

let suitRanking = {
  spades: { weak: 'diamonds', strong: 'hearts' },
  clubs: { weak: 'hearts', strong: 'diamonds' },
  diamonds: { weak: 'clubs', strong: 'spades' },
  hearts: { weak: 'spades', strong: 'clubs' }
};

let shuffleDeck = function(deck) {
  let newDeck = deck;
  for (let currentCard = 51; currentCard > 0; currentCard--) {
    let newCard = Math.floor(Math.random() * (currentCard + 1));
    let oldCard = newDeck[currentCard];
    newDeck[currentCard] = newDeck[newCard];
    newDeck[newCard] = oldCard;
  }
  return newDeck;
};

export function generateDeck() {
  let deck = [];
  cardMapping.forEach(function(cardName, cardValue) {
    ['spades', 'clubs', 'hearts', 'diamonds'].forEach(function(cardSuit) {
      deck.push({ name: cardName, value: cardValue, suit: cardSuit });
    });
  });
  return shuffleDeck(deck);
}

export function roundResults(firstCard, secondCard) {
  if (suitRanking[firstCard.suit].weak == secondCard.suit) {
    return 'LOST';
  } else if (suitRanking[firstCard.suit].strong == secondCard.suit) {
    return 'WON';
  } else {
    return firstCard.value < secondCard.value
      ? 'LOST'
      : firstCard.value > secondCard.value
      ? 'WON'
      : 'TIE';
  }
}
