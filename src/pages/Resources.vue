<template>
  <layout>
    <div class="resources">
      <PageHeader
        :title="$static.contentfulSinglePageBasic.heading"
        class="resources__heading"
      >
      </PageHeader>

      <section class="section single-page__basic resources">
        <div class="container">
          <div
            class="resources__content"
            v-html="richTextToHTML($static.contentfulSinglePageBasic.content)"
          ></div>
        </div>
      </section>
    </div>
  </layout>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { renderImage } from '~/helpers/contentful'
import VLazyImage from 'v-lazy-image'

export default {
  components: {
    PageHeader,
    VLazyImage
  },
  methods: {
    richTextToHTML(content) {
      return documentToHtmlString(content, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: node => {
            return `<img src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}" />`
          }
        }
      })
    }
  }
}
</script>

<static-query>

query Resources {
  contentfulSinglePageBasic(id: "3piM1jRGgfNoNI4YVLsCgt"){	
		title,
        heading,
		content
  }
}
</static-query>
