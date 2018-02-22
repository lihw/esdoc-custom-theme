export {default as dyslexic} from './open-dyslexic'

/**
 * The default font only carries a `name`. It  disables all fonts and falls back to
 * system ui fonts or other highly compatible font stacks.
 * @type {{name: string, key: string, className: string}}
 */
export const defaultFont = {
  name: 'default',
  key: '',
  className: ''
}
