class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    root() {
        return this.rootNode;
    }

    add(data) {
        const newNode = new Node(data);

        if (!this.rootNode) {
            this.rootNode = newNode;
            return;
        }

        let currentNode = this.rootNode;

        while (true) {
            if (data < currentNode.data) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else if (data > currentNode.data) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            } else {
                // Data already exists, no duplicates
                return;
            }
        }
    }

    has(data) {
        return !!this.find(data);
    }

    find(data) {
        let currentNode = this.rootNode;

        while (currentNode) {
            if (data === currentNode.data) {
                return currentNode;
            } else if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return null;
    }

    remove(data) {
        const removeNode = (node, data) => {
            if (!node) return null;

            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (data > node.data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                // Node to remove found
                if (!node.left && !node.right) {
                    return null; // No children
                }
                if (!node.left) {
                    return node.right; // One child (right)
                }
                if (!node.right) {
                    return node.left; // One child (left)
                }

                // Two children
                let minRight = node.right;
                while (minRight.left) {
                    minRight = minRight.left;
                }
                node.data = minRight.data;
                node.right = removeNode(node.right, minRight.data);
                return node;
            }
        };

        this.rootNode = removeNode(this.rootNode, data);
    }

    min() {
        if (!this.rootNode) return null;

        let currentNode = this.rootNode;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.data;
    }

    max() {
        if (!this.rootNode) return null;

        let currentNode = this.rootNode;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode.data;
    }
}

module.exports = {
    BinarySearchTree,
};