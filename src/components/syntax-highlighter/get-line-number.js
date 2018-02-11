import {hash} from '../url'

const getlineNumber = hl => {
  const matched = location.hash.match(/lineNumber([\d]+)/)
  if (matched) {
    const lineNumber = parseInt(matched[1], 10)
    hl.scrollIntoView(lineNumber)
  }
}

export default getlineNumber
