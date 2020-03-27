<template>
  <section class="section footer">
    <div class="container">
      <div class="columns footer__top">
        <div class="column footer__item footer__top-left">
          <LogoInverse />
        </div>
        <div class="column footer__item footer__top-middle"></div>
        <div class="column footer__item footer__top-right">
          <div class="column">&copy; {{ currentYear }} CoronaTrace</div>
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

  &__item {
    display: flex;
    justify-content: center;

    @include from($desktop) {
      justify-content: flex-start;
    }
  }

  &__top {
    a {
      color: $white;
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
    .column {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
