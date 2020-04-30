<template>
  <section
    class="section call-to-action primary-section"
    :class="{ alternateBackgroundLight: $attrs.block.AlternateBackground }"
  >
    <div class="container">
      <div class="call-to-action__heading">
        <div class="call-to-action__dot"></div>
        <h2
          class="title section-title"
          v-text="$attrs.block.Heading"
        ></h2>
        <p v-text="
            $attrs.block.Subheading
          "></p>
      </div>
      <div class="call-to-action__badges">
        <!-- <BadgeApple class="badge" /> <BadgeGoogle class="badge" /> -->

        <b-button
          v-if="$route.path.includes('beta')"
          type="is-primary"
          tag="a"
          href="https://coronatrace.us19.list-manage.com/subscribe?u=261f5cf9c913c5f184f41bde2&id=6c859007ff"
          target="_blank"
          rounded
        >Join the Beta</b-button>
        <JoinWaitlist v-else />
      </div>
    </div>
  </section>
</template>

<script>
import BadgeApple from '~/assets/images/BadgeApple.svg'
import BadgeGoogle from '~/assets/images/BadgeGoogle.svg'
import JoinWaitlist from '~/components/JoinWaitlist.vue'

export default {
  components: {
    BadgeApple,
    BadgeGoogle,
    JoinWaitlist
  },
  props: {
    alternateBackground: Boolean
  }
}
</script>

<static-query>
query HomeCTA {
  allContentfulCallToAction {
    edges {
      node {
        id,
        heading,
        subheading,
        alternateBackground
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
.call-to-action {
  text-align: center;

  &__heading {
    padding-bottom: 2rem;

    h2 {
      max-width: 32rem;
      margin: 1rem auto 1.5rem auto;
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

  &__dot {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: $blue-gradiant;
    margin: auto;
    @include box_shadow(2);
  }
}

.coming-soon {
  color: $blue;
}
</style>
