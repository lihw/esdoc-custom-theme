export const jsSelector = name => `.js_${name}`
export const $$ = (selector, context = document) => [
  ...context.querySelectorAll(selector)
]

export const $ = (selector, context = document) =>
  context.querySelector(selector)

export const _$$ = (name, context = document) => [
  ...context.querySelectorAll(jsSelector(name))
]

export const _$ = (name, context = document) =>
  context.querySelector(jsSelector(name))

export const createElement = (tag, {className = ''}, child) => {
  const wrapper = document.createElement(tag)
  wrapper.classList.add(className)
  if (child) {
    wrapper.appendChild(child)
  }
  return wrapper
}

export const body = document.body
export const documentElement = document.documentElement

export const mainHeader = _$('mainHeader', body)
export const sidebarLeft = _$('sidebarLeft', body)
export const sidebarRight = _$('sidebarRight', body)

export const optionsSwitch = _$('optionsSwitch', mainHeader)
export const modeSwitch = _$('modeSwitch', mainHeader)

export const searchBox = _$('searchBox', mainHeader)

export const searchInput = _$('searchInput', searchBox)
export const searchResult = _$('searchResult', searchBox)
export const searchIcon = _$('searchIcon', searchBox)

export const colorschemeOptions = _$('colorschemeOptions', sidebarRight)
export const fontOptions = _$('fontOptions', sidebarRight)

export const githubLink = $(`${jsSelector('mainHeader')} > a:last-child`)

export const codeBlocks = $$('pre')
