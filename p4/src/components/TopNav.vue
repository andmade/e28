<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" sticky>
    <b-navbar-brand :to="{ name: 'home' }" exact>here@</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          v-for="link in links"
          :key="link"
          :to="{ name: link }"
          exact
        >{{ link | capitalize }}</b-nav-item>
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
