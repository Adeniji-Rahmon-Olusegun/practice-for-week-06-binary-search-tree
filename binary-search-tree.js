// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    let newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    
    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = newNode
      } else {
        return this.insert(val, currentNode=currentNode.right);
      }
    } else if(val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        return this.insert(val, currentNode=currentNode.left);
      }
    }
  }

  search(val, currentNode=this.root) {
    // Your code here
    if (currentNode === null) return false;

    if (val === currentNode.val) return true;

    if (val > currentNode.val) {
      return this.search(val, currentNode.right);
    }

    if (val < currentNode.val) {
      return this.search(val, currentNode.left);
    }
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) return;
    
    console.log(currentNode.val); //6, 4, 2

    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) return;

    this.inOrderTraversal(currentNode.left);

    console.log(currentNode.val);

    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);

    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    let queue = [];

    queue.push(this.root);

    while (queue.length > 0) {

      let node = queue.shift();
      console.log(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    let stack = [];

    stack.push(this.root);

    while (stack.length > 0) {
      
      let node = stack.pop();

      console.log(node.val);

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
      
      
    }

  }

  static sort(arr) {
    let flag = false;

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          flag = true
        }
      }

      if (!flag) break;
    }

    return arr;
  }
}


let bst = new BinarySearchTree();

bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(3);
bst.insert(1);
bst.insert(5);
bst.insert(7);
// //bst.insert(12);



bst.breadthFirstTraversal();
// console.log("===============");

//bst.inOrderTraversal();




module.exports = { BinarySearchTree, TreeNode };