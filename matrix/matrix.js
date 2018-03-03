class Matrix {
    constructor(input) {
        this.rows = [];
        this.columns = [];
        let s = input.split('\n');
        // array of rows
        s.map(row => {
            let r = row.split(' ').map(Number);
            this.rows.push(r);
        });
        // array of columns
        this.rows.map(row => {
            row.forEach((e, i) => {
                if (!this.columns[i]) {
                    this.columns.push([]);
                }
                this.columns[i].push(e);
            });
        });
    }
}

module.exports = Matrix;