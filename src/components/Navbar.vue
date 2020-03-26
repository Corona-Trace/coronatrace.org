<template>
    <b-navbar 
      wrapper-class="container"
      :fixed-top="true"
        >
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <Logo class="nav__logo" />
            </b-navbar-item>
        </template>
        <template slot="start">
  
        </template>

        <template slot="end">
            <b-navbar-item href="#">
              About
            </b-navbar-item>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        Download App
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import Logo from '~/assets/images/Logo.vue'

export default {
  components: {
    Logo
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>

</style>
