<template>
  <Layout>
    <div class="about">
      <PageHeader
        :title="$page.allContentfulAboutPage.edges[0].node.heading"
        largeMargins
      >
        {{ $page.allContentfulAboutPage.edges[0].node.subheading }}
      </PageHeader>

      <AboutContentBlock
        :title="edge.node.heading"
        v-for="edge in $static.allContentfulAboutContentBlock.edges"
        :key="edge.node.id"
        :alternateBackground="edge.node.darkBackground"
      >
        <div v-html="richTextToHTML(edge.node.content)"></div>
      </AboutContentBlock>

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

export default {
  components: {
    PageHeader,
    AboutContentBlock,
    AboutCallToAction
  },
  metaInfo: {
    title: 'About',
    description:
      'Learn more about CoronaTrace, our mission, and our philosophy on privacy.'
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
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.about {
  &__text {
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
}
</style>