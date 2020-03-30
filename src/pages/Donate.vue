<template>
  <Layout>
    <div class="donate">
      <PageHeader title="Donate Now" largeMargins>
        Your donation will help save lives. Coronatrace is completely a
        volunteer effort made possible by dozen’s of folks who want to make a
        difference. Every penny will go toward operating expenses like server
        costs, development, and distribution.
      </PageHeader>

      <DonationWidget />
    </div>
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import DonationWidget from '~/components/DonationWidget.vue'

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
.page-header {
  .section {
    padding-top: 13rem;
    padding-bottom: 3rem;
  }
}
</style>