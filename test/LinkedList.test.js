'use strict';

var LinkedList = require('../src/LinkedList'),
    expect = require('chai').expect;

describe('LinkedList', function() {

  var list;

  beforeEach(function() {
    list = new LinkedList();
  });

  describe('insert', function() {

    it('inserts correctly into empty list', function() {

      list.insert('foo');
      expect(list.head.item).to.equal('foo');
    });
  });

  describe('find', function() {

    beforeEach(function() {
      list.insert('foo');
      list.insert('bar');
      list.insert('baz');
      list.insert('qux');
    });
    it('can find head', function() {
      var node = list.find('qux');
      expect(node.item).to.equal('qux');
    });

    it('can find tail', function() {

      var node = list.find('foo');
      expect(node.item).to.equal('foo');

    });

    it('can find middle', function() {
      var node = list.find('baz');
      expect(node.item).to.equal('baz');
    });
  });

  describe('delete', function() {

    beforeEach(function() {
      list.insert('foo');
      list.insert('bar');
      list.insert('baz');
      list.insert('qux');
    });

    it('can delete head', function() {
      var node = list.delete('qux');
      expect(node.item).to.equal('qux');

      node = list.find('qux');
      expect(node).to.equal(null);
    });

    it('can delete tail', function() {
      var node = list.delete('foo');
      expect(node.item).to.equal('foo');

      node = list.find('foo');
      expect(node).to.equal(null);
    });

    it('can delete middle', function() {
      var node = list.delete('bar');
      expect(node.item).to.equal('bar');

      node = list.find('bar');
      expect(node).to.equal(null);
    });

    it('doesnt disrupt other inserted items', function() {
      list.delete('bar');
      list.delete('qux');

      var node = list.find('foo');
      expect(node.item).to.equal('foo');

      node = list.find('baz');
      expect(node.item).to.equal('baz');
    });
  });
});
