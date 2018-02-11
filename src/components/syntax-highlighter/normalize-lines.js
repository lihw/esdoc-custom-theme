const normalizeLines = lines =>
  lines
    .split(',')
    .map(line => parseInt(line, 10) - 1)
    .sort((a, b) => a - b)

export default normalizeLines
