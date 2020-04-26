<template>
  <layout>
    <div class="privacy">

      <ContentWithImage :imageBoxShadow="true">
        <template v-slot:heading-tag></template>
        <template v-slot:heading>
          We Don’t Track People, We Trace Infections - Safely and Anonymously.
        </template>

        <template v-slot:body-text>
          <div>
            <p>We take privacy seriously. We believe that private information can be sufficiently
              protected and voluntarily shared to help save lives during this crisis.</p>
          </div>
        </template>

        <template v-slot:image>
          <v-lazy-image
            src="https://via.placeholder.com/600"
            alt="Test"
            src-placeholder="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          />
        </template>
      </ContentWithImage>

      <section class="section privacy__points">
        <div class="privacy__points__heading">
          <h3 class="privacy__points__heading-tag heading-tag">PRIVACY</h3>
        </div>
        <div class="privacy__points__body columns is-variable is-8">
          <div class="column is-3">
            <h4 class="title is-4">TraceToZero is an Opt-In App</h4>
            <div class="privacy__points__text">
              <p>We will use clear disclaimers as people sign up to
                explain what information is shared and how it will be used.</p>

            </div>
          </div>
          <div class="column is-3">
            <h4 class="title is-4">Location History</h4>
            <div class="privacy__points__text">
              <p>This traditionally private information will be disassociated from an
                individual before inclusion in the TraceToZero database; this information will not be
                made publicly visible; any displays will be of aggregated information.</p>
            </div>
          </div>
          <div class="column is-3">
            <h4 class="title is-4">Coronavirus Test Confirmation</h4>
            <div class="privacy__points__text">
              <p>The test result documentation will not be
                permanently stored by TraceToZero; only infectious status will be stored in the
                database; any PII included on the test result documentation will not be stored in the
                database.</p>
            </div>
          </div>
        </div>
        <h4 class="title">All information and communication will be encrypted.</h4>

        <div>

        </div>
      </section>

    </div>
  </layout>
</template>

<script>
import VLazyImage from 'v-lazy-image'
import ContentWithImage from '~/components/ContentWithImage.vue'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { renderImage } from '~/helpers/contentful'

export default {
  components: {
    VLazyImage,
    ContentWithImage
  },
  methods: {}
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

.privacy__points {
  text-align: center;
  background-color: $off-white;

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__heading-tag {
    @include heading_tag($trace-green);
  }

  &__body {
    display: flex;
    justify-content: center;
  }
}
</style>
