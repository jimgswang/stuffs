'use strict';

var BST = require('../src/BST'),
    expect = require('chai').expect;

describe.only('Binary Search Tree', function() {

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
});
