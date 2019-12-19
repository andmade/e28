<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" sticky>
    <b-navbar-brand :to="{ name: 'home' }" exact>
      <img
        src="https://placekitten.com/g/30/30"
        class="d-inline-block align-top"
        alt="Kitten"
      />
      here@
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="link in links" :key="link" :to="{ name: link }" exact>
          {{ link | capitalize }}
        </b-nav-item>
      </b-navbar-nav>
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data: function() {
    return { chosen: '' };
  },
  props: ['links']
};
</script>

<style scoped>
.form-inline,
.form-control {
  width: 80% !important;
  margin-left: 20px;
}
.navbar-brand {
  font-size: 1.5em;
  font-weight: bold;
}
.nav-link {
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7) !important;
}

.router-link-active {
  color: white !important;
}
</style>
