const renderer = require('../src/render')
const data = require('../src/data/mockData.json')

renderer.renderHtml(data, { validationLevel: 'soft', beautify: true })
  .then(data => console.log(data))
  .catch(error => console.log(error.message))
