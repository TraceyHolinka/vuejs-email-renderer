// Manual performance testing of best method for getting topics from all articles.

let section = {
  id: Math.random(),
  title: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
  items: Array(10).fill(null).map(_e => Math.random())
}

const testData = Array(15000).fill(null).map(_e => ({
  __typename: (Math.random() < 0.5 ? 'FeedSection' : 'other'),
  ...section
}))

function testMethod(f) {
  const start = Date.now()
  f()
  const stop = Date.now()
  console.log(`Run time: ${stop - start}ms`)
}

function firstMethod() {

  let topics = []
  const items = testData.filter(section => section.__typename === "FeedSection")
  items.forEach(function(item, i) {
    topics[i] = {id: item.id, title: item.title}
  })
  return topics
}

function secondMethod() {
  const items = testData.filter(section => section.__typename === "FeedSection")
  let topics = []
  for(let i=0; i < items.length; i++) {
    topics[i] = {id: items[i].id, title: items[i].title}
  }
  return topics
}

function thirdMethod() {
  return testData.filter(section => section.__typename === "FeedSection")
  .map( item => ({
    id: item.id,
    title: item.title
  }))
}

console.log('forEach')
testMethod(firstMethod)
testMethod(firstMethod)
testMethod(firstMethod)
testMethod(firstMethod)
testMethod(firstMethod)

console.log('loop')
testMethod(secondMethod)
testMethod(secondMethod)
testMethod(secondMethod)
testMethod(secondMethod)
testMethod(secondMethod)

console.log('map')
testMethod(thirdMethod)
testMethod(thirdMethod)
testMethod(thirdMethod)
testMethod(thirdMethod)
testMethod(thirdMethod)
