<template>
  <b-navbar id="main-nav" wrapper-class="container" :fixed-top="true">
    <template slot="brand">
      <b-navbar-item tag="g-link" :to="{ path: '/' }">
        <Logo class="nav__logo" />
      </b-navbar-item>
    </template>
    <template slot="start"> </template>

    <template slot="end">
      <b-navbar-item tag="g-link" to="/about">
        About
      </b-navbar-item>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary" disabled>
            Coming Soon
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import Logo from '~/assets/images/Logo.svg'

export default {
  components: {
    Logo
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.scrolled {
  #main-nav {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  }
}
</style>
