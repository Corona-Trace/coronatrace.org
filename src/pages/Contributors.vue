<template>
  <layout>
    <div class="contributors">
      <PageHeader title="Contributors">
        We’d like to thank all of our contributors that have made this entire
        effort possible.
      </PageHeader>

      <CoreContributors />

      <CorporateContributors />

      <!-- <IndividualContributors /> -->
    </div>
  </layout>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import CoreContributors from '~/components/contributors/CoreContributors.vue'
import CorporateContributors from '~/components/contributors/CorporateContributors.vue'
import IndividualContributors from '~/components/contributors/IndividualContributors.vue'

export default {
  components: {
    PageHeader,
    CoreContributors,
    CorporateContributors,
    IndividualContributors
  }
}
</script>



<style lang="scss" scoped>
.section {
  padding-top: 9rem;
  padding-bottom: 2rem;

  &__contributors {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

.contributors {
  padding-bottom: 6rem;

  .columns {
    align-items: center;
  }

  &__section {
    h2 {
      padding-bottom: 4rem;
    }
  }
}
</style>