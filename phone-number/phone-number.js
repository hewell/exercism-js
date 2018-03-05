module.exports = class PhoneNumber {
    constructor(text) {
        this.phoneString = text;
        this.phoneNumber = this.cleanup();
    }

    number() {
        return this.phoneNumber;
    }

    cleanup() {
        const regex = /^[\+()\s\d-.]+$/g;
        if (!regex.test(this.phoneString)) {
            return null;
        }

        const digits = this.phoneString.replace(/\D/g, '');

        if (!this.isValid(digits)) return null;

        if (digits.length === 11) return digits.slice(1);
        return digits;
    }

    isValid(digits) {
        if (digits.length > 11 || digits.length < 10) return false;

        if (digits.length === 11 && digits[0] !== '1') return false;

        if (digits[digits.length - 7] < 2 || digits[digits.length - 7] > 9 || digits[digits.length - 10] < 2 || digits[digits.length - 10] > 9) return false;

        return true;
    }
}