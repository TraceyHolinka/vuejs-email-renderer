const Vue = require('vue')
require('../components')

Vue.component('Email', {

  props: {
    articles: { type: Array, required: true }
  },

  template: `
    <mj-wrapper>
      <Header />
      <mj-section>
        <mj-column>
          <Article
            v-for="(article, index) in articles"
            :key="index"
            v-bind="{article}"
            />
        </mj-column>
      </mj-section>
    </mj-wrapper>
  `
})
