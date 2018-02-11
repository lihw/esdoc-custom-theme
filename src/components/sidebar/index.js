import {href as newURL} from '../url'
import activateLinks from './activate-links'

// CSS file generation
import './sidebar-left.scss'
import './sidebar-right.scss'

activateLinks({newURL})
window.addEventListener('hashchange', activateLinks)
