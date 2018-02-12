import {documentElement} from './components/global-elements'

/**
 * Elements & layout
 */
import './components/base'
import './components/layout'
import './components/list'
import './components/link'
import './components/quote'
import './components/table'
import './components/main'
import './components/kind'

/**
 * Code related (colorschemes)
 */
import './components/syntax-highlighter'

/**
 * Mode related (dark, light ...)
 */
import './components/mode-selector'

/**
 * Manual related
 */
import './components/cards'

/**
 * Header related
 */
import './components/header'
import './components/navigation'
import './components/searchbar'
// Add customizers
import './components/mode-selector'
import './components/colorscheme-selector'
// Modify the injected github link
import './components/github-link'

/**
 * Main related
 */
import './components/main'
import './components/content'

/**
 * Footer related
 */
import './components/footer'

/**
 * Sidebar related
 */
import './components/sidebar'
import './components/menu-switch'

/**
 * Addons, patches...
 */
import './components/patch-for-local'

documentElement.classList.replace('no-js', 'js')
