const Vue = require('vue')

Vue.component('Navigation', {
  props: {
    topics: { type: Array, default: true }
  },

  // Mixing varibles and text in attributes like href="#${topic.id}" throws errors.
  // The work around is to use a method or computed property.
  methods: {
    href(anchor) {
      return `#${anchor}`
    }
  },

  // Anchor links are not supported on many mobile email clients.
  // Microsoft Outline doesn't play nice with css display so spans are used rather then an undordered list.
  template: `
    <mj-section padding-bottom="24px">
      <mj-column>
        <mj-text font-size="16px" color="#0b0b0b">
          <span>Inside: </span><span v-for="(topic, index) in topics" :key="topic.id"><a :href="href(topic.id)">{{ topic.title }}</a><span v-if="index < topics.length - 1">, </span></span>
        </mj-text>
      </mj-column>
    </mj-section>
  `
})