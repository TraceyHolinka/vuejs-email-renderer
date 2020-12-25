const { footer } = require('./footer')

const feedSection = {

  props: {
    section: { type: Object, require: true }
  },

  template: `
    <mj-section>
      <mj-column>
        <mj-text>
          <a :name="section.id" /><h1 class="section-title">{{ section.title }}</h1>
        </mj-text>
        <ArticleContainer
          v-for="(article, index) in section.items"
          :key="index"
          v-bind="{article}"
        />
      </mj-column>
    </mj-section>
  `
}

exports.feedSection = feedSection
