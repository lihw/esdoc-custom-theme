export const {
  hash,
  search,
  protocol,
  host,
  hostname,
  origin,
  port,
  pathname,
  href
} = window.location

export const setURL = (type, value) => {
  window.location[type] = value
}

export const setHash = value => {
  setURL('hash', value)
}

export const setHref = value => {
  setURL('href', value)
}
