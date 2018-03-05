module.exports = {

    encode(text) {
        return text.replace(/([\w\s])\1*/g, function (match) {
            if (match.length > 1) {
                return match.length + match[0];
            }
            return match[0];
        });
    },

    decode(encoded) {
        return encoded.replace(/(\d+)(\w|\s)/g, function (match, number, char) {
            return new Array(+number).fill(char).join('');
        });
    }
}