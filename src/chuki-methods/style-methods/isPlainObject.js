/**
 * Test whether an object is plain or not: {}
 *
 * @param obj An object to test.
 * @return boolean.
 */
export default obj => (obj === Object(obj) && Object.prototype.toString === obj.toString)