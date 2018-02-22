// CSS file generation
import './kind.scss'

/**
 * @typedef TestTypeDef1
 *
 * This is just a test for typedef
 * @see {TestTypeDef2}
 * @type {function}
 * @param {!Object} foo Just an object
 * @param {?String} bar This is a string
 * @param {*} [baz=''hello] This anything
 */

/**
 * @public
 * @typedef TestTypeDef2
 *
 * This is just a test for typedef
 * @type Object
 * @property {String} foo About foo
 */

/**
 * @class
 * @param {Object} options
 *   The plugin options
 * @param {Object} options.type
 *   The kind type
 * @param {Object} options.name
 *   The kind name
 */
export default class Kind {
  constructor(options) {}
}
