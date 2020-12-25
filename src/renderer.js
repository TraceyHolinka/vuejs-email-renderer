const mjml2html = require('mjml')
const Vue = require('vue')
const { createSSRApp } = require('vue')
const { renderToString } = require('@vue/server-renderer')
// require('./views/email')
// require('./components')
// require('./body.js')
// require('./components/footer.js')

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
  const app = createSSRApp({
    data() {
      return {
       sections: payload.section
      }
    },

    template: `
      <mjml>
        <mj-body>
          <mj-wrapper full-width="full-width" background-color="#641630" />
          <!-- <Email v-bind="{sections}" /> -->
          <!-- <Footer /> -->
        </mj-body>
      </mjml>
    `
  })

  // Tell Vue to recognize mjml components. See: https://v3.vuejs.org/api/application-config.html#iscustomelement
  app.config.isCustomElement = tag => tag === 'mjml' || tag.startsWith('mj-')

  // Render the Vue instance to a varible
  let html = await renderToString(app)

  // Remove <!--[--> and <!--]--> add by the server renderer.
  html = html.replace('<!--[-->', '').replace('<!--]-->', '')

  return html

  // Let mjml do its magic
  return mjml2html(html, options).html
}
