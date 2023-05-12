const IsogramFinder = function (word) {
    this.word = word.split("")
}

IsogramFinder.prototype.isIsogram = function () {
    return !this.word.some((letter, i) => {
        return this.word.includes(letter, i+ 1)
    })
}

module.exports = IsogramFinder;
