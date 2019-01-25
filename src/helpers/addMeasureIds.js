'use strict'

// FIXME: It's overkill to apply this to all articles. A better solution would be a custom
// template for measures.

const jsdom = require("jsdom")
const { JSDOM } = jsdom

module.exports = (html) => {
  const dom = new JSDOM(html.toString('utf-8'))
  const { document } = dom.window

  // Add custom attribute "data-measure-id" to measure titles
  for (let m of document.querySelectorAll('.measure, .recommendation, .alternative')) {
    let title = m.querySelector('.content').querySelector('.title')
    title.setAttribute('data-measure-id', m.getAttribute('id'))
  }

  let result = ''
  for (let node of document.documentElement.childNodes)
    result = result + node.innerHTML

  return result
}
