import {hash} from '../url'

const getlineNumber = hl => {
  const matched = hash.match(/lineNumber([\d]+)/)
  if (matched) {
    const lineNumber = parseInt(matched[1], 10)
    hl.addLineClass(lineNumber - 1, 'wrap', 'CodeMirror-activeline-background')
    hl.scrollIntoView(lineNumber)
  }
}

export default getlineNumber
