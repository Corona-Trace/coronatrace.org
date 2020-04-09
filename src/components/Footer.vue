<template>
  <section class="section footer">
    <div class="container">
      <div class="columns footer__top">
        <div class="column footer__item footer__left">
          <LogoInverse />
        </div>
        <div class="column footer__item footer__middle">
          <g-link to="/about">About</g-link>
          <g-link to="/contributors">Contributors</g-link>
        </div>
        <div class="column footer__item footer__right">
          <div>&copy; {{ currentYear }} CoronaTrace</div>
        </div>
      </div>

      <div class="columns footer__bottom">
        <div class="column footer__item">
          <g-link to="/legal/privacy-policy">Privacy Policy</g-link>
          <g-link to="/legal/terms-of-service">Terms of Service</g-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LogoInverse from '~/assets/images/LogoInverse.svg'

export default {
  components: {
    LogoInverse
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
  background-color: $blue;
  color: $white;
  padding-top: 3rem;
  padding-bottom: 3rem;

  .column {
    @include until($tablet) {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > * {
      padding: 0.5rem 0;
    }

    @include from($tablet) {
      flex-direction: row;

      > * {
        padding: 0 1rem;
      }
    }

    @include from($desktop) {
      justify-content: flex-start;
      align-items: center;
    }
  }

  &__left {
    svg {
      height: auto;
    }
  }

  &__middle {
    justify-content: center;
  }

  &__right {
    .column {
      display: flex;
      justify-content: center;

      @include from($desktop) {
        justify-content: flex-end;
      }
    }
  }

  &__top {
    a {
      color: $white;
    }
  }

  &__bottom {
    border-top: 1px solid $grey;
    margin: 1rem 1rem 0;
    padding: 1rem 1rem 0 1rem;
    justify-content: center;

    a {
      color: $white;
      opacity: 80%;
    }

    .column {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
