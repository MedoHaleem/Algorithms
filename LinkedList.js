class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    delete(index) {
        const leader = this.traverseToIndex(index - 1);
        const toBeDeleted = leader.next;
        leader.next = toBeDeleted.next;
        leader.prev = toBeDeleted.prev;
        this.length--;
        return this;

    }

    reverse() {
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const thirdTemp = second.next;
            second.next = first;
            first = second;
            second = thirdTemp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.prepend(1);
myLinkedList.prepend(5);
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());
console.log(myLinkedList.printList());
