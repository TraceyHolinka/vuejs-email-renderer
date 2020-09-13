const Vue = require('vue')
const util = require('../util') 
require('../components')

Vue.component('Email', {

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
    <mj-wrapper>
      <Header />
      <Navigation v-bind="{topics}" />
      <component 
        v-for="(section, index) in sections"
        :key="index"
        :is="section.__typename"
        v-bind="{ section }"
      />
      <Tags v-bind="{tags}" />
    </mj-wrapper>
  `
})
