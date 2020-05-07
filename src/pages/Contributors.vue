<template>
  <layout>
    <div class="contributors">
      <section
        class="section page-header"
        :style="{ 'background-color': '#f7f9f8', 'text-align': 'center' }"
      >
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title is-1">Contributors</h1>
              <p class="subtitle">
                We’d like to thank all of our contributors that have made this entire effort possible.
              </p>
            </div>
          </div>
        </div>
      </section>

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
  metaInfo() {
    return {
      title: 'Contributors',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            'Here are some of the amazing contributors that make this effort possible.'
        }
      ]
    }
  },
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
  padding-top: 4rem;
  padding-bottom: 4rem;

  @include from($tablet) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  @include from($desktop) {
    padding-top: 9rem;
    padding-bottom: 9rem;
  }
}

.contributors {
  text-align: center;

  .page-header {
    background-color: $off-white;
  }

  .columns {
    align-items: center;
  }

  &__section {
    h2 {
      padding-bottom: 4rem;
    }
  }
}

.page-header {
  h1 {
    padding-bottom: 2rem;
  }

  .subtitle {
    max-width: 525px;
    margin: auto;
  }

  p:empty {
    display: none;
  }
}
</style>