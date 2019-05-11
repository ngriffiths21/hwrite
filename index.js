'use strict'

module.exports = function (elem, attribs, ...children) {
  let result = document.createElement(elem)

  for (var attr in attribs) {
    if (attr.startsWith('on')) {
      result.addEventListener(attr.slice(2), attribs[attr])
    } else {
      result.setAttribute(attr, attribs[attr])
    }
  }

  children.flat().forEach(function (child) {
    if (!child) {
      return null
    } else if (typeof child === 'string') {
      result.appendChild(document.createTextNode(child))
    } else {
      result.appendChild(child)
    }
  })
  return result
}
