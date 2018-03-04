class School {
    constructor() {
        this.students = {};
    };

    add(name, grade) {
        if (!this.students[grade]) {
            this.students[grade] = [name];
        } else {
            this.students[grade].push(name);
            this.students[grade].sort();
        }
    };

    roster() {
        return this.students;
    };

    grade(num) {
        if (!this.students[num]) {
            return [];
        }
        return this.students[num];
    };
}

module.exports = School;