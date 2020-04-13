<template>
<Layout>
  <header class="hero hero--dark">
    <div class="hero-body">
      <div class="container logo--top">
        <LogoInverse />
      </div>
    </div>
  </header>

  <section class="hero hero--dark">
    <div class="hero-body">

      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="subtitle is-light">
              A LOW TECH GUIDE
            </h2>
            <h1 class="title is-white">
              DIY Contact Tracing
            </h1>
          </div>
          <div class="column">
            <a href="#track" class="button--stack">
              Find your iPhone and Google Maps location history
            </a>
            <a href="#list" class="button--stack">
              Contact the people and businesses you visited while you were infectious
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="hero" id="track">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="subtitle">
              STEP ONE
            </h2>
            <h1 class="title is-light">
              Make a list of people and places
            </h1>
            <p>
              First we are going to make a list of every <strong>place</strong> we visited and every <strong>person</strong> we had close contact with.
            </p>
            <p>
              When we contact places we visited we will need to let them know <strong>when</strong> we visited.
            </p>
            <p>
              Two weeks is a long time to remember exactly when you visited the grocery store.
            </p>
            <p>
              This is perhaps the first time you'll feel deeply relieved that your phone tracks most of the places you go.
            </p>
          </div>
          <div class="column">
            <a href="https://google.com/maps/timeline" class="button--double">
              <div class="stack">
                <span class="is-uppercase">I USE GOOGLE MAPS</span>
                <span class="is-small">Open my Timeline Map</span>
              </div>
              <b-icon size="is-small" icon="chevron-right"></b-icon>
            </a>
            <a href="#" class="button--double">
              <div class="stack">
                <span class="is-uppercase">I use an Iphone</span>
                <span class="is-small">Find your Significant Places timeline</span>
              </div>
              <b-icon size="is-small" icon="chevron-right"></b-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero hero--dark">
    <div class="hero-body">
      <div class="container">
        <div class="is-narrow-desktop">
          <h2 class="subtitle is-light">
            YOUR LIST CONTAINS
          </h2>
          <a href="#track" class="button--stack space-between">
            <span class="is-uppercase">PEOPLE</span>
            <span class="is-small">Everyone with close contact</span>
          </a>

          <a href="#track" class="button--stack space-between">
            <span class="is-uppercase">PLACES</span>
            <span class="is-small">The date and time you visited</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="section faqs" id="list">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="subtitle">
            STEP TWO
          </h2>
          <h1 class="title">
            Contact them directly or anonymously
          </h1>
          <p>
            We recommend <strong>direct, personal contact</strong> with everyone on your list.
          </p>
          <p>
            To help you with this task we've prepared a few starter scripts to make this email, text, or conversation easier.
          </p>
        </div>
        <div class="column">
          <div class="scripts__container">
            <CallScripts :items="myItems" borderColor="#fff" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero hero--dark">
    <div class="hero-body">
      <div class="container">
        <h2 class="subtitle">
          ANONYMOUS OPTIONS
        </h2>
        <p>
          While we recommend personal contact we recognize situations where that may not be possible. Anonymous notification is better than no information.
        </p>
        <a href="https://33mail.com/" class="button--stack space-between">
          <span class="is-uppercase">33MAIL</span>
          <span class="is-small">Anonymous mail forwarding</span>
        </a>

        <a href="https://www.burnerapp.com/" class="button--stack space-between">
          <span class="is-uppercase">BURNER</span>
          <span class="is-small">Anonymous text messages</span>
        </a>
      </div>
    </div>
  </section>

  <section class="hero hero--dots">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Your are doing the right thing
        </h1>
        <p>
          Every prevented infection saves lives
        </p>
      </div>
    </div>
  </section>
  <footer class="hero hero--dark">
    <div class="hero-body">
      <div class="container logo--top">
        <LogoInverse />
      </div>
    </div>
  </footer>

</Layout>
</template>

<script>
import CallScripts from '~/components/call-scripts/CallScripts.vue'
import Layout from '~/layouts/Blank.vue'
import LogoInverse from '~/assets/images/LogoInverse.svg'

export default {
  components: {
    Layout,
    LogoInverse,
    CallScripts
  },
  data() {
    return {
      myItems: [{
          title: 'Close freind or relative',
          value: 'I visited your store on Monday April 4 at 5:35 PM.  Today I tested positive for COVID-19. I touched the freezer door to buy ice cream, the dairy door to buy yogurt and I checked out at the stall furthest from the fresh fruits and vegetables. Please get in touch if you have any questions.  Here are some resources to help you sanitize your store.  https://bit.ly/covid-clean',
        },
        {
          title: 'Colleague or business associate',
          value: 'I visited your store on Monday April 4 at 5:35 PM.  Today I tested positive for COVID-19. I touched the freezer door to buy ice cream, the dairy door to buy yogurt and I checked out at the stall furthest from the fresh fruits and vegetables. Please get in touch if you have any questions.  Here are some resources to help you sanitize your store.  https://bit.ly/covid-clean'
        },
        {
          title: 'Your employer',
          value: 'I visited your store on Monday April 4 at 5:35 PM.'
        },
        {
          title: 'Your landlord or building manager',
          value: 'I visited your store on Monday April 4 at 5:35 PM.'
        },
        {
          title: 'Grocery Store',
          value: 'I visited your store on Monday April 4 at 5:35 PM.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.hero--dark {
  background-color: #191C50;
  color: #fff;

  .subtitle {
    color: $grey-light;
  }

  .title {
    color: $white;
  }
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  @include media-query($small) {
    font-size: 1.2rem;
  }
}

a,
body,
p {
  font-size: 0.875rem;
  @include media-query($small) {
    font-size: 0.8rem;
  }
}

.is-uppercase,
.subtitle {
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  @include media-query($small) {
    font-weight: bold;
  }
}

.is-small {
  font-size: 0.75rem;
  color: $grey-light;
}

.title {
  font-weight: 500;
}

.button--double {
  border: 1px solid #191C50;
  padding: 15px;
  color: #191C50;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;

  .stack {
    display: grid;
  }

  .icon {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    height: 100%;
  }
}

.button--stack {
  padding: 14px;
  color: #fff;
  background-color: rgba(255,255,255, 0.05);
  margin-bottom: 3px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  &:hover {
    color: #fff;
    background-color: rgba(255,255,255, 0.1);
  }
}

.button--stack:first-of-type {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.button--stack:last-of-type {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>
