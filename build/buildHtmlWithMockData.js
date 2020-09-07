const renderer = require('../src/render')
const data = require('../src/data/mockData.json')

renderer.renderHtml(data, { validationLevel: 'strict', beautify: true })
  .then(data => console.log(data))
  .catch(error => console.log(error.message))
