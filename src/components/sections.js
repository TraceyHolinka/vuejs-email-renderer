const { featuredSection } = require('../components/featuredSection.js')
const { feedSection } = require('../components/feedSection.js')
const { imageSection } = require('../components/imageSection.js')

const sections = {

  components: {
    FeaturedSection: featuredSection,
    FeedSection: feedSection,
    ImageSection: imageSection,
  },

  props: {
    section: { type: Object, require: true }
  },

  // Dynamic components in a for loop
  // <component v-for="(section) in sections" :key="section.id" :is="section.__typename" v-bind="{ section } />"
  // throws this error:
  // [Vue warn]: resolveComponent can only be used in render() or setup().
  // ¯\_(ツ)_/¯

  template: `
    <component :is="section.__typename" v-bind="{ section }" />
  `
}

exports.sections = sections
