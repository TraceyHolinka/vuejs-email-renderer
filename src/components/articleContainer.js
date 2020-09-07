const Vue = require('vue')

Vue.component('ArticleContainer', {

  functional: true,

  props: {
    article: { type: Object, require: true }
  },

  render: (h, context) => [
    h('ArticleImage', {
      props: {
        image: context.props.article.image
      }
    }),
    h('Article', {
      props: {
        article: context.props.article
      }
    })
  ]

})