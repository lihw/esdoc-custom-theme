import {sidebarLeft} from '../global-elements'

const activate = e => {
  const {newURL} = e
  const url = newURL.replace(/.*\/manual\//, 'manual/')
  const [slug, hash] = url.split('#')
  const urlLinks = []
  const activatedLinks = [...sidebarLeft.querySelectorAll(`.active-link`)]
  const activeLinks = [
    ...sidebarLeft.querySelectorAll(`[href='${slug}']`),
    ...sidebarLeft.querySelectorAll(`[href='${url}']`)
  ]
  activatedLinks.forEach(link => {
    link.classList.remove('active-link')
  })
  activeLinks.forEach(link => {
    link.classList.add('active-link')
  })
}

export default activate
