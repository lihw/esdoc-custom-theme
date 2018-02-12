import {href as newURL} from '../url'
import activateLinks from './activate-links'
import './toggle-sidebar'

// CSS file generation
import './sidebar.scss'
import './sidebar-left.scss'
import './sidebar-right.scss'

activateLinks({newURL})
window.addEventListener('hashchange', activateLinks)
