const Vue = require('vue')

Vue.component('Tags', {
  props: {
    tags: { type: Array, default: true }
  },

  // Microsoft Outline doesn't play nice with css display so spans are used rather then an undorder list.
  template: `
    <mj-section>
      <mj-column>
        <mj-text font-size="15px" line-height="23px" color="#0b0b0b">
          <span>Learn more about: </span>
          <span v-for="(tag, index) in tags" :key="index" class="tag"><a :href="tag.id">{{ tag.name }}</a><span v-if="index < tags.length - 1">, </span></span>
        </mj-text>
      </mj-column>
    </mj-section>
  `
})
