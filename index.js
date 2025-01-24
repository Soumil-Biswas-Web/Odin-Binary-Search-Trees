// Node class for each node of bst
class Node {
    constructor() {
        this.value = null; 
        this.right = null;
        this.left = null;        
    }    
}

// Binary Search Tree class
class Tree {
    constructor() {
        this.headNode = null;
        this.currentNode = null;    
    }

    // Find the next smallest value in the right subtree of a node, when the node has child nodes on both sides. Used in node deletion
    getNext = (currentNode) => {
        currentNode = currentNode.right;
        while (currentNode !== null && currentNode.left !== null) currentNode = currentNode.left;
        return currentNode;
    }
    
    // Insert a value into the BST
    insert = (value, currentNode = this.headNode) => {
        let newNode = new Node();
        newNode.value = value;
    
        // If the tree is empty, set the headNode to the new node
        if (!this.headNode) {
            this.headNode = newNode;
            return;
        }
    
        // Traverse the tree to find the correct position for the new node
        if (value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                this.insert(value, currentNode.left); // Recur on the left subtree
            }
        } else if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this.insert(value, currentNode.right); // Recur on the right subtree
            }
    };

    // Delete a value from the BST
    delete = (value, currentNode = this.headNode) => {
        if (this.headNode === null) return "Error. Empty Tree.";  // When BST is empty

        if (currentNode === null) return root; // Base case, found a node with no children

        // Finding correct value within the BST
        if(currentNode.value > value) currentNode.left = this.delete(value, currentNode.left); //Check out left node
        else if(currentNode.value < value) currentNode.right = this.delete(value, currentNode.right);  //Cheack out right node
        else {
            // If currentNode.value == value

            // Check if only right child
            if (currentNode.left === null) return currentNode.right; // Return right node for processing

            // Check if only left child
            if (currentNode.right === null) return currentNode.left; // Return left node for processing

            // If node has both children (Haiyaaaaaa...)
            let next = this.getNext(currentNode);

            currentNode.value = next.value // Exchanging Value to be deleted with successor value. Original value is now lost
            currentNode.right = this.delete(next.key, currentNode.right);
        }
        return currentNode;
    }

    root = () => {
        return this.headNode;
    }
}

// To print binary search tree after it is complete
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

// Build BST out of a given array, using the Tree class and it's methods
const tree = new Tree();
const buildTree = (array) => {
    array = new Set(array);     // To remove duplicates

    for (let item of array) {
        tree.insert(item);
    }

    return tree.root();
}

// Driver Code

// Sample input array
let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let root = buildTree(array);

console.log(root);

console.log( "Root node of tree from " + array + " is " , root.value);

prettyPrint(root);

let node2BDel = 23;

console.log( "Deleting node " + node2BDel + ": ")

tree.delete(23);

prettyPrint(root);