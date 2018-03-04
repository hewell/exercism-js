class Triangle {
    constructor(size) {
        this.size = size;
        this.rows = this.buildTriangle(size);
        this.lastRow = this.rows[this.rows.length - 1];
    }

    buildTriangle(size, arr) {
        if (!arr) arr = [[1]];
        if (size < 2) {
            return arr;
        }
        const prevRow = arr[arr.length - 1];
        // new row
        const currRow = [1];
        prevRow.forEach((item, index) => {
            if (index === 0) return;
            currRow.push(prevRow[index] + prevRow[index - 1]);
        });
        // complete the new row with a trailing '1'
        currRow.push(1);
        arr.push(currRow);
        return this.buildTriangle(size - 1, arr);
    }
}
module.exports = Triangle;