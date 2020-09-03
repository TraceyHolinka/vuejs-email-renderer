const Vue = require('vue')

Vue.component('Article', {

  props: {
    article: { type: Object, require: true }
  },

  template: `
    <mj-text padding="16px 0 0" color="#0b0b0b">
      <h2 class="headline">{{ article.headline }}</h2>
      <p class="body" v-html="article.summary" />
    </mj-text>
  `
})
