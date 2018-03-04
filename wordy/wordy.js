class ArgumentError extends Error { }

class Wordy {
    constructor(input) {
        this.question = input;
    }

    answer() {
        let numbers = this.question.match(/-?\d+/g);
        const operators = this.question.match(/(plus|minus|multiplied by|divided by)+/g);
        if (!numbers || !operators || numbers.length !== operators.length + 1) {
            throw new ArgumentError();
        }
        numbers = numbers.map(Number);

        let result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
            switch (operators[i]) {
                case 'plus':
                    result += numbers[i + 1];
                    break;
                case 'minus':
                    result -= numbers[i + 1];
                    break;
                case 'multiplied by':
                    result *= numbers[i + 1];
                    break;
                case 'divided by':
                    result /= numbers[i + 1];
                    break;
                default:
                    throw new ArgumentError();
            }
        }
        return result;
    }
}

module.exports = {
    ArgumentError: ArgumentError,
    WordProblem: Wordy
}