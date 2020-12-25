const articleImage = {

  props: {
    image: { type: Object, require: true }
  },

  // Add image width for Microsoft Office because it doesn't respect CSS width.
  template: `
    <mj-image v-if="!!image && image.display && image.url" width="580px" padding="0" :src="image.url" :alt="image.alt" />
  `
}

exports.articleImage = articleImage