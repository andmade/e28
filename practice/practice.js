// Component Vue instance
Vue.component('round-detail', {
  // Note how the data property receives a function in a Component
  data: function() {
    return {
      deleted: false
    };
  },
  template: `
  <div></div>

<div></div>
  `,
  methods: {
    deleteRound: function() {
      this.deleted = true;
    }
  }
});

// root Vue instance
let app = new Vue({
  el: '#app'
});
