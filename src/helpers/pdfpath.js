// This helper combines some 'page' attributes (component, version, etc.) to create a
// filename.

// TODO: we want in a future, when we get access to the content catalog, to check that the
// generated filename exists under the '_attachments' directory (if
// (fs.existsSync(pdfpath))), and return "" otherwise.

'use strict'

const { posix: path } = require('path')
const fs = require('fs')

module.exports = (page) => {
  if (!page || !page.component || !page.componentVersion) return ""
  if (page.component.name === 'free-soft') return "" // TODO: get this info from catalog or FS
  let pdfbase = [
    [
      'barcelona',
      page.component.name.replace('-', '_'),
      page.componentVersion.version,
    ].join('_'),
    'en',                       // TODO: get language from Antora
    'pdf'
  ].join('.')
  let pdfpath = path.join(
    '_attachments',
    pdfbase
  )
  return pdfpath
}
