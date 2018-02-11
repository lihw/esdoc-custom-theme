import {hash} from '../url'
import normalizeLines from './normalize-lines'

const getActiveLines = hl => {
  const matched = location.hash.match(/activeLines=([\d,]+)/)
  if (matched) {
    const lines = normalizeLines(matched[1])
    lines.forEach((line, i) =>
      hl.addLineClass(line, 'wrap', 'CodeMirror-activeline-background')
    )
    hl.scrollIntoView(lines[0])
  }
}

export default getActiveLines
