export const {localStorage} = window
export const storageId = name => `__esdoc-custom-theme__${name}__`
export const getLocalStorage = name => localStorage.getItem(storageId(name))
export const setLocalStorage = (name, value) =>
  localStorage.setItem(storageId(name), value)

const defaultColorscheme = 'zenburn'
const defaultMode = 'dark'

const colorscheme = getLocalStorage('colorscheme') || defaultColorscheme
const mode = getLocalStorage('mode') || defaultMode

const store = {
  colorscheme,
  mode,
  selectedIndex: -1,
  prevText: ''
}

export default store
