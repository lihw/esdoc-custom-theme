import store, {setLocalStorage} from '../store'
import {documentElement, modeSwitch} from '../global-elements'

// CSS file generation
import './root.scss'
import './dark.scss'
import './light.scss'
import './mode-switch.scss'

const toggle = (a, b, c) => (a === b ? c : b)

export const switchLight = e => {
  e.preventDefault()
  const {mode} = store
  const newMode = toggle(mode, 'light', 'dark')
  store.mode = newMode

  setLocalStorage('mode', newMode)
  setLight(newMode, mode)
}

const setLight = (mode, oldMode) => {
  documentElement.classList.replace(oldMode, mode)
}

modeSwitch.addEventListener('click', switchLight)
setLight(store.mode, toggle(store.mode, 'light', 'dark'))
