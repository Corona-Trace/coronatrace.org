<template>
  <layout>
    <div class="public-health">
      <PageHeader
        :title="$static.contentfulSinglePageBasic.heading"
        class="public-health__heading"
      >
      </PageHeader>

      <section class="section single-page__basic public-health">
        <div class="container">
          <div
            class="public-health__content"
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

query PublicHealth {
  contentfulSinglePageBasic(id: "2Yg71I9t7ikhRD51McUtq3"){	
		title,
        heading,
		content
  }
}
</static-query>
