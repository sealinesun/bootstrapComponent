import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import Table from '../src/Table';

describe('Table', function () {
  it('Should be a table', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Table />
    );
    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'TABLE');
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\btable\b/));
  });

  it('Should have correct class when striped', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Table striped />
    );
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\btable-striped\b/));
  });

  it('Should have correct class when hover', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Table hover />
    );
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\btable-hover\b/));
  });

  it('Should have correct class when bordered', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Table bordered />
    );
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\btable-bordered\b/));
  });

  it('Should have correct class when condensed', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Table condensed />
    );
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\btable-condensed\b/));
  });

  it('Should have responsive wrapper', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Table responsive />
    );
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\btable-responsive\b/));
    assert.ok(ReactDOM.findDOMNode(instance).firstChild.className.match(/\btable\b/));
  });
});
