<template>
  <section class="section footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="footer__heading">
            <g-link to="/">
              <Logo />
            </g-link>
          </div>
          <div class="footer__body"></div>
        </div>
        <div class="column">
          <div class="footer__heading">
            <h4>TraceToZero</h4>
          </div>
          <div class="footer__body">
            <g-link
              class="footer__item"
              to="/about"
            >About</g-link>
            <g-link
              class="footer__item"
              to="/privacy"
            >Privacy</g-link>
            <g-link
              class="footer__item"
              to="/contributors"
            >Contributors</g-link>
          </div>
        </div>
        <div class="column">
          <div class="footer__heading">
            <h4>Contact Us</h4>
          </div>
          <div class="footer__body">
            <g-link
              class="footer__item"
              to="/support"
            >Support</g-link>
          </div>
        </div>
        <div class="column">
          <div class="footer__heading">
            <h4>Legal</h4>
          </div>
          <div class="footer__body">
            <g-link
              class="footer__item"
              to="/legal/privacy-policy"
            >Privacy Policy</g-link>
            <g-link
              class="footer__item"
              to="/legal/terms-of-service"
            >Terms of Service</g-link>
          </div>
        </div>
        <div class="column">
          <div class="footer__heading">
            <h4>Download the App</h4>
          </div>
          <div class="footer__body">
            <!-- <BadgeApple class="badge" />
          <BadgeGoogle class="badge" /> -->
            <div class="footer__item">
              <JoinWaitlist />
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">

        <div>
          &copy; {{ currentYear }} TraceToZero
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/assets/images/Logo.svg'
import BadgeApple from '~/assets/images/BadgeApple.svg'
import BadgeGoogle from '~/assets/images/BadgeGoogle.svg'
import JoinWaitlist from '~/components/JoinWaitlist.vue'

export default {
  components: {
    Logo,
    BadgeApple,
    BadgeGoogle,
    JoinWaitlist
  },
  computed: {
    currentYear() {
      let currentYear = new Date().getFullYear()
      return currentYear
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: $gray-bg;
  color: $gray-logo;

  &__heading {
    padding-bottom: 1rem;

    h4 {
      font-weight: bold;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
  }

  &__item {
    color: $white;
    margin-bottom: 0.5rem;
  }

  a {
    color: $gray-dark;

    &:hover {
      color: $gray-logo;
    }
  }

  &__bottom {
    padding-top: 3rem;
    margin-top: 3rem;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    flex-direction: column;

    @include from($desktop) {
      flex-direction: row;
    }
  }
}
</style>