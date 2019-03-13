#!/usr/bin/env node
require ('babel-polyfill')

const calledAsExecutable = require.main === module

const jsonToDot = json =>
  Object.entries(json).reduce((acc, [node, dependencies]) => {
    return dependencies.reduce((acc, dependency) => acc + `  "${node}" -> "${dependency}"\n`, acc)
  }, 'digraph G {\n') + '}'

module.exports = jsonToDot

if (calledAsExecutable) {
  var jsonString = ''
  process.stdin.on('data', chunk => jsonString += chunk)
  process.stdin.on('end', () => console.log(jsonToDot(JSON.parse(jsonString))))
}
