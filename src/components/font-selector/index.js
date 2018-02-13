import store, {setLocalStorage} from '../store'
import {
  $,
  sidebarRight,
  createElement,
  fontOptions,
  documentElement
} from '../global-elements'
import * as fontObject from '../fonts'

// CSS file generation
import './fonts-selector.scss'

const fonts = Object.keys(fontObject).map(font => fontObject[font])

Object
  .keys(fontObject)
  .map(font => fontObject[font])
  .forEach(font => {
    const a = createElement(
      'a',
      {
        class: `nav-link${
          font.key === store.font ? ' active-link' : ''
        }`,
        href: '#'
      },
      font.name
    )
    a.addEventListener('click', e => {
      e.preventDefault()
      setLocalStorage('font', font.key)
      store.font = font.key
      setFont(font)
      $('.active-link', fontOptions).classList.remove('active-link')
      a.classList.add('active-link')
    })
    const li = createElement('li', {class: 'nav-item'}, a)
    fontOptions.appendChild(li)
  })

const prefix = 'font-'
const pattern = new RegExp(`${prefix}[a-z0-9_-]+`, 'ig')
const fontName = name => name ? `${prefix}${name}` : ''

const setFont = (font = {}) => {
  const {className} = documentElement
  const classNames = className
    .replace(pattern, '')
    .split(' ')
    .filter(Boolean)
  documentElement.className = [...classNames, fontName(font.className)].join(' ')

}

setFont(fontObject[store.font])
