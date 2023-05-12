const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase().split('');
  this.phrase = phrase.toUpperCase().split("")
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((letter) => {
    return this.phrase.includes(letter)
  })
}

module.exports = PangramFinder;
