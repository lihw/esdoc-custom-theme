import store from '../store'
import {closeResults, openResults} from './toggle-result'
import searchIndex from './search-index'

const search = (text, output) => {
  if (!text) {
    closeResults(output)
    return
  }

  if (text === store.prevText) {
    return
  }

  store.prevText = text

  const html = {
    class: [],
    method: [],
    member: [],
    function: [],
    variable: [],
    typedef: [],
    external: [],
    file: [],
    test: [],
    testFile: []
  }

  searchIndex.forEach((item, index) => {
    const [src, href, label, kind] = item
    if (src.indexOf(text) > -1) {
      html[kind].push(`
        <li class="search-result-item">
          <a class="search-result-link" href="${href}">
            ${label}
          </a>
        </li>
      `)
    }
  })

  const innerHTML = Object.keys(html)
    .map(kind => {
      const list = html[kind].join('')
      if (!list) {
        return ''
      }
      return `
      <li class="search-separator">
        ${kind}
      </li>
    ${list}`
    })
    .join('')

  if (!innerHTML) {
    closeResults(output)
    return
  }
  openResults(output, innerHTML)
}

export default search
