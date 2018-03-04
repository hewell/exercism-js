class SecretHandshake {
    constructor(num) {
        if (+num !== num) {
            throw new Error('Handshake must be a number');
        }
        this.number = num
    }

    commands() {
        const commands = [];
        let reverse = false;
        let b = this.number.toString(2);

        while (b) {
            if (b >= 10000) {
                reverse = true;
                b -= 10000;
            } else if (b >= 1000) {
                commands.unshift('jump');
                b -= 1000;
            } else if (b >= 100) {
                commands.unshift('close your eyes');
                b -= 100;
            } else if (b >= 10) {
                commands.unshift('double blink');
                b -= 10;
            } else if (b >= 1) {
                commands.unshift('wink');
                b -= 1;
            }
        }

        if (reverse) return commands.reverse();
        return commands;
    }
}

module.exports = SecretHandshake;