module.exports = class BeerSong {
    constructor() { }

    verse(num) {
        if (num > 99 || num < 0) return '';
        if (num === 0) {
            return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`
        }

        let a = `${num} bottles`;
        let b = `${num - 1} bottles`;
        let one = 'one';

        if (num === 2) {
            b = '1 bottle';
        } else if (num === 1) {
            a = '1 bottle';
            b = 'no more bottles';
            one = 'it';
        }
        return `${a} of beer on the wall, ${a} of beer.\nTake ${one} down and pass it around, ${b} of beer on the wall.\n`
    }

    sing(start, finish) {
        if (!start || (finish && (start < finish))) {
            return '';
        }

        let singing = [];
        let f = finish;
        if (!finish) f = 0;

        for (let i = start; i >= f; i--) {
            singing.push(this.verse(i));
        }
        return singing.join('\n');
    }
}