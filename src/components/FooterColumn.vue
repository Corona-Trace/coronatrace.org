<template>
  <div class="column">
    <div
      class="footer__heading"
      v-if="block.Heading"
    >
      <h4>{{ block.Heading }}</h4>
    </div>
    <div class="footer__body">
      <component
        v-for="block in block.FooterItems"
        :is="block.component"
        :block="block"
        :key="block._uid"
      />

      <JoinWaitlist v-if="block._uid =='f2c7ea97-7bae-45d8-a70f-9cd5f7e681b9'"></JoinWaitlist>
    </div>
  </div>
</template>

<script>
import FooterLink from '~/components/FooterLink.vue'
import FooterLogo from '~/components/FooterLogo.vue'
import FooterButton from '~/components/FooterButton.vue'
import JoinWaitlist from '~/components/JoinWaitlist.vue'

export default {
  components: {
    FooterLink,
    FooterLogo,
    FooterButton,
    JoinWaitlist
  },
  computed: {
    block() {
      return this.$attrs.block
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
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
}
</style>