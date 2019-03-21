class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            return this.root = newNode;
        } else {
            let currentNode = this.root;
            // go left
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        return currentNode.left = newNode;
                    }
                    currentNode = currentNode.left;

                } else {
                    if (!currentNode.right) {
                        return currentNode.right = newNode;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return null;
        } else {
            let currentNode = this.root;
            while (currentNode) {
                if (value < currentNode.value) {
                    currentNode = currentNode.left;
                }
                if (value > currentNode.value) {
                    currentNode = currentNode.right;
                }
                if (value === currentNode.value) {
                    return true
                }
                if (!currentNode.left && !currentNode.right) {
                    return false
                }
            }
        }
    }

    // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(20));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}





