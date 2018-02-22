import {hash} from '../url'
import normalizeLines from './normalize-lines'

/**
 * Highlights error lines from the URL hash
 * @param {CodeMirror} hl An instance of CodeMirror
 */
const getErrorLines = hl => {
  const matched = hash.match(/errorLines=([\d,]+)/)
  if (matched) {
    const lines = normalizeLines(matched[1])
    lines.forEach((line, i) =>
      hl.addLineClass(line, 'wrap', 'CodeMirror-errorline-background')
    )
    hl.scrollIntoView(lines[0])
  }
}

export default getErrorLines
