<template>
  <section class="section footer">
    <div class="container">
      <div class="columns">
        <component
          v-for="block in block.FooterColumns"
          :is="block.component"
          :block="block"
          :key="block._uid"
        />
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
import FooterColumn from '~/components/FooterColumn.vue'

export default {
  components: {
    Logo,
    BadgeApple,
    BadgeGoogle,
    JoinWaitlist,
    FooterColumn
  },
  computed: {
    currentYear() {
      let currentYear = new Date().getFullYear()
      return currentYear
    },
    block() {
      return this.$static.storyblokEntry.content
    }
  }
}
</script>

<static-query>
query {
  storyblokEntry(id: "story-10822706-default") {
    id,
    name,
    content
  }
}
</static-query>

<style lang="scss">
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