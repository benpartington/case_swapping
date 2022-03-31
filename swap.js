const swap = (word) => {
  const array = word.split("")
  const convert = array.map((element) => {
    if (element === element.toUpperCase()) {
      return element.toLowerCase();
      } else if (element === element.toLowerCase()) {
        return element.toUpperCase();
      } else {
        return element
      }
  }) 
  return convert.join("")
}

module.exports = swap;