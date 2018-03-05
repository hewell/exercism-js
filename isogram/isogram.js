module.exports = class Isogram {
    constructor(string = '') {
        this.word = string;
    }

    isIsogram() {
        if (this.word.length <= 1) {
            return true;
        }

        const arr = this.word.toLowerCase().replace(/[\s|-]/g, '').split('');
        const set = new Set(arr);
        return arr.length === set.size;
    }
}