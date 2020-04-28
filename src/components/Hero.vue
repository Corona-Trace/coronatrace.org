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
            <JoinWaitlist />
          </div>
        </div>
        <div class="column is-4-tablet is-5-desktop hero__right">

          <v-lazy-image
            :src="renderOptimizedImage($static.allContentfulHomeHero.edges[0].node.image.file.url)"
            :alt="$static.allContentfulHomeHero.edges[0].node.image.title"
            src-placeholder="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            class="hero__image"
          />
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import JoinWaitlist from '~/components/JoinWaitlist.vue'
import VLazyImage from 'v-lazy-image'
import { renderImage } from '~/helpers/contentful'

export default {
  components: {
    JoinWaitlist,
    VLazyImage
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
    renderOptimizedImage(src) {
      return renderImage({ src, fit: 'fill', w: 720, h: 720 })
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
        image {
          title,
          file {
            url
          }
        },
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
      align-items: center;
    }
  }

  &__image {
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
      @include set_type(2.75rem, 'sm');

      @include from($tablet) {
        @include set_type(3.5rem, 'sm');
      }

      @include from($desktop) {
        @include set_type(4rem, 'sm');
      }

      @include from($widescreen) {
      }

      @include from($fullhd) {
        @include set_type(4.5rem, 'sm');
      }
    }

    .subtitle {
      @include set_type(1.15rem);
      padding: 2rem 0 3rem;
      margin: 0;

      @include from($tablet) {
        @include set_type(1.5rem);
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
