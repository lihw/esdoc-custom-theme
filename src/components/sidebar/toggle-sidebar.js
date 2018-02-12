import {sidebarRight, settingsSwitch} from '../global-elements'

settingsSwitch.addEventListener('click', e => {
  e.preventDefault()
  sidebarRight.classList.toggle('closed')
})
