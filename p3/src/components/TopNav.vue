<template>
  <div>
    <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span>here@</span>
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link
            exact
            class="navbar-item"
            v-for="link in links"
            :key="link"
            :to="{ name: link }"
          >
            {{ link | capitalize }}
          </router-link>
        </div>
      </div>
    </nav>
  </div>
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
.navbar {
  margin-bottom: 10px;
}
.router-link-active {
  background-color: #ef2e55;
}

.navbar-item.navbar-search {
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
}
.navbar-item .control {
  width: 70%;
  margin-left: 8%;
}

.navbar-brand {
  font-size: 2em;
  font-weight: bold;
}
</style>
