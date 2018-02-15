import {$, $$, _$$, _$, _closest, sidebarLeft} from '../global-elements'
import {href} from '../url'

const handleManualLinks = newURL => {
  const url = newURL.replace(/.*\/manual\//, 'manual/')
  const [slug] = url.split('#')
  const urlLinks = []
  const activatedLinks = [...sidebarLeft.querySelectorAll(`.active-link`)]
  const slugs = $$(`[href='${slug}']`, sidebarLeft)
  const urls = $$(`[href='${url}']`, sidebarLeft)
  const activeLinks = [...slugs, ...urls]
  activatedLinks.forEach(link => {
    link.classList.remove('active-link')
  })
  activeLinks.forEach(link => {
    link.classList.add('active-link')
  })
}

const activateSection = (path, link, active) => {
  if (path) {
    path.classList.add('active-link')
  }
  if (link) {
    const a = $('a', link)
    link.classList.remove('hidden')
    a.classList.toggle('active-link', a === active)
  }
}

const deactivateSection = (path, link) => {
  if (path) {
    path.classList.remove('active-link')
  }
  if (link) {
    link.classList.add('hidden')
    $('a', link).classList.remove('active-link')
  }
}

const activatePrevious = navItem => {
  let stop
  let item = navItem
  while (item.previousElementSibling && !stop) {
    //console.log(item)
    const {previousElementSibling} = item
    const dirPath = _$('dirPath', previousElementSibling)
    const fakeLink = _$('fakeLink', previousElementSibling)
    activateSection(dirPath, fakeLink)
    item = previousElementSibling
    stop = dirPath
  }
}

const findOpenSection = (parentNavItem, activeLink) => {
  let start, stop, heading
  _$$('navItem').forEach(navItem => {
    const dirPath = _$('dirPath', navItem)
    const fakeLink = _$('fakeLink', navItem)
    if (dirPath && start) {
      stop = true
    }
    if (stop) {
      deactivateSection(dirPath, fakeLink)
      return
    }
    if (navItem === parentNavItem) {
      start = true
      if (!dirPath) {
        activatePrevious(parentNavItem)
      }
    }
    if (start) {
      activateSection(dirPath, fakeLink, activeLink)
    } else {
      deactivateSection(dirPath, fakeLink)
    }
  })
}

const activate = e => {
  const {newURL = href} = e
  if (newURL.match(/.*\/manual\//)) {
    return handleManualLinks(newURL)
  }
  const [slug, hash] = newURL.split(/[#~]/)
  const [char] = newURL.match(/[#~]/) || []

  // url might not have a hash or appendix
  if (!hash) {
    return
  }
  const items = $$(`[href*="${char}${hash}"]`, sidebarLeft)
  items.forEach(item => {
    if (item.href === newURL) {
      const navItem = _closest(item, 'navItem')
      findOpenSection(navItem, item)
    }
  })
}

export default activate
