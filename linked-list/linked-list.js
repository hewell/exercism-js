class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(data) {
        let node = new Node(data);
        // empty list
        if (this.length == 0) {
            this.head = node;
            this.tail = node;
        } else {
            // add to the end
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    pop() {
        let node = this.tail;
        if (!this.tail.prev) {
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
        }
        this.length--;
        return node.data;
    }

    count() {
        return this.length;
    }

    shift() {
        let node = this.head;
        if (!this.head.next) {
            this.head = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return node.data;
    }

    unshift(data) {
        let node = new Node(data);
        // empty list
        if (this.length == 0) {
            this.head = node;
            this.tail = node;
        } else {
            // add to the front
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    delete(data) {
        let node = this.findLast(data, this.tail);
        // found
        if (node) {
            // only one node
            if (this.length == 1) {
                this.head = null;
                this.tail = null;
            } else {
                node.prev.next = node.next;
                node.next.prev = node.prev;
            }
            this.length--;
        }
    }

    findLast(value, node) {
        if (!node) {
            return null;
        }
        if (node.data === value) {
            return node;
        }
        return this.findLast(value, node.prev);
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

module.exports = LinkedList;