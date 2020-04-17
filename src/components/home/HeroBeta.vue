<template>
  <div>
    <section class="section hero-beta">
      <div class="container">
        <div class="columns">
          <div class="column is-7 hero__left">
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
                href="https://coronatrace.us19.list-manage.com/subscribe?u=261f5cf9c913c5f184f41bde2&id=6c859007ff"
                tag="a"
                target="_blank"
                type="is-primary"
              >Join the Beta</b-button>
            </div>
            <b-notification
              class="is-hidden-desktop"
              type="is-info"
              style="margin: 3rem 0 0;"
              has-icon
              aria-close-label="Close notification"
            >
              An important note about security: No information about who you are
              will be collected from you or your phone. During this beta, we
              have engaged the security community to find vulnerabilities in our
              security system so we can fix them. While security audits are
              underway, we haven’t completed the rigorous security audits that
              we plan to complete before going live on the App Stores.
            </b-notification>
          </div>
          <div class="column is-5 hero__right">
            <g-image
              width="403"
              height="403"
              src="~/assets/images/blue-dot.svg"
            ></g-image>
          </div>
        </div>
        <b-notification
          class="is-hidden-touch"
          type="is-info"
          has-icon
          aria-close-label="Close notification"
        >
          An important note about security: No information about who you are
          will be collected from you or your phone. During this beta, we have
          engaged the security community to find vulnerabilities in our security
          system so we can fix them. While security audits are underway, we
          haven’t completed the rigorous security audits that we plan to
          complete before going live on the App Stores.
        </b-notification>
      </div>
    </section>

    <SecurityAnnouncement />
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  components: {},
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
  padding-top: 6rem;
  padding-bottom: 9rem;

  @include from($tablet) {
    padding-top: 9rem;
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 4rem;

    @include from($desktop) {
      padding-bottom: 0;
    }
  }

  &__text {
    .title {
      font-size: 2.75rem;

      @include from($desktop) {
        font-size: 5.25rem;
      }
    }

    .subtitle {
      font-size: 1.25rem;
      padding: 2rem 0 3rem;
      margin: 0;
      line-height: 1.6;

      @include from($desktop) {
        font-size: 2rem;
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

      @include from($desktop) {
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
    text-align: center;
    overflow: visible;

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
