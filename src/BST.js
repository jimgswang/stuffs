'use strict';


function Node() {

  this.item = undefined;
  this.left = undefined;
  this.right = undefined;
}


function BST() {
  this.root = new Node();
}

var proto = BST.prototype;

proto.insert = function(item) {

  insert(this.root, item);

  function insert(node, item) {
    if(node.item === undefined) {
      node.item = item;
      node.left = new Node();
      node.right = new Node();
    }
    else if(item >= node.item) {
      insert(node.right, item);
    }
    else {
      insert(node.left, item);
    }
  }
};

proto.find = function(item) {



};

module.exports = BST;
