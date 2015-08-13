import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import Row from '../src/Row';

describe('Row', function () {
  it('uses "div" by default', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Row />
    );

    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'DIV');
  });

  it('has "row" class', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Row>Row content</Row>
    );
    assert.equal(ReactDOM.findDOMNode(instance).className, 'row');
  });

  it('Should merge additional classes passed in', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Row className="bob"/>
    );
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\bbob\b/));
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\brow\b/));
  });

  it('allows custom elements instead of "div"', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Row componentClass='section' />
    );

    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'SECTION');
  });
});
