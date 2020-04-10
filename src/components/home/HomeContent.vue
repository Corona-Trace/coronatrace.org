<template>
  <div>
    <ContentWithImage
      v-for="edge in $static.allContentfulHomeContentBlock.edges"
      :key="edge.node.id"
      :alternateBackground="!edge.node.alignImageRight"
      :imagePushed="edge.node.alignImageRight"
    >
      <template v-slot:heading>{{ edge.node.heading }}</template>

      <template v-slot:body-text>
        <div v-html="richtextToHTML(edge.node.text)"></div>
      </template>
      <template v-slot:link>
        <a
          :href="edge.node.linkDestination"
          v-text="edge.node.linkText"
          target="_blank"
        >See Latest Data</a>
      </template>
      <template v-slot:image>
        <g-image
          :src="renderOptimizedImage(edge.node.image.file.url)"
          :alt="edge.node.image.title"
          fit="contain"
          height="600"
        ></g-image>
      </template>
    </ContentWithImage>
  </div>
</template>

<script>
import ContentWithImage from '~/components/ContentWithImage.vue'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { renderImage } from '~/helpers/contentful'

export default {
  components: {
    ContentWithImage
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content)
    },
    renderOptimizedImage(src) {
      return renderImage({ src, fit: 'fill', w: 640, h: 640 })
    }
  }
}
</script>

<static-query>
query HomeContent {
  allContentfulHomeContentBlock(sortBy: "order", order: ASC) {
    edges {
      node {
        id,
        title,
        locale,
        image {
          title,
          file {
            url,
            fileName
          }
        },
        heading,
        text,
        linkText,
        linkDestination,
        alignImageRight,
        order
      }
    }
  }
}
</static-query>
