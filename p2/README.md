# Project 2

- By: Ashley Davis
- Production URL: <http://p2.andmade.me>

## Build strategy

- [ ] Integrated
- [x] Comprehensive

## Outside resources

- "Build Decoupled Vue.js Applications with Hooks": https://markus.oberlehner.net/blog/build-decoupled-vue-applications-with-hooks **(Didn't understand everything with the hook system, but at least it helped with figuring out I could move the deck/scoring business logic to a separate file and import the functions.)**
- "The correct way to force Vue to re-render a component?": https://michaelnthiessen.com/force-re-render/ **(Used to fix last-minute bug with resetting the game. Resulted in giving a component a key, in this case, the number of games. Vue complained if I altered the props themselves because the parent could rewrite them, so I re-assigned them as data, only to discover they wouldn't change if the props were changed. In general, trying to come up with creative uses of emit and props to affect change across components was the hardest part of the project. )**
