<template>
  <div
    class="column"
    v-editable="blok"
  >
    <div
      class="footer__heading"
      v-if="blok.Heading"
    >
      <h4>{{ blok.Heading }}</h4>
    </div>
    <div class="footer__body">
      <component
        v-for="blok in blok.FooterItems"
        :is="blok.component"
        :blok="blok"
        :key="blok._uid"
      />

      <JoinWaitlist v-if="blok.Heading =='Download the App'"></JoinWaitlist>
    </div>
  </div>
</template>

<script>
import FooterLink from '~/components/FooterLink.vue'
import Logo from '~/components/Logo.vue'
import FooterButton from '~/components/FooterButton.vue'
import JoinWaitlist from '~/components/JoinWaitlist.vue'

export default {
  props: ['blok'],
  components: {
    FooterLink,
    Logo,
    FooterButton,
    JoinWaitlist
  },
  computed: {}
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