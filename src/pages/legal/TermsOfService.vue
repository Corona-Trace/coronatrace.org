<template>
  <layout>
    <div class="terms-of-service">
      <PageHeader
        :title="$static.contentfulSinglePageBasic.heading"
        class="terms-of-service__heading"
      >
      </PageHeader>

      <section class="section single-page__basic terms-of-service">
        <div class="container">
          <div
            class="terms-of-service__content"
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

export default {
  components: {
    PageHeader
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

query PrivacyPolicy {
  contentfulSinglePageBasic(id: "3nb5uEjXxyT6Ya17JKJgni"){	
		title,
        heading,
		content
  }
}
</static-query>

<style>
</style>