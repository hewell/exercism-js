
const USED_NAMES = [];
const CAPITALS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

module.exports = class Robot {

    constructor() {
        this.name = this._randomRobotName();
    }

    reset() {
        this.name = this._randomRobotName();
    }

    _randomRobotName() {
        const random3Digits = Math.floor((Math.random() * 900)) + 100;
        const random2Letters = this._randomLetters(2);
        const newName = random2Letters + random3Digits;
        if (!USED_NAMES.includes(newName)) {
            USED_NAMES.push(newName);
            return newName;
        } else {
            // worth introducing a timeout to avoid infinite loop
            return this._randomRobotName();
        }
    }

    _randomLetters(count) {
        let letters = '';
        while (count) {
            letters += CAPITALS.charAt(Math.floor(Math.random() * CAPITALS.length));
            count--;
        }
        return letters;
    }
}