import {pathname} from '../url'
import {simpleMode, fullMode} from '../codemirror'

const highlight = blocks => {
  return blocks.map(block => {
    const {innerText: value} = block
    const code = block.querySelector('code')
    const lang = !code
      ? ''
      : code.className.split(',').filter(x => x.match('lang'))[0] || ''
    // default to JSX
    const isJSFile = pathname.match('.js.html')
    const isTSFile = pathname.match('.ts.html')
    const isJSXFile = pathname.match('.jsx.html')
    const isTSXFile = pathname.match('.tsx.html')
    const isFile = isJSFile || isTSFile || isJSXFile || isTSXFile
    let mode = lang.replace(/lang(uage)?-/, '')
    if (isJSFile || isJSXFile) {
      mode = 'jsx'
    }
    if (isTSFile || isTSXFile) {
      mode = 'tsx'
    }
    return isFile
      ? fullMode(value, mode, block)
      : simpleMode(value, mode, block)
  })
}

export default highlight
