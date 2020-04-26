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
            <h4>Download the App</h4>
          </div>
          <div class="footer__body">
            <!-- <BadgeApple class="badge" />
          <BadgeGoogle class="badge" /> -->
            <div class="footer__item">
              <b-button
                type="is-primary is-rounded"
                disabled
              >Coming Soon</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__bottom--left">
          <div>
            &copy; {{ currentYear }} TraceToZero
          </div>
        </div>
        <div class="footer__bottom--right">
          <g-link to="/legal/privacy-policy">Privacy Policy</g-link>
          <g-link to="/legal/terms-of-service">Terms of Service</g-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/assets/images/Logo.svg'
import BadgeApple from '~/assets/images/BadgeApple.svg'
import BadgeGoogle from '~/assets/images/BadgeGoogle.svg'

export default {
  components: {
    Logo,
    BadgeApple,
    BadgeGoogle
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
    border-top: 1px solid $gray;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    flex-direction: column;

    @include from($desktop) {
      flex-direction: row;
    }

    &--left {
      display: flex;
      justify-content: flex-end;
      margin: 1rem 0;
      flex-direction: column;

      @include from($desktop) {
        flex-direction: row;
        padding-right: 0.5rem;
        border-right: 1px solid $gray;
      }

      > * {
        padding: 0 0.5rem;
        flex-direction: column;

        @include from($desktop) {
          flex-direction: row;
          margin-right: 1rem;
        }
      }
    }

    &--right {
      display: flex;
      justify-content: flex-start;
      padding-bottom: 0.5rem;
      margin: 1rem 0;
      flex-direction: column;

      @include from($desktop) {
        flex-direction: row;
        padding-left: 1rem;
      }

      > * {
        padding-bottom: 0.5rem;
        flex-direction: column;

        @include from($desktop) {
          flex-direction: row;
          padding: 0 0.5rem;
        }
      }
    }
  }
}
</style>