const { readFileSync } = require('fs')
const { join } = require('path')

exports.inlineCSS = readFileSync(join(__dirname, 'inline.css'))
exports.headCSS = readFileSync(join(__dirname, 'head.css'))
 