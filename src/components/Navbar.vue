<template>
  <b-navbar
    id="main-nav"
    wrapper-class="container"
    :fixed-top="true"
    :class="{ scrolled: scrolled }"
    class="alternateBackground"
  >
    <template slot="brand">
      <b-navbar-item
        tag="g-link"
        :to="{ path: '/' }"
      >
        <Logo class="nav__logo" />
      </b-navbar-item>
    </template>
    <template slot="start"> </template>

    <template slot="end">

      <component
        v-for="block in block.NavLinks"
        v-if="block.component == 'NavLink'"
        :is="block.component"
        :block="block"
        :key="block._uid"
      />

      <b-navbar-item tag="div">
        <div class="buttons">

          <a
            href="https://coronatrace.us19.list-manage.com/subscribe?u=261f5cf9c913c5f184f41bde2&id=6c859007ff"
            v-if="$route.path.includes('beta')"
            class="button is-primary is-rounded"
          >
            Join the Beta
          </a>
          <JoinWaitList></JoinWaitList>

          <component
            v-for="block in block.NavLinks"
            v-if="block.component == 'NavCTA'"
            :is="block.component"
            :block="block"
            :key="block._uid"
          />
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import Logo from '~/assets/images/Logo.svg'
import JoinWaitList from '~/components/JoinWaitlist.vue'
import NavLink from '~/components/NavLink.vue'
import NavCTA from '~/components/NavCTA.vue'
import { mapActions } from 'vuex'

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
    Logo,
    JoinWaitList,
    NavLink,
    NavCTA
  },
  methods: {
    ...mapActions(['toggleEmailModal']),
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
    },
    showModal() {
      this.$emit('showModal')
    }
  },
  computed: {
    block() {
      return this.$static.storyblokEntry.content
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
  storyblokEntry(id: "story-10821360-default") {
    id,
    name,
    content
  }
}
</static-query>

<style lang="scss" scoped>
#main-nav {
  transition: box-shadow 0.3s;

  .navbar-item {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: 400;

    &:hover {
      background-color: transparent;
    }
  }

  &.scrolled {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s;
  }

  .button {
    @include box_shadow(2);
  }
}
</style>
