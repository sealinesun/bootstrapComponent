import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import Thumbnail from '../src/Thumbnail';

describe('Thumbnail', function () {
  it('Should have a thumbnail class and be an anchor', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Thumbnail href="#" src="#" alt="test" />
    );
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\bthumbnail\b/));
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'a'));
  });

  it('Should have an image', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Thumbnail href="#" src="#" alt="test" />
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'img'));
  });

  it('Should have a thumbnail class and be a div', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Thumbnail src="#" alt="test" />
    );
    assert.ok(ReactDOM.findDOMNode(instance).className.match(/\bthumbnail\b/));
    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'DIV');
  });

    it('Should have an image', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Thumbnail src="#" alt="test" />
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'img'));
  });

    it('Should have an inner div with class caption', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Thumbnail src="#" alt="test">
        Test
        <div>
          Test child element
        </div>
      </Thumbnail>
    );
    assert.ok(ReactDOM.findDOMNode(instance).lastChild.className.match(/\bcaption\b/));
  });
});
