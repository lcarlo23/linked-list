import { Node } from './NodeClass.js';

export class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (this.head === null) {
            this.prepend(value);
        } else {
            let newNode = new Node(value);
            let currentNode = this.head;
            while (currentNode.nextNode != null) {
                currentNode = currentNode.nextNode;
            }

            currentNode.nextNode = newNode;
        }
    }

    prepend(value) {
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    size() {
        if (this.head != null) {
            let total = 1;

            let currentNode = this.head;

            while (currentNode.nextNode != null) {
                currentNode = currentNode.nextNode;
                total++;
            }

            return total;
        } else {
            return null;
        }
    }

    head() {
        return this.head;
    }

    tail() {
        if (this.head != null) {
            let currentNode = this.head;

            while (currentNode.nextNode != null) {
                currentNode = currentNode.nextNode;
            }

            return currentNode;
        } else {
            return null;
        }
    }

    at(index) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        let newTail = this.at(this.size() - 2);
        newTail.nextNode = null;
        return this.tail();
    }

    contains(value) {
        if (this.head != null) {
            let currentNode = this.head;

            while (currentNode.value != value && currentNode.nextNode != null) {
                currentNode = currentNode.nextNode;
            }

            return currentNode.value === value;
        }
    }

    find(value) {
        if (this.contains(value)) {
            let index = 0;

            let currentNode = this.head;

            while (currentNode.value != value) {
                currentNode = currentNode.nextNode;
                index++;
            }

            return index;
        } else {
            return null;
        }
    }

    toString() {
        if (this.head != null) {
            let listString = '';

            let currentNode = this.head;

            for (let i = 0; i < this.size(); i++) {
                listString += `(${currentNode.value}) -> `;
                if (currentNode.nextNode != null) {
                    currentNode = currentNode.nextNode;
                } else {
                    listString += `null`;
                }
            }

            return listString;
        }
    }
}
