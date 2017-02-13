/**
 * Flatten array.
 *
 * @param array An array to flatten.
 * @return array.
 */
export default array => {
  const flattened = Array.prototype.concat(array);
  for (let i = 0; i < flattened.length; i++) {  
    if (Array.isArray(flattened[i])) {
      flattened.splice(i, 1, ...flattened[i--]);  
    }
  }
  return flattened;
}