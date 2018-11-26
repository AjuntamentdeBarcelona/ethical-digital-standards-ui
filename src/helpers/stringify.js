'use strict'

module.exports = (o) => JSON.stringify(
  o,
  (k, v) => {
    if (k === 'contents') return 'OMIT'
    else return v
  },
  // 2-spaces indentation
  2
)
