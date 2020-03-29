<template>
  <Layout>
    <div class="about">
      <PageHeader />

      <section class="section about__overview about__text alternateBackground">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h2 class="title">Overview</h2>
              <div class="about__text-body">
                <p>
                  Nationwide social-isolation and quarantines are helpful in the
                  short-term to limit the possibility that hospitals are
                  overwhelmed.
                </p>

                <p>
                  In the long term quarantines are not sustainable because the
                  economy pays a huge price when people continue to socially
                  isolate.
                </p>

                <p>
                  Lifting quarantine-like restrictions is not possible without
                  risking a subsequent flareup of cases unless we adopt contact
                  tracing as a wide-spread measure.
                </p>

                <p>
                  Contact Tracing is currently a time-intensive and centralized
                  process which will overwhelm health systems when tracking
                  thousands of cases unless we adopt technology to decentralize
                  and load-balance.
                </p>
              </div>
              <div class="cta-link">
                <a href="">See Latest Data</a>
                <b-icon size="is-small" icon="arrow-right"></b-icon>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section about__figure about__text">
        <div class="container">
          <div class="about__figure-heading">
            <h2 class="title">Total Confirmed Cases of Covid 19</h2>
            <p class="subtitle">
              The starting point for each country is the day that country had
              reached 100 confirmed cases This allows us to compare the
              trajectory of confirmed cases between countries. The number of
              confirmed cases is lower than the number of total cases. The main
              reason for this is limited testing.
            </p>
          </div>

          <figure>
            <g-image src="~/assets/images/ConfirmedCases.png"></g-image>
            <!-- <ConfirmedCases /> -->
          </figure>
        </div>
      </section>

      <section class="section about__privacy about__text  alternateBackground">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h2 class="title">Our Philosophy on Privacy</h2>
              <div class="about__text-body">
                <p>
                  We take privacy seriously. We believe that private information
                  can be sufficiently protected and voluntarily shared to help
                  save lives during this crisis.
                </p>
              </div>
              <div class="about__list">
                <ul>
                  <li>
                    <strong>CoronaTrace is an opt-in app</strong> - We will use
                    clear disclaimers as people sign up to explain what
                    information is shared and how it will be used.
                  </li>
                  <li>
                    <strong>Location History</strong> - This traditionally
                    private information will be disassociated from an individual
                    before inclusion in the CoronaTrace database; this
                    information will not be made publicly visible; any displays
                    will be of aggregated information.
                  </li>
                  <li>
                    <strong>COVID-19 Test Confirmation</strong> - The test
                    result documentation will not be permanently stored by
                    CoronaTrace; only infectious status will be stored in the
                    database; any PII included on the test result documentation
                    will not be stored in the database
                  </li>
                  <li>
                    <strong
                      >All information and communication will be
                      encrypted.</strong
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section about__contribute about__text">
        <div class="container">
          <h2 class="title">Want to Contribute?</h2>
          <p class="subtitle">
            Visit our community site for more information on how you can join
            the effort.
          </p>
          <a
            href="https://corona-trace.github.io"
            class="button is-primary"
            target="__blank"
            >Learn More</a
          >
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import ConfirmedCases from '~/assets/images/ConfirmedCases.svg'

export default {
  components: {
    PageHeader,
    ConfirmedCases
  },
  metaInfo: {
    title: 'About',
    description:
      'Learn more about Coronatrace, our mission, and our philosophy on privacy.'
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.about {
  &__text {
    .container {
      max-width: 720px;
    }

    .title {
      margin-bottom: 2rem;
    }
  }

  &__figure-heading {
    .subtitle {
      padding-top: 2rem;
      padding-bottom: 2rem;
      margin: 0;
    }
  }

  &__list {
    padding-top: 1rem;

    li {
      line-height: 1.6;
      margin-bottom: 2rem;
    }
  }

  &__contribute {
    text-align: center;
  }
}
</style>