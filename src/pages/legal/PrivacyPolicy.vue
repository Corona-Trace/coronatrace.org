<template>
  <layout>
    <div class="privacy-policy">
      <PageHeader
        :title="$static.contentfulSinglePageBasic.heading"
        class="privacy-policy__heading"
        alternateBackground
      >
      </PageHeader>

      <section class="section single-page__basic privacy-policy">
        <div class="container">
          <div
            class="privacy-policy__content"
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
  contentfulSinglePageBasic(id: "36mjC4nP4JV7D5wWwMMety"){	
		title,
        heading,
		content
  }
}
</static-query>

<style>
</style>