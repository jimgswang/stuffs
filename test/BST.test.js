'use strict';

var BST = require('../src/BST'),
    expect = require('chai').expect;

describe('Binary Search Tree', function() {

  var tree;

  beforeEach(function() {
    tree = new BST();
  });

  describe('insert', function() {

    it('can insert into empty tree', function() {

      tree.insert(5);
      expect(tree.root.item).to.equal(5);

    });

    it('can insert to left subtree', function() {

      tree.insert(100);
      tree.insert(70);
      tree.insert(80);
      tree.insert(30);

      var leaf = tree.root.left.left;
      expect(leaf.item).to.equal(30);
    });

    it('can insert to right subtree', function() {

      tree.insert(10);
      tree.insert(70);
      tree.insert(30);
      tree.insert(80);

      var leaf = tree.root.right.right;
      expect(leaf.item).to.equal(80);
    });
  });

  describe('find', function() {

    it('finds inserted item', function() {

      tree.insert(10);
      tree.insert(70);
      tree.insert(30);
      tree.insert(80);
      tree.insert(23);
      tree.insert(11);

      var node = tree.find(23);
      expect(node.item).to.equal(23);
    });

    it('returns null for item not in tree', function() {
      tree.insert(10);
      tree.insert(70);
      tree.insert(30);

      var node = tree.find(15);
      expect(node).to.equal(null);

    });
  });

  describe('traversal', function() {

    beforeEach(function() {

      tree.insert(20);
      tree.insert(70);
      tree.insert(30);
      tree.insert(80);
      tree.insert(23);
      tree.insert(11);
    });


    it('traverses inorder', function() {
      var result = tree.inorder();
      expect(result).to.deep.equal([11, 20, 23, 30, 70, 80]);
    });
    
    it('traverses preorder', function() {
      var result = tree.preorder();
      expect(result).to.deep.equal([20, 11, 70, 30, 23, 80]);
    });

    it('traverses postorder', function() {
      var result = tree.postorder();
      expect(result).to.deep.equal([11, 23, 30, 80, 70, 20]);

    });
  });
  describe('delete', function() {

    beforeEach(function() {

      tree.insert(20);
      tree.insert(70);
      tree.insert(30);
      tree.insert(80);
      tree.insert(23);
      tree.insert(11);
    });


    it('can delete root', function() {

      var node = tree.delete(20);
      expect(node.item).to.equal(20);
      expect(tree.root.item).to.equal(23);

    });

    it('can delete leaf', function() {

      var node = tree.delete(23);

      expect(node.item).to.equal(23);
      expect(tree.inorder()).to.deep.equal([11, 20, 30, 70, 80]);
    });

    it('can delete multiple nodes', function() {

      tree.delete(70);
      tree.delete(30);

      expect(tree.inorder()).to.deep.equal([11, 20, 23, 30, 80]);

    });

  });
});
