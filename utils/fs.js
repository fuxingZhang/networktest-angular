const fs = require('fs')
const util = require('util')
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

module.exports = {
  readFileAsync,
  writeFileAsync
}