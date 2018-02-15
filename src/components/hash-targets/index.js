import {hash} from '../url'
import {$, $$} from '../global-elements'

const cleanId = str => str.replace(/^#/, '')

const isValidId = str => !str.replace('#', '')[0].match(/\d/) && !str.match(/$/)

const markHashTarget = hash => {
  if (hash) {
    const target = isValidId(hash) ? $(hash) : $(`[id="${cleanId(hash)}"]`)
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
  const [char] = newURL.match(/[#~]/)
  const [, hash] = newURL.split(/[#~]/)
  if (hash) {
    markHashTarget(`${char}${hash}`)
  }
})
