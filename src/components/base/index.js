import {hash} from '../url'
import {$, $$} from '../global-elements'

// CSS file generation
import './base.scss'

const markHashTarget = hash => {
  if (hash) {
    const target = $(hash)
    if (target) {
      target.classList.add('active-target')
    }
  }
}

markHashTarget(hash)

window.addEventListener('hashchange', e => {
  $$('.active-target').forEach(target => {
    target.classList.remove('active-target')
  })
  const {newURL} = e
  const [, hash] = newURL.split('#')
  if (hash) {
    markHashTarget(`#${hash}`)
  }
})
