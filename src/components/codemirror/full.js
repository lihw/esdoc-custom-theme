import CodeMirror from './codemirror'
import store from '../store'

const fullMode = (value, mode, node) => {
  return {
    cm: CodeMirror(
      element => {
        node.parentNode.replaceChild(element, node)
      },
      {
        value,
        mode,
        readOnly: true,
        lineNumbers: true,
        lineWrapping: true,
        theme: store.colorscheme,
        showCursorWhenSelecting: false,
        cursorBlinkRate: -1
      }
    )
  }
}

export default fullMode
