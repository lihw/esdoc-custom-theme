import CodeMirror, {colorschemes} from '../codemirror'
import {codeBlocks} from '../global-elements'

import highlight from './highlight'
import getErrorLines from './get-error-lines'
import getActiveLines from './get-active-lines'
import getlineNumber from './get-line-number'

const instances = highlight(codeBlocks)
export const fullHighlighters = instances
  .filter(x => Boolean(x.cm))
  .map(x => x.cm)
export const simpleHighlighters = instances
  .filter(x => Boolean(x.hl))
  .map(x => x.hl)
export const [fileHighlighter] = fullHighlighters
getErrorLines(fileHighlighter)
getActiveLines(fileHighlighter)
getlineNumber(fileHighlighter)
