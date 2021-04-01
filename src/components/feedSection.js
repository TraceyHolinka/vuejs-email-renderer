const { article } = require('./article.js')

const feedSection = {

  components: {
    Article: article
  },

  props: {
    section: { type: Object, require: true }
  },

  template: `
    <mj-section>
      <mj-column>
        <mj-text>
          <a :name="section.id" /><h1 class="section-title">{{ section.title }}</h1>
        </mj-text>
        <Article
          v-for="(article) in section.items"
          :key="article.id"
          v-bind="{ article }"
        />
      </mj-column>
    </mj-section>
  `
}

exports.feedSection = feedSection
