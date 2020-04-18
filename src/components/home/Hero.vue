<template>
  <section class="section hero">
    <div class="container">
      <div class="columns hero__columns">
        <div class="column is-8-tablet is-7-desktop hero__left">
          <div class="hero__text">
            <div v-html="
                richtextToHTML(
                  $static.allContentfulHomeHero.edges[0].node.headline
                )
              "></div>
            <p
              class="subtitle"
              v-text="$static.allContentfulHomeHero.edges[0].node.subheading"
            ></p>
          </div>

          <div class="hero__cta">
            <b-button
              @click="showModal"
              type="is-primary"
              size="is-large"
              rounded
            >Join Waitlist</b-button>
          </div>
        </div>
        <div class="column is-4-tablet is-5-fullhd hero__right">

          <g-image
            width="403"
            height="403"
            src="~/assets/images/blue-dot.svg"
            class="hero__dot"
          ></g-image>
        </div>
      </div>
    </div>

    <b-modal
      :active.sync="emailSignupActive"
      trap-focus
      aria-role="dialog"
      aria-modal
      scroll="keep"
      class="email-signup-modal"
    >
      <email-signup></email-signup>
    </b-modal>
  </section>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import EmailSignup from '~/components/home/email-signup/EmailSignup.vue'

export default {
  components: {
    EmailSignup
  },
  data() {
    return {
      emailSignupActive: false
    }
  },
  methods: {
    richtextToHTML(content) {
      const newContent = content.content

      var text = newContent.map(function(content) {
        return content.content[0].value
      })

      var notEmptyText = text.filter(function(text) {
        return text.length > 0
      })

      notEmptyText = notEmptyText.join('<br />')

      var final = '<h1 class="title">' + notEmptyText + '</h1>'
      return final
    },
    showModal() {
      this.emailSignupActive = true
    }
  }
}
</script>

<static-query>
query HomeHero {
  allContentfulHomeHero(sortBy: "id", order: ASC, limit: 1) {
    edges {
      node {
        id,
        title,
        date,
        hero,
        heroCta,
        subheading,
        headline
      }
    }
  }
}
</static-query>

<style lang="scss">
.hero {
  padding-top: 4rem;
  padding-bottom: 3rem;

  @include from($tablet) {
    padding-top: 6rem;
    padding-bottom: 3rem;
  }

  @include from($desktop) {
    padding-top: 9rem;
    padding-bottom: 9rem;
  }

  &__columns {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;

    @include from($tablet) {
      flex-direction: row;
    }
  }

  &__dot {
    border-radius: 50%;
    @include box_shadow(3);

    @include until($tablet) {
      @include box_shadow(1);
      height: 13vh;
      width: auto;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 4rem;

    @include until($desktop) {
      flex: 1 auto;
    }

    @include from($desktop) {
      padding-bottom: 0;
    }
  }

  &__text {
    .title {
      font-size: 2.75rem;

      @include from($tablet) {
        font-size: 3.5rem;
      }

      @include from($desktop) {
        font-size: 4rem;
      }

      @include from($widescreen) {
      }

      @include from($fullhd) {
        font-size: 4.5rem;
      }
    }

    .subtitle {
      font-size: 1.15rem;
      padding: 2rem 0 3rem;
      margin: 0;
      line-height: 1.6;

      @include from($tablet) {
        font-size: 1.5rem;
      }

      @include from($desktop) {
        padding-right: 6rem;
      }

      @include from($fullhd) {
        padding-right: 13rem;
      }
    }
  }

  &__cta {
    display: flex;
    flex-direction: column;

    @include from($desktop) {
      flex-direction: row;
    }

    .button {
      display: flex;
      justify-content: center;
      width: 100%;
      font-size: 1.25rem;
      margin: 0.5rem 0;

      @include from($tablet) {
        width: auto;
      }

      &.is-primary {
        @include box_shadow(2);

        @include from($desktop) {
          margin-right: 1rem;
        }
      }
    }
  }

  &__right {
    position: relative;
    overflow: visible !important;

    @include until($desktop) {
      flex: 1 auto;
    }

    @include from($desktop) {
      width: auto;
      height: auto;
      overflow: hidden;
    }
  }
  .notification {
    @include box_shadow(3);
  }
}

.email-signup-modal {
  .modal-content {
    overflow: visible;
  }
}
</style>
