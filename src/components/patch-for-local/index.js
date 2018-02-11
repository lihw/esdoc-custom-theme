import {protocol} from '../url'
import {$$} from '../global-elements'

if (protocol === 'file:') {
  const homeLinks = $$('a[href="./"]')
  homeLinks.forEach(link => {
    link.href = './index.html'
  })
}
