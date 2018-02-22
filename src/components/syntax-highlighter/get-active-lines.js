import {hash} from '../url'
import normalizeLines from './normalize-lines'


/**
 * Activates lines from the url hash
 * @param {CodeMirror} hl - an instance of CodeMirror
 */
const getActiveLines = hl => {
  const matched = hash.match(/activeLines=([\d,]+)/)
  if (matched) {
    const lines = normalizeLines(matched[1])
    lines.forEach((line, i) =>
      hl.addLineClass(line, 'wrap', 'CodeMirror-activeline-background')
    )
    // Multiple lines could be active.
    // Ensure that the first line is visible
    hl.scrollIntoView(lines[0])
  }
}

export default getActiveLines
