/**
 * Normalizes lines
 *
 * @param  {Array} lines
 *   The lines
 * @return {Array}
 *   sorted and 0 based index
 *
 * @example
 * const lines = normalizeLines(['1', '12', '3', '5'])
 * // => [0, 2, 4, 11]
 */
const normalizeLines = lines =>
  lines
    .split(',')
    .map(line => parseInt(line, 10) - 1)
    .sort((a, b) => a - b)

export default normalizeLines
