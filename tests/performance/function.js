// Example of manual function performance testing of best method for geting all articles by a section type.
// Courtesy of Emma Alexandra: https://github.com/emma-k-alexandra

let section = {
  articles: Array(10).fill(null).map(_e => Math.random())
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
  let articles = []
  testData.forEach(function(section) {
    if (section.__typename === 'FeedSection') {
      articles = articles.concat(section.articles)
    }
  })
  return articles
}

function secondMethod() {
  return testData
    .filter(section => section.__typename === 'FeedSection')
    .flatMap(section => section.articles)
}

function thirdMethod() {
  return testData.reduce((accumulator, section) => {
    if (section.__typename === 'FeedSection') {
      accumulator = accumulator.concat(section.articles)
    }
    return accumulator
  }, [])
}

function fourthMethod() {
  let articles = []
  for (const section of testData) {
    if (section.__typename === 'FeedSection') {
      articles = articles.concat(section.articles)
    }
  }
  return articles
}

console.log('forEach')
testMethod(firstMethod)
testMethod(firstMethod)
testMethod(firstMethod)
testMethod(firstMethod)
testMethod(firstMethod)

console.log('filter & flatMap')
testMethod(secondMethod)
testMethod(secondMethod)
testMethod(secondMethod)
testMethod(secondMethod)
testMethod(secondMethod)

console.log('reduce')
testMethod(thirdMethod)
testMethod(thirdMethod)
testMethod(thirdMethod)
testMethod(thirdMethod)
testMethod(thirdMethod)

console.log('for loop')
testMethod(fourthMethod)
testMethod(fourthMethod)
testMethod(fourthMethod)
testMethod(fourthMethod)
testMethod(fourthMethod)