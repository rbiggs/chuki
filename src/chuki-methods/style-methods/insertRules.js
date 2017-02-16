/**
 * Add rule sets to stylesheet.
 *
 * @param rules The rules to add.
 * @param sheet The stylesheet to add rules to.
 * @return void.
 */
export default (rules, sheet) => {
  function hyphenate (str) {
    return str.replace(/[A-Z]/g, function($0) { return '-'+$0.toLowerCase(); })
  }
  rules.forEach(function(rule) {
    const pairs = [];
    for (const prop in rule[1]) {
      pairs.push(`${hyphenate(prop)}:${rule[1][prop]}`)
    }
    if (pairs.length > 0) {
      sheet.insertRule(`${rule[0]} { ${pairs.join(";")} }`, 0)
    }
  })
}
