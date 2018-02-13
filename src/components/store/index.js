import {defaultFont} from '../fonts'

export const {localStorage} = window
export const storageId = name => `__esdoc-custom-theme__${name}__`
export const getLocalStorage = name => localStorage.getItem(storageId(name))
export const setLocalStorage = (name, value) =>
  localStorage.setItem(storageId(name), value)

const defaultColorscheme = 'zenburn'
const defaultMode = 'dark'

const colorscheme = getLocalStorage('colorscheme') || defaultColorscheme
const mode = getLocalStorage('mode') || defaultMode
const font = getLocalStorage('font') || defaultFont.key

const store = {
  colorscheme,
  mode,
  font,
  selectedIndex: -1,
  prevText: '',
  sidebarLeft: false
}

export default store
