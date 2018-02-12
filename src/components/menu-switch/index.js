import store, {setLocalStorage} from '../store'
import {body, sidebarLeft, menuSwitch} from '../global-elements'

// CSS file generation
import './menu-switch.scss'

menuSwitch.addEventListener('click', e => {
  e.preventDefault()
  console.log()
  toggleSidebar(store.sidebarLeft)
  store.sidebarLeft = !store.sidebarLeft
})

export const closeSidebar = () => {
  sidebarLeft.classList.remove('initial')
  store.sidebarLeft = false
  toggleSidebar(true)
}

export const openSidebar = () => {
  sidebarLeft.classList.remove('initial')
  store.sidebarLeft = true
  toggleSidebar(false)
}

export const toggleSidebar = open => {
  sidebarLeft.classList.toggle('closed', open)
}

toggleSidebar(!store.sidebarLeft)

body.addEventListener('click', e => {
  const {path} = e
  if (path.indexOf(menuSwitch) < 0) {
    closeSidebar()
  }
})
