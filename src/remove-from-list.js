const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

function removeKFromList(l, k) {
    while (l && l.value === k) {
        l = l.next;
    }

    let current = l;
    while (current && current.next) {
        if (current.next.value === k) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return l;
}

module.exports = {
    removeKFromList
};