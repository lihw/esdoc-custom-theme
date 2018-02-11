import appStorage from '../store'
import {body, searchBox, searchInput, searchResult} from '../global-elements'

import {openResults, closeResults} from './toggle-result'
import searchIndex from './search-index'
import search from './search'
import select from './select'
import activate from './activate'

// CSS file generation
import './search-result.scss'
import './search-box.scss'

const sendSearch = e =>
  search(e.target.value.trim().toLowerCase(), searchResult)
const sendSelect = e => select(e, searchResult)
const sendActivate = e => activate(e.target, searchResult)

// search on keyup (typing)
searchInput.addEventListener('keyup', sendSearch)
// select on keydown (up, down, enter/return)
searchInput.addEventListener('keydown', sendSelect)

// select search result when search result is mouse over.
searchResult.addEventListener('mousemove', sendActivate)

// Clear search result when body is clicked.
body.addEventListener('click', e => {
  closeResults(searchResult)
})
