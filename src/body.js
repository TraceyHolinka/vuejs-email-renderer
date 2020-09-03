const Vue = require('vue')
const css = require('./assets/css')

Vue.component('Body', {
  template: `
  <mjml>
    <mj-head>
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
})