import Vue from 'vue';
import Vuex from 'vuex';
import * as global from './../global.js';
const axios = require('axios');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookmarks: [],
    events: []
  },
  mutations: {
    setEvents(state, payload) {
      state.events = payload;
    }
  },
  getters: {
    featuredEvents(state) {
      console.log(state.events);
      return _.filter(state.events, { featured: true });
    },
    getTodoById(state) {
      return function(id) {
        return state.todos.find(todo => todo.id === id);
      };
    }
  },
  actions: {
    setEvents(context) {
      axios.get(global.config.api + 'events.json').then(response => {
        context.commit('setEvents', response.data);
      });
    }
  }
});
