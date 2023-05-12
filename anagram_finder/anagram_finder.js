const AnagramFinder = function (word) {
    this.word = word.toUpperCase().split("")
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter((otherword) => {
        if (otherword !== this.word && otherword.length === this.word.length)
            return this.word.every((letter) => {
                return otherword.toUpperCase().includes(letter)
        })
    })
}

module.exports = AnagramFinder;
