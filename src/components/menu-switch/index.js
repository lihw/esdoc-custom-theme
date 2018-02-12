import store, {setLocalStorage} from '../store'
import {sidebarLeft, menuSwitch} from '../global-elements'

// CSS file generation
import './menu-switch.scss'

menuSwitch.addEventListener('click', e => {
  e.preventDefault()
  const open = store.sidebarLeft === true
  sidebarLeft.classList.remove('initial')
  sidebarLeft.classList.toggle('closed', open)
  setLocalStorage('sideBarLeft', !open)
  store.sidebarLeft = !open
})

sidebarLeft.classList.toggle('closed', !store.sidebarLeft)
