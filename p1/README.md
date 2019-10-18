## Project 1: War Card Game (Modified) in Vue

- By: Ashley Davis
- Production URL: [http://p1.andmade.me](http://p1.andmade.me)

## Notes for instructor

Since the Week 4 material goes over so much of the High-Low game in Vue, I decided it would be better to switch to a new game for Project 1. Therefore, I switched to the **War** card game with some modifications.

1. There is only 1 round.
2. Players can choose from a hand of 5 cards.
3. Scoring is such that:

- Diamonds beat Spades and Spades beat Hearts
- Hearts beat Clubs and Clubs beat Diamonds
- If two cards of the same color (i.e. Spades and Clubs, Hearts and Diamonds) are selected, the card with the highest number value wins. If the cards are the same value, it's a tie and neither side gains a point.

## Outside Resources

For outside resources, do not include course notes or examples, but do include any/all of the following:

- Image of Card Deck: http://clipart-library.com/clipart/8cxrbGE6i.htm
- Javascript Map Prototype: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- Shuffling the Card Deck / Randomizing a Javascript Array: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array and https://en.wikipedia.org/wiki/Fisher–Yates_shuffle _(This algorithm essentially seems to be the definitive/standard way to shuffle an array in an language that doesn't have a shuffle array function)_
- CSS Entities: https://www.w3schools.com/cssref/css_entities.asp _(For generating the suit images)_
- "Github: Call watch callback even when value is set to current value": https://github.com/vuejs/vue/issues/1302 _(Resulted in the roundCount property as a means of doing hand and deck updating after a round is played)._
- "Lato" from Google Fonts: https://fonts.google.com/specimen/Lato
- Normalize.css: https://necolas.github.io/normalize.css/
- Little UI Details: https://codepen.io/tyrellrummage/pen/ZJPXgy _(for card hover/active effects)_
