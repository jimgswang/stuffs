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

  return find(this.root, item);

  function find(node, item) {

    if(node.item === item) {
      return node;
    }
    else if(item > node.item) {
      
      return find(node.right, item);
    }
    else {
      return find(node.left, item);
    }
  }
};

proto.traverse = function(fn) {

  var results = [];
  fn(this.root, results);
  return results;
};

proto.inorder = function() {

  function inorder(node, mem) {
    if(node.item !== undefined) {
      inorder(node.left, mem);
      mem.push(node.item);
      inorder(node.right, mem);
    }
  }

  return this.traverse(inorder);
};


proto.preorder = function() {

  function preorder(node, mem) {
    if(node.item !== undefined) {
      mem.push(node.item);
      preorder(node.left, mem);
      preorder(node.right, mem);
    }
  }

  return this.traverse(preorder);
};

proto.postorder = function() {

  function postorder(node, mem) {
    if(node.item !== undefined) {
      postorder(node.left, mem);
      postorder(node.right, mem);
      mem.push(node.item);
    }
  }

  return this.traverse(postorder);
};

module.exports = BST;
