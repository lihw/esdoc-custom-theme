import store, {setLocalStorage} from '../store'
import {
  $,
  sidebarRight,
  createElement,
  colorschemeOptions
} from '../global-elements'
import {colorschemes, simpleHighligtherClasses} from '../codemirror'

import {fullHighlighters, simpleHighlighters} from '../syntax-highlighter'

// CSS file generation
import './colorscheme-selector.scss'

colorschemes.forEach(colorscheme => {
  const a = createElement(
    'a',
    {
      class: `nav-link${
        colorscheme === store.colorscheme ? ' active-link' : ''
      }`,
      href: '#'
    },
    colorscheme
  )
  a.addEventListener('click', e => {
    e.preventDefault()
    setLocalStorage('colorscheme', colorscheme)
    setColorscheme(colorscheme)
    $('.active-link', sidebarRight).classList.remove('active-link')
    a.classList.add('active-link')
  })
  const li = createElement('li', {class: 'nav-item'}, a)
  colorschemeOptions.appendChild(li)
})

const setColorscheme = colorscheme => {
  fullHighlighters.forEach(hl => {
    hl.setOption('theme', colorscheme)
  })
  simpleHighlighters.forEach(hl => {
    hl.className = simpleHighligtherClasses(colorscheme)
  })
}

setColorscheme(store.colorscheme)
