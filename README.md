# json-to-dot

Convert a json graph to the dot format

## Installation

```sh
$ npm install --save json-to-dot
```

## Usage

It takes a single level json tree with the keys being nodes and the values being 
an array of strings of dependencies that should be connected:

```js
const jsonToDot = require('json-to-dot')

jsonToDot({
  foo: ['bar', 'buzz'],
  bar: ['foo'],
  norf: ['worble', 'buzz'],
  worf: ['worble'],
  fizz: ['buzz']
})
```

## Converting dot into an image

You can convert the graph into an actual image using graphviz

```sh
$ dot -Tpng graph.dot -o graph.png
```

## License

See LICENSE
