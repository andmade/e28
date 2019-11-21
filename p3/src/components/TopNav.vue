<template>
  <div>
    <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
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
        <div class="navbar-item navbar-search">
          <!-- <input class="input is-rounded" type="text" placeholder="Search" /> -->

          <div class="control is-expanded has-icons-left">
            <input class="input is-rounded" type="input" placeholder="Search..." />
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
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

<style>
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
</style>
