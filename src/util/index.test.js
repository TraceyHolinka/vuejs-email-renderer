const processors = require('./index')

describe('processors', () => {

  const items = [
    {
      id: 1,
      name: 'Word 1'
    },
    {
      id: 8,
      name: 'Word 3'
    },
    {
      id: 6,
      name: 'Word 2'
    },
    {
      id: 6,
      name: 'Word 2'
    },
    {
      id: 4,
      name: 'Word 4'
    },
   
    {
      id: 1,
      name: 'Word 1'
    },
    {
      id: 8,
      name: 'Word 3'
    },
    {
      id: 4,
      name: 'Word 4'
    }
   ]

  const dedupedItems = [ 
    {
      id: 1,
      name: 'Word 1'
    },
    {
      id: 4,
      name: 'Word 4'
    },
    {
      id: 6,
      name: 'Word 2'
    },
    {
      id: 8,
      name: 'Word 3'
    }
  ]

  const sortedAscending = [ 
    {
      id: 1,
      name: 'Word 1'
    },
    {
      id: 6,
      name: 'Word 2'
    },
    {
      id: 8,
      name: 'Word 3'
    },
    {
      id: 4,
      name: 'Word 4'
    }
  ]

  it('dedups items', () => {
    expect(processors.dedup(items)).toEqual(dedupedItems)
  })

  it('sorts items alphabetically', () => {
    expect(processors.sortAscending(dedupedItems)).toEqual(sortedAscending)
  })

})