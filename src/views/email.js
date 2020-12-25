const util = require('../util')

const { header } = require('../components/header.js')
const { navigation } = require('../components/navigation.js')
const { featuredSection } = require('../components/featuredSection.js')
const { imageSection } = require('../components/imageSection.js')
const { tags } = require('../components/tags.js')


const email = {

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

  components: {
    Header: header,
    Navigation: navigation,
    FeaturedSection: featuredSection,
    ImageSection: imageSection,
    Tags: tags
  },

  // https://v3.vuejs.org/api/directives.html#v-pre
  template: `
    <mj-wrapper>
      <Header />
      <Navigation v-bind="{topics}" />
      <!-- <component 
        v-for="(section, index) in sections"
        :key="index"
        :is="section.__typename"
        v-bind="{ section }"
      /> -->
      <Tags v-bind="{tags}" />
    </mj-wrapper>
  `
}

exports.email = email
