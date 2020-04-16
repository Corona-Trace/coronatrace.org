<template>
  <section class="section call-to-action primary-section">
    <div class="container">
      <div class="call-to-action__heading">
        <CoronaBadge class="corona-badge" />
        <h2
          class="title section-title"
          v-text="$static.allContentfulHomeCallToAction.edges[0].node.heading"
        ></h2>
        <p v-text="
            $static.allContentfulHomeCallToAction.edges[0].node.subheading
          "></p>
      </div>
      <div class="call-to-action__badges">
        <!-- <BadgeApple class="badge" /> <BadgeGoogle class="badge" /> -->

        <b-button
          v-if="$route.path.includes('beta')"
          type="is-primary"
          tag="a"
          href="https://coronatrace.us19.list-manage.com/subscribe?u=261f5cf9c913c5f184f41bde2&id=6c859007ff"
          target="blank"
        >Join the Beta</b-button>
        <b-button
          v-else
          type="is-primary"
          disabled
        >Coming Soon</b-button>
      </div>
    </div>
  </section>
</template>

<script>
import CoronaBadge from '~/assets/images/CoronaBadge.svg'
import BadgeApple from '~/assets/images/BadgeApple.svg'
import BadgeGoogle from '~/assets/images/BadgeGoogle.svg'

export default {
  components: {
    CoronaBadge,
    BadgeApple,
    BadgeGoogle
  }
}
</script>

<static-query>
query HomeCTA {
  allContentfulHomeCallToAction {
    edges {
      node {
        id,
        heading,
        subheading
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
.section {
  padding-top: 9rem;
  padding-bottom: 9rem;
}

.call-to-action {
  text-align: center;

  &__heading {
    padding-bottom: 2rem;

    h2 {
      max-width: 32rem;
      margin: 0 auto 1.5rem auto;
    }

    p {
      max-width: 550px;
      margin: auto;
    }
  }

  &__badges {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include from($desktop) {
      flex-direction: row;
      justify-content: center;
    }

    .badge {
      margin: 1rem 0;

      @include from($desktop) {
        margin: 0 1rem;
      }
    }
  }
}

.corona-badge {
  width: 64px;
}

.coming-soon {
  color: $blue;
}
</style>
