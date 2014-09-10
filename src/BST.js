'use strict';


function Node() {

  this.item = undefined;
  this.left = undefined;
  this.right = undefined;
  this.parent = undefined;
}

Node.prototype.hasLeft = function() {
  return this.left !== undefined && this.left.item !== undefined;
};

Node.prototype.hasRight = function() {
  return this.right !== undefined && this.right.item !== undefined;
};

function BST() {
  this.root = new Node();
}

var proto = BST.prototype;

proto.insert = function(item) {

  insert(this.root, null, item);

  function insert(node, parent, item) {
    if(node.item === undefined) {
      node.item = item;
      node.parent = parent;
      node.left = new Node();
      node.right = new Node();
    }
    else if(item >= node.item) {
      insert(node.right, node, item);
    }
    else {
      insert(node.left, node, item);
    }
  }
};

proto.find = function(item) {

  return find(this.root, item);

  function find(node, item) {

    if(node.item === undefined) {
      return null;
    }
    else if(node.item === item) {
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

proto.delete = function(item) {

  var node = this.find(item);
  var succ;

  // not in tree

  if(node === null) {
    return;
  }

  if(node === this.root) {

    if(!node.hasLeft() && !node.hasRight()) {
      this.root = new Node();
    }
    else if(!node.hasLeft() && node.hasRight()) {
      this.root = node.right;
      this.root.parent = undefined;
    }
    else if(node.hasLeft() && !node.hasRight()) {
      this.root = node.right;
      this.root.parent = undefined;
    }
    else {
      succ = successor(node);

      succ.parent.right === succ ? succ.parent.right = new Node()
                                 : succ.parent.left = new Node();
      this.root = succ;
      succ.parent = undefined;
    }
  }
  else {

    if(!node.hasLeft() && !node.hasRight()) {
      node.parent.right === node ? node.parent.right = new Node()
                                 : node.parent.left = new Node();
    }
    else if(!node.hasLeft() && node.hasRight()) {
      node.right.parent = node.parent;
      node.parent.right === node ? node.parent.right = node.right
                                 : node.parent.left = node.right;
    }
    else if(node.hasLeft() && !node.hasRight()) {
      node.left.parent = node.parent;
      node.parent.right === node ? node.parent.right = node.left
                                 : node.parent.left = node.left;
    }
    else {
      succ = successor(node);

      node.parent.right === node ? node.parent.right = succ
                                 : node.parent.left = succ;
      succ.parent.right === succ ? succ.parent.right = new Node()
                                 : succ.parent.left = new Node();
      succ.parent = node.parent;
      succ.left = node.left;
      succ.right = node.right;
    }
  }
  
  return node;

  function successor(node) {

    var n = node.right;
    while(n.left !== undefined && n.left.item !== undefined) {
      n = n.left;
    }
    return n;
  }


};

module.exports = BST;
