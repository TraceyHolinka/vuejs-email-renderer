exports.dedup = function dedup(items) {
  let uniqueItems = {}
  for (const item of items) {
    uniqueItems[item.id] = item
  }

  return Object.values(uniqueItems)
}

exports.sortAscending = function sortAscending(items) {
  return items.sort((a, b) => a.name.localeCompare(b.name))
}
