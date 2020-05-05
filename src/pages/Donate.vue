<template>
  <Layout>
    <section class="section donate">
      <div class="container">
        <div class="columns is-variable is-8">
          <div class="column">
            <h1 class="title is-1">Donate Now</h1>
            <p class="subtitle">
              Your donation will help save lives. TraceToZero is completely a
              volunteer effort made possible by dozen’s of folks who want to
              make a difference. Every penny will go toward operating expenses
              like server costs, development, and distribution.
            </p>
          </div>
          <div class="column">
            <DonationWidget />
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import DonationWidget from '~/components/donate/DonationWidget.vue'

export default {
  components: {
    PageHeader,
    DonationWidget
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 6rem;
  padding-bottom: 3rem;

  @include from($desktop) {
    padding-top: 9rem;
  }
}

.donate {
  &__widget {
    padding: 2rem;
    border-radius: 6px;
    background-color: $blue-light;
    @include box_shadow(2);
  }
}
</style>