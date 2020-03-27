<template>
  <section class="section call-to-action alternateBackground">
    <div class="container">
      <div class="call-to-action__heading">
        <CoronaBadge class="corona-badge" />
        <h2 class="title is-3">Get Protected with <br />Coronatrace</h2>
        <p>
          Download the app and get alerted when you cross paths with someone
          infected with Coronavirus.
        </p>
      </div>
      <div class="call-to-action__badges">
        <!-- <BadgeApple class="badge" /> <BadgeGoogle class="badge" /> -->
        <b-button type="is-primary" disabled>Coming Soon</b-button>
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

<style lang="scss" scoped>
.section {
  padding-top: 9rem;
  padding-bottom: 9rem;
}

.call-to-action {
  text-align: center;

  &__heading {
    padding-bottom: 4rem;

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
