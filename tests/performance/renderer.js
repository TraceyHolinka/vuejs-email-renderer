// Manual performance testing of of renderer.

const renderer = require('../../src/renderer')
const data = require('../../src/data/mockData.json')

function testMethod(f) {
  const start = Date.now()
  f()
  const stop = Date.now()
  console.log(`Run time: ${stop - start}ms`)
}

function testRenderer(){
  renderer.renderHtml(data)
}

testMethod(testRenderer)
