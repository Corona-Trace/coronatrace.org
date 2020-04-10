<template>
  <layout>
    <div class="support">
      <PageHeader
        :title="$static.contentfulSinglePageBasic.heading"
        class="support__heading"
      >
      </PageHeader>

      <section class="section single-page__basic support">
        <div class="container">
          <div
            class="support__content"
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
  contentfulSinglePageBasic(id: "4Sq1Ii9iQvElT98ICVbmP"){	
		title,
        heading,
		content
  }
}
</static-query>
