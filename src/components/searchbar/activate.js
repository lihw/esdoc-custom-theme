import store from '../store'

const activate = (node, target) => {
  const current = node.children[store.selectedIndex]
  let li = target
  while (li) {
    if (li.nodeName === 'LI') {
      break
    }
    li = li.parentElement
  }

  if (li) {
    store.selectedIndex = [...node.children].indexOf(li)
  }
}

export default activate
