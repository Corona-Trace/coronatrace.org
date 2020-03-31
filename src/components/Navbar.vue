<template>
  <b-navbar
    id="main-nav"
    wrapper-class="container"
    :fixed-top="true"
    :class="{ scrolled: scrolled }"
  >
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
  data: function() {
    return {
      navHeight: null,
      scrolled: null,
      lastPosition: null,
      limitPosition: 66
    }
  },
  components: {
    Logo
  },
  methods: {
    handleScroll() {
      // Stop gridsome from trying to run this function on build - results in window not defined error
      if (!process.isClient) return

      if (window.scrollY > this.limitPosition) {
        this.scrolled = true
        // move up!
      }

      if (window.scrollY <= this.limitPosition) {
        this.scrolled = false
        // move down
      }

      this.lastPosition = window.scrollY
      // this.scrolled = window.scrollY > 250;
    }
  },
  created() {
    // Stop gridsome from trying to run this function on build - results in window not defined error
    if (!process.isClient) return
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.handleScroll()
  },
  destroyed() {
    if (!process.isClient) return
    window.removeEventListener('scroll', this.handleScroll)
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
#main-nav {
  transition: box-shadow 0.3s;

  &.scrolled {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s;
  }
}
</style>
