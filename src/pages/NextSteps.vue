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
</script>

<page-query></page-query>

<style lang="scss" scoped>

</style>