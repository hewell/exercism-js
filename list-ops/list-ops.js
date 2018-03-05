module.exports = class List {

    constructor(array = []) {
        this.values = array;
    }

    append(list) {
        if (!list || !list.values) return this;

        for (let i = 0; i < list.values.length; i++) {
            this.values.push(list.values[i]);
        }
        return this;
    }

    concat(list) {
        return this.append(list);
    }

    filter(func) {
        const newArray = [];
        for (let i = 0; i < this.values.length; i++) {
            if (func(this.values[i])) {
                newArray.push(this.values[i]);
            }
        }
        this.values = newArray;
        return this;
    }

    length() {
        let count = 0;
        this.values.forEach(element => { count++ });
        return count;
    }

    map(func) {
        for (let i = 0; i < this.values.length; i++) {
            this.values[i] = func(this.values[i]);
        }
        return this;
    }

    foldl(func, init) {
        let acc = init;
        for (let i = 0; i < this.values.length; i++) {
            acc = func(this.values[i], acc);
        }
        return acc;
    }

    foldr(func, init) {
        let acc = init;
        for (let i = this.values.length - 1; i >= 0; i--) {
            acc = func(this.values[i], acc);
        }
        return acc;
    }

    reverse() {
        const newArray = [];
        let count = this.values.length;
        while (count) {
            newArray.push(this.values[count - 1]);
            count--;
        }
        this.values = newArray;
        return this;
    }
}