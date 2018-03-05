module.exports = class Hamming {
    constructor() {

    }

    compute(i = '', j = '') {
        const a = i.split('');
        const b = j.split('');
        if (a.length != b.length) {
            throw new Error("DNA strands must be of equal length.");
        }

        let dist = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                dist++;
            }
        }
        return dist;
    }
}