<template>
  <div>
    <ContentWithImage
      v-for="(edge, index) in $static.allContentfulHomeContentBlock.edges"
      :key="edge.node.id"
      :index="index"
      :alternateBackground="edge.node.alternateBackground"
      :imagePushed="edge.node.alignImageRight"
      :imageBoxShadow="edge.node.imageBoxShadow"
    >
      <template v-slot:heading-tag>{{ edge.node.headingTag }}</template>
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
        <v-lazy-image
          :src="renderOptimizedImage(edge.node.image.file.url)"
          :alt="edge.node.image.title"
          src-placeholder="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        />
      </template>
    </ContentWithImage>
  </div>
</template>

<script>
import VLazyImage from 'v-lazy-image'
import ContentWithImage from '~/components/ContentWithImage.vue'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { renderImage } from '~/helpers/contentful'

export default {
  components: {
    ContentWithImage,
    VLazyImage
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
        headingTag,
        headingTagColor,
        heading,
        text,
        linkText,
        linkDestination,
        alignImageRight,
        imageBoxShadow,
        order
      }
    }
  }
}
</static-query>
