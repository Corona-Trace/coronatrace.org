<template>
  <layout>
    <div class="contributors">
      <PageHeader title="Contributors">
        We’d like to thank all of our contributors that have made this entire
        effort possible.
      </PageHeader>

      <section class="section contributors__section contributors__core">
        <div class="container">
          <h2 class="title">Core Contributors</h2>
          <div class="columns is-multiline">
            <div class="column is-4">
              <a target="_blank" href="https://www.google.com">
                <g-image
                  src="https://dummyimage.com/500x92/888/aaa"
                  alt="Mutual Mobile Logo"
                ></g-image>
              </a>
            </div>

            <div class="column is-4">
              <a target="_blank" href="https://www.google.com">
                <img
                  src="https://dummyimage.com/500x92/888/aaa"
                  alt="Bolt Source"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="section contributors__section contributors__corporate">
        <div class="container">
          <h2 class="title">Corporate Contributors</h2>
          <div class="columns"></div>
        </div>
      </section>

      <section class="section contributors__section contributors__individual">
        <div class="container">
          <h2 class="title">Individual Contributors</h2>
          <div class="columns"></div>
        </div>
      </section>
    </div>
  </layout>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 9rem;
  padding-bottom: 2rem;
}

.contributors {
  &__section {
    h2 {
      padding-bottom: 4rem;
    }
  }
}
</style>