<template>
  <div id="sidebar" class="bg-secondary">
    <section>
      <b-form-group label="Categories">
        <b-form-checkbox
          v-model="highlightAll"
          id="checkbox-1"
          @change="toggleCategories()"
        >Select All</b-form-checkbox>
        <b-form-checkbox-group
          v-model="selectedCategories"
          :options="categories"
          name="flavour-2a"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      highlightAll: true
    };
  },
  watchers: {
    // highlightAll: function() {
    //   if (this.highlightAll) {
    //     this.selectedCategories = [];
    //   } else {
    //     this.selectedCategories = this.categories;
    //   }
    // }
  },
  computed: {
    categories: function() {
      return this.$store.state.categories;
    },
    selectedCategories: {
      get: function() {
        return this.$store.state.selectedCategories;
      },
      set: function(value) {
        this.$store.commit('updateSelectedCategories', value);
      }
    }
  },
  methods: {
    toggleCategories: function() {
      if (this.highlightAll) {
        this.$store.commit('updateSelectedCategories', []);
      } else {
        this.$store.commit('updateSelectedCategories', this.categories);
      }
    }
  }
};
</script>

<style scoped>
#sidebar {
  padding-left: 20px;
  height: 100vh;
}

.router-link-active {
  color: #ef2e55 !important;
}
</style>
