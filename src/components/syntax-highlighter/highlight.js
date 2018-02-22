import {pathname} from '../url'
import {simpleMode, fullMode} from '../codemirror'

const CSS = 'css'
const SCSS = 'text/x-scss'
const LESS = 'text/x-less'
const JAVASCRIPT = 'javascript'
const JSX = 'jsx'
const TYPESCRIPT = 'text/typescript'
const JSON_LD = 'application/ld+json'
const SHELL = 'shell'

const modes = {
  default: JSX,
  css: CSS,
  scss: SCSS,
  less: LESS,
  bash: SHELL,
  shell: SHELL,
  javascript: JAVASCRIPT,
  js: JAVASCRIPT,
  jsx: JSX,
  typescript: TYPESCRIPT,
  ts: TYPESCRIPT,
  tsx: TYPESCRIPT,
  json: JSON_LD
}

const isJSFile = pathname.match(/\.js\.html/)
const isTSFile = pathname.match(/\.ts\.html/)
const isJSXFile = pathname.match(/\.jsx\.html/)
const isTSXFile = pathname.match(/\.tsx\.html/)
const isFile = isJSFile || isTSFile || isJSXFile || isTSXFile

const simpleOrFull = block => {
  const {innerText: value} = block
  const code = block.querySelector('code')
  let lang = ''
  if (code) {
    const classNames = code.className.split(' ')
    const [langName] = classNames.filter(x => x.match('lang'))
    if (langName) {
      lang = langName
    }

    const isImportPathCode = code.getAttribute('data-ice') === 'importPathCode'
    if (isImportPathCode) {
      return {ip: block}
    }
  }

  let mode = lang.replace(/lang(uage)?-/, '') || 'default'
  if (isJSFile || isJSXFile) {
    mode = 'jsx'
  }
  if (isTSFile || isTSXFile) {
    mode = 'ts'
  }
  if (isFile) {
    return fullMode(value, modes[mode], block)
  }
  return simpleMode(value, modes[mode], block)
}

const highlight = blocks => blocks.map(simpleOrFull)

export default highlight
