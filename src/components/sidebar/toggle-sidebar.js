import {body, sidebarRight, settingsSwitch} from '../global-elements'

settingsSwitch.addEventListener('click', e => {
  e.preventDefault()
  sidebarRight.classList.toggle('closed')
})

// This section will close the right sidebar
body.addEventListener('click', e => {
  const {path} = e
  const switchClick = path.indexOf(settingsSwitch) >= 0
  const menuClick = path.indexOf(sidebarRight) >= 0
  if (!switchClick && !menuClick) {
    sidebarRight.classList.add('closed')
  }
})
