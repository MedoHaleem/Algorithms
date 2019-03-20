//Linked List way 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) return null;
        if (this.top === this.bottom) this.bottom = null;
        const poped = this.top;
        this.top = this.top.next;
        this.length--;
        return poped;
    }
}

let st = new Stack();
st.push(1);
st.push(3);
st.push(5);
st.pop();
st.pop();
st.pop();
console.log(st);
