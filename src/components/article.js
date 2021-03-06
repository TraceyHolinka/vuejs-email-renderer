const article = {

  props: {
    article: { type: Object, required: true }
  },

  template: `
    <mj-image
      v-if="article.image?.display && !!article.image?.url"
      width="580px"
      padding="0"
      :src="article.image.url"
      :alt="article.image.alt"
    />
    <mj-text padding="16px 0 0" color="#0b0b0b">
      <h2 class="headline"><a :href="article.permalink">{{ article.headline }}</a></h2>
      <p class="summary">{{ article.summary }} <a :href="article.permalink">Read more&hellip;</a></p>
    </mj-text>
  `
}

exports.article = article
