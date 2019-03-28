function createNode(value) {
    return {
        value: value,
        next: null
    };
}

class LinkedList {
    constructor(value) {
        this.head = createNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = createNode(value);
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        return this;
    }

    traverseInReverse() {
        let currentNode = this.head;
        let number = [currentNode.value];
        while (currentNode.next) {
            currentNode = currentNode.next;
            number.unshift(currentNode.value);
        }
        return parseInt(number.join(''));
    }

    printList(){
        let currentNode = this.head;
        let number =  "" + currentNode.value;
        while (currentNode.next) {
            number += ` -> `
            currentNode = currentNode.next;
            number += currentNode.value
        }
        console.log(number)
    }

}

const linkedList1 = new LinkedList(2);
linkedList1.append(4);
linkedList1.append(3);
console.log(linkedList1.traverseInReverse());

const linkedList2 = new LinkedList(5);
linkedList2.append(6);
linkedList2.append(4);

addTwoNumbers(linkedList1, linkedList2)

function addTwoNumbers(l1, l2) {
    let numbers = l1.traverseInReverse() + l2.traverseInReverse();
    numbers = numbers.toString().split('');
    let newlist = new LinkedList(numbers[numbers.length - 1]);
    for (let i = numbers.length -2; i >= 0; i--) {
        newlist.append(numbers[i]);
    }
    newlist.printList()
}