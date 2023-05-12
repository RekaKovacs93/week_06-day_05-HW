const AnagramFinder = function (word) {
    this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    let wordLetters = this.word.split("")
    let others = []
    let otherWordLetters = otherWords.forEach(word => {
        otherWords.push(word.split(""))
    });
    // const anaChecker =  otherWords.map((otherWord) => {
    //     return otherWord.split("")
    // })
    return others
}

module.exports = AnagramFinder;
