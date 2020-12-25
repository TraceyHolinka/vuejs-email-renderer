// Import CSS
const css = require('./assets/css')

// Unlike the the first verstion of Vuejs Email Renderer, here we export the component as an object and
// then declare it in the component that is use it.

const body = {

// The default width for <mj-body> is 600px.
  template: `
    <mjml>
      <mj-head>
        <mj-title>Faker News: The Real Fake News</mj-title>
        <mj-preview>Vue.js is just plain awesome, so let's use it to build HTML email and bring some joy into HTML email development.</mj-preview>
        <mj-attributes>
          <mj-all font-family="Arial, sans-serif" />
          <mj-section padding="10px" background-color="#fff" />
          <mj-column padding="0" />
          <mj-text padding="0" />
        </mj-attributes>
        <mj-style inline="inline">
          ${css.inlineCSS}
        </mj-style>
        <mj-style>
          ${css.headCSS}
        </mj-style> 
      </mj-head>
      <mj-body>
        <slot />
      </mj-body>
    </mjml>
  `
}

exports.body = body;