import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ListGroup from '../src/ListGroup';
import ListGroupItem from '../src/ListGroupItem';

describe('ListGroup', function () {

  // TODO: Why div, shouldn't it be a ul?
  it('Should output a "div" with the class "list-group"', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <ListGroup />
    );
    assert.equal(React.findDOMNode(instance).nodeName, 'DIV');
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'list-group'));
  });

  it('Should support "ListGroupItem" children', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <ListGroup>
        <ListGroupItem>1st Child</ListGroupItem>
        <ListGroupItem>2nd Child</ListGroupItem>
      </ListGroup>
    );

    let items = ReactTestUtils.scryRenderedComponentsWithType(instance, ListGroupItem);

    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(items[0], 'list-group-item'));
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(items[1], 'list-group-item'));
  });

});
