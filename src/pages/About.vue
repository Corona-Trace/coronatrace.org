<template>
  <Layout>
    <div class="about">

      <div class="container">
        <div
          class="columns is-variable is-8-desktop"
          :class="{ rowReverse: imagePushed }"
        >
          <div class="column content-with-image__content is-6-tablet is-6-desktop">
            <h2 class="title section-title">
              {{ $page.allContentfulAboutPage.edges[0].node.heading }}
            </h2>
            <div class="content-with-image__body-text">
              {{$page.allContentfulAboutPage.edges[0].node.subheading}}
            </div>
            <div class="content-with-image__link cta-link">
              <slot name="link"> </slot>
              <b-icon
                size="is-small"
                icon="arrow-right"
              ></b-icon>
            </div>
          </div>
          <div class="column content-with-image__image-container is-6-tablet is-6-desktop">
            <div class="content-with-image__image image is-square">
              <slot name="image"></slot>
            </div>
          </div>
        </div>
      </div>

      <AboutCallToAction />
    </div>
  </Layout>
</template>

<script>
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import PageHeader from '~/components/PageHeader.vue'
import AboutContentBlock from '~/components/about/AboutContentBlock.vue'
import AboutCallToAction from '~/components/about/AboutCallToAction.vue'
import { renderImage } from '~/helpers/contentful'
import VLazyImage from 'v-lazy-image'

export default {
  components: {
    PageHeader,
    AboutContentBlock,
    AboutCallToAction,
    VLazyImage
  },
  metaInfo: {
    title: 'About',
    description:
      'Learn more about TraceToZero, our mission, and our philosophy on privacy.'
  },
  methods: {
    renderOptimizedImage(src) {
      return renderImage({ src, fit: 'fill', w: 720, h: 440 })
    },
    richTextToHTML(content) {
      return documentToHtmlString(content, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: node => {
            const imageSrc = 'https:' + node.data.target.fields.file.url
            const optimzedImage = this.renderOptimizedImage(imageSrc)
            return `<img src="${optimzedImage}" alt="${node.data.target.fields.title}" />`
          }
        }
      })
    }
  }
}
</script>

<page-query>
query AboutPage {
  allContentfulAboutPage {
    edges {
      node {
        id,
        heading,
        subheading
      }
    }
  }
}
</page-query>

<static-query>
query AboutContentBlock {
  allContentfulAboutContentBlock(sortBy: "order", order: ASC) {
    edges {
      node {
        id,
        heading,
        title,
        content,
        link,
        linkDestination,
        darkBackground
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
.section {
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
}

.columns {
  align-items: center;
  display: flex;
  flex-direction: column-reverse;

  @include from($tablet) {
    padding-bottom: 0;
    flex-direction: row;
    align-items: flex-start;
  }

  @include from($desktop) {
    align-items: center;
  }
}

.rowReverse {
  @include from($tablet) {
    flex-direction: row-reverse;
  }
}

.content-with-image {
  .title {
    margin-bottom: 0;
  }

  &__body-text {
    padding-top: 4rem;
    padding-bottom: 1rem;

    p {
      margin-bottom: 1.5rem;
      @include set_type(1.2rem);
    }
  }

  &__link {
    a {
      font-size: 1.25rem;
      font-weight: bold;
      text-decoration: underline;
    }

    .icon {
      margin-left: 0.5rem;
      color: $blue;
    }
  }

  &__image-container {
    width: 100%;
    padding-bottom: 6rem;
    position: relative;

    @include from($desktop) {
      padding-bottom: 0;
    }
  }

  &__image {
    border-radius: 6px;
    overflow: hidden;

    img {
      object-fit: cover;
      object-position: center;
      z-index: 20;
    }
  }
}
</style>