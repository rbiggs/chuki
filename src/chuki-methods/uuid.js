/**
 * uuid for element ids:
 *
 * @return string A string of letters and numbers to use as an id for elements, etc.
 */
export default () => (Math.random().toString(36).substr(2, 11) + Math.random().toString(36).substr(2, 11))
