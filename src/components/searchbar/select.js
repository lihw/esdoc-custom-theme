import store from '../store'
import {setHref} from '../url'

const select = (e, node) => {
  const {keyCode} = e
  if (keyCode === 40) {
    // arrow down
    const current = node.children[store.selectedIndex]
    let selected = node.children[store.selectedIndex + 1]
    if (selected && selected.classList.contains('search-separator')) {
      selected = node.children[store.selectedIndex + 2]
      store.selectedIndex++
    }

    if (selected) {
      if (current) {
        current.classList.remove('selected')
      }
      store.selectedIndex++
      selected.classList.add('selected')
    }
  } else if (keyCode === 38) {
    // arrow up
    const current = node.children[store.selectedIndex]
    let selected = node.children[store.selectedIndex - 1]
    if (selected && selected.classList.contains('search-separator')) {
      selected = node.children[store.selectedIndex - 2]
      store.selectedIndex--
    }

    if (selected) {
      if (current) {
        current.classList.remove('selected')
      }
      store.selectedIndex--
      selected.classList.add('selected')
    }
  } else if (keyCode === 13) {
    // enter
    const current = node.children[store.selectedIndex]
    if (current) {
      const link = current.querySelector('a')
      if (link) {
        setHref(link.href)
      }
    }
  } else {
    return
  }
  e.preventDefault()
}

export default select
