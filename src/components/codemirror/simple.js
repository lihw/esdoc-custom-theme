import store from '../store'
import CodeMirror, {simpleHighligtherClasses} from './codemirror'

const simpleMode = (value, mode, node) => {
  node.className = simpleHighligtherClasses(store.colorscheme)
  CodeMirror.runMode(value, mode, node)
  return {
    hl: node
  }
}

export default simpleMode
