import Vue from 'vue';
import Vuex from 'vuex';
import * as global from './../global.js';
const axios = require('axios');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookmarks: [],
    events: [],
    selectedCategories: [],
    categories: []
  },
  mutations: {
    setEvents(state, payload) {
      state.events = payload;
    },
    setCategories(state, payload) {
      state.categories = payload;
    },
    setSelectedCategories(state, payload) {
      state.selectedCategories = payload;
    },
    updateSelectedCategories(state, payload) {
      state.selectedCategories = payload;
    }
  },
  getters: {
    featuredEvents(state) {
      return _.filter(state.events, { featured: true });
    },
    filteredEvents(state) {
      if (!state.selectedCategories) {
        return {};
      }
      return _.filter(state.events, function(event) {
        return _.some(event.categories, function(cat) {
          return _.includes(state.selectedCategories, cat);
        });
      });
    },
    getEventById(state) {
      return function(id) {
        return _.find(state.events, function(evt) {
          return evt.eventID == id;
        });
      };
    }
  },

  actions: {
    initialize(context) {
      axios.get(global.config.api + 'events.json').then(response => {
        let events = response.data;
        let categories = _.chain(events)
          .flatMap(function(event) {
            return event.categories;
          })
          .uniq()
          .sort()
          .value();
        context.commit('setEvents', events);
        context.commit('setCategories', categories);
        context.commit('setSelectedCategories', categories);
      });
    }
  }
});
