'use strict';


function Node() {
  var item,
      next;
}

function LinkedList() {
}

LinkedList.prototype.insert = function(item) {

  var node = new Node();
  node.item = item;

  if(this.head) {
    node.next = this.head;
  }

  this.head = node;
};

LinkedList.prototype.find = function(item) {

  var node = this.head;

  while(node !== undefined) {

    if(node.item === item) {
      return node;
    }

    node = node.next;
  }

  return null;
};


LinkedList.prototype.delete = function(item) {

  var prev = this.head,
      node = this.head.next,
      x;

  if(this.head.item === item) {
    x = this.head;
    this.head = this.head.next;
    return x;
  }

  while(node.item !== undefined) {

    if(node.item === item) {
      prev.next = node.next;
      return node;
    }

    prev = node;
    node = node.next;
  }

  return null;
};

module.exports = LinkedList;
