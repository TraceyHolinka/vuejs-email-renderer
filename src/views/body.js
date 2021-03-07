const util = require('../util')

const { header } = require('../components/header.js')
const { navigation } = require('../components/navigation.js')
const { sections } = require('../components/sections.js')
const { tags } = require('../components/tags.js')
const { footer } = require('../components/footer.js')

const body = {

  components: {
    Header: header,
    Navigation: navigation,
    Sections: sections,
    Tags: tags,
    Footer: footer
  },

  props: {
    sections: { type: Array, required: true }
  },

  computed: {
    articleTags(){
      return this.sections
      .filter(section => section.__typename === "FeedSection")
      .flatMap(section => section.items)
      .flatMap(item => item.tags)
    },
    tags(){
      const tags = util.dedup(this.articleTags)
      return util.sortAscending(tags)
    },
    topics(){
      return this.sections.filter(section => section.__typename === "FeedSection")
      .map( item => ({
        id: item.id,
        title: item.title
      }))
    }
  },

  template: `
    <mj-wrapper full-width="full-width" background-color="#641630" />
    <mj-wrapper>
      <Header />
      <Navigation v-bind="{ topics }" />
      <Sections
        v-for="(section) in sections"
        :key="section.id"
        v-bind="{ section }"
      />
      <Tags v-bind="{ tags }" />
    </mj-wrapper>
    <Footer />
  `
}

exports.body = body
