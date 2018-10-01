;(function () {
  'use strict'

  var admonBlock = document.querySelectorAll('.admonitionblock')
  if (!admonBlock) return

  admonBlock.forEach(function (e) {
    var admonTitle = e.querySelector('[title]').getAttribute('title')
    var admonTitleBlock = document.createElement('div')
    var admonContent = e.querySelector('.content')
    var admonContentBlock = document.createElement('div')

    document.querySelector

    admonContentBlock.innerHTML = admonContent.innerHTML
    admonTitleBlock.classList.add('admonitionblock__title')
    admonTitleBlock.textContent = admonTitle
    admonContent.innerHTML = ''
    admonContent.appendChild(admonTitleBlock)
    admonContent.appendChild(admonContentBlock)
  })
})()
