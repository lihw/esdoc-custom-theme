import CodeMirror, {colorschemes} from '../codemirror'
import {codeBlocks} from '../global-elements'

import highlight from './highlight'
import getErrorLines from './get-error-lines'
import getActiveLines from './get-active-lines'
import getlineNumber from './get-line-number'

const instances = highlight(codeBlocks)
const fullHighlighters = instances.filter(x => Boolean(x.cm)).map(x => x.cm)
const simpleHighlighters = instances.filter(x => Boolean(x.hl)).map(x => x.hl)
const [fileHighlighter] = fullHighlighters
getErrorLines(fileHighlighter)
getActiveLines(fileHighlighter)
getlineNumber(fileHighlighter)
