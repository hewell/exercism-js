module.exports = class Anagram {
    constructor(subject) {
        this.subject = subject;
    }

    matches(...args) {
        const resultArr = [];

        if (args[0] && typeof args[0] !== 'string') {
            args = args[0];
        }

        for (let arg of args) {
            if (this.subject.equals(arg)) {
                resultArr.push(arg);
            }
        }

        return resultArr;
    }

}

String.prototype.equals = function (match) {
    if (!match) return false;
    if (this.length != match.length) return false;
    //reject same word
    if (this.toLowerCase() === match.toLowerCase()) return false;

    return this.toLowerCase().split('').sort().join() === match.toLowerCase().split('').sort().join();
}