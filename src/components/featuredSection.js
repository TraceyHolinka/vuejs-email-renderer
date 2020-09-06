const Vue = require('vue')

Vue.component('FeaturedSection', {

  props: {
    section: { type: Object, require: true }
  },

  template: `
    <mj-section padding="10px 20px" background-color="#641630">
      <mj-column>
        <mj-text color="#f5f8f7">
          <h1 class="section-title">{{ section.headline }}</h1>
        </mj-text>
        <mj-image v-if="section.imageUrl" width="580px" padding="16px 0 0" border-radius="15px" :src="section.imageUrl" />
        <mj-text color="#f5f8f7">
          <div class="body" v-html="section.body" />
        </mj-text>
      </mj-column>
    </mj-section>
  `
})