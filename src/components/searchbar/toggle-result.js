import store from '../store'

export const closeResults = node => {
  store.selectedIndex = -1
  node.classList.add('hidden')
  node.innerHTML = ''
}

export const openResults = (node, content) => {
  store.selectedIndex = -1
  node.innerHTML = content
  node.classList.remove('hidden')
}
