<template>
  <section class="section footer">
    <div class="container">
      <div class="columns footer__top">
        <div class="column footer__item footer__top-left">
          <LogoInverse />
        </div>
        <div class="column footer__item footer__top-middle">
          <g-link to="/about">About</g-link>
          <g-link to="/contributors">Contributors</g-link>
        </div>
        <div class="column footer__item footer__top-right">
          <div class="column">&copy; {{ currentYear }} CoronaTrace</div>
        </div>
      </div>

      <!-- <div class="columns footer__bottom"></div> -->
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

  &__item {
    display: flex;
    justify-content: center;

    @include from($desktop) {
      justify-content: flex-start;
      align-items: center;
    }
  }

  &__top {
    a {
      color: $white;
    }

    &-middle {
      justify-content: center;
      flex-direction: column;
      align-items: center;

      > * {
        padding: 1rem 0;
      }

      @include from($tablet) {
        flex-direction: row;

        > * {
          padding: 0 1rem;
        }
      }
    }

    &-right {
      .column {
        display: flex;
        justify-content: center;

        @include from($desktop) {
          justify-content: flex-end;
        }
      }
    }
  }

  &__bottom {
    border-top: 1px solid $grey-light;
    margin-top: 2rem;
    padding: 1rem 1rem 0 1rem;
    a {
      color: lighten($white, 20%);
    }

    .column {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
