const mjml2html = require('mjml')
const Vue = require('vue')
require('./views/email')
require('./components')
require('./body.js')

exports.renderHtml = async function renderHtml(payload, options) {

  // Set default options for mjml2html (https://github.com/mjmlio/mjml#inside-nodejs).
  options =  options || {
    minify: true, 
    minifyOptions: {
      collapseWhitespace: true, 
      minifyCSS: true, 
      removeEmptyAttributes: true
    }
  }

  // Create an instance of Vue.
  const app = new Vue({
    data: {
      articles: payload.articles
    },

    template: `
      <Body>
        <mj-wrapper full-width="full-width" background-color="#641630" />
        <Email v-bind="{articles}" />
        <Footer />
      </Body>
    `
    })

    // Create Vue SSR renderer.
    const renderer = require('vue-server-renderer').createRenderer({
      template: `
        <!--vue-ssr-outlet-->
      `
    })

    // Render the Vue instance to html
    let html = await renderer.renderToString(app)

    // Remove the data-server-rendered special attribute.
    html = html.replace(`data-server-rendered="true"`, '')

    // Let mjml do its magic
    return mjml2html(html, options).html
}
