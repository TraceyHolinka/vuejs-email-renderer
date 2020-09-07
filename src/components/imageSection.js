const Vue = require('vue')

Vue.component('ImageSection', {

  props: {
    section: { type: Object, require: true }
  },

  // Add image width for Microsoft Office because it doesn't respect CSS width.
  template: `
    <mj-section padding="10px 0">
      <mj-column>
        <mj-image width="600px" padding="0" border="solid 5px #000" border-radius="5px" :src="section.url" :alt="section.alt" />
      </mj-column>
    </mj-section>
  `
})