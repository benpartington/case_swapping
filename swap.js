const swap = (word) => {
  if (word === word.toUpperCase()) {
  return word.toLowerCase();
  } else if (word === word.toLowerCase()) {
    return word.toUpperCase();
  } else {
    return word
  }
}

module.exports = swap;