const Vue = require('vue')

Vue.component('ImageSection', {

  props: {
    section: { type: Object, require: true }
  },

  template: `
    <mj-section padding="10px 0">
      <mj-column>
        <mj-image padding="0" width="600px" :src="section.imageUrl" />
      </mj-column>
    </mj-section>
  `
})