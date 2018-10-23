const test = require('tape')
const jsonToDot = require('.')

test('json -> dot', t => {
  t.equal(
    jsonToDot({
      foo: ['bar', 'buzz'],
      bar: ['foo'],
      norf: ['worble', 'buzz'],
      worf: ['worble'],
      fizz: ['buzz']
    }),
    'digraph G {\n' +
    '  "foo" -> "bar"\n' +
    '  "foo" -> "buzz"\n' +
    '  "bar" -> "foo"\n' +
    '  "norf" -> "worble"\n' +
    '  "norf" -> "buzz"\n' +
    '  "worf" -> "worble"\n' +
    '  "fizz" -> "buzz"\n' +
    '}'
  )

  t.end()
})
