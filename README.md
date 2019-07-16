# hwrite
HTML element writer

## Usage

### hwrite(element, attributes, \[children\])

#### Create elements with attributes and listeners

```
import h from hwrite

document.body.appendChild(
  h('div', {
    class: 'coolDiv',
    onclick: () => console.log('clicked')
  })
)
```

#### Child elements and text nodes

```
import h from hwrite

h('div', {}, 'hello world!')

h('div', {}, h('div', {}, 'nested div'}))
```

#### Arrays are just additional children

Sometimes it is convenient to pass (dynamically constructed) arrays:

```
import h from hwrite

// this object...
h('div', {},
  h('div', {}, 'nested div'}), 'more text', 'even more text')

// ...is the same as this one
h('div', {},
  [h('div', {}, 'nested div'}),
    'more text',
    'even more text'])
```

### With [@babel/plugin-transform-react-jsx](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx) enabled

You can write JSX instead of building `HTMLElement` objects if you transpile it with `babel`.

Include the following in your `.babelrc`:

```
{
  "plugins": [
    ["@babel/plugin-transform-react-jsx", {
      "pragma": "h", // default pragma is React.createElement
    }]
  ]
}
```

Write JSX:

```
import h from hwrite

const render = function () {
 return <div>Much nicer!</div>
}
```

## License

MIT
