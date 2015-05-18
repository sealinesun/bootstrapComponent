import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import Thumbnail from '../src/Thumbnail';

describe('Thumbnail', function () {
  it('Should have a thumbnail class and be an anchor', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <Thumbnail href="#" src="#" alt="test" />
    );
    assert.ok(instance.getDOMNode().className.match(/\bthumbnail\b/));
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
    assert.ok(instance.getDOMNode().className.match(/\bthumbnail\b/));
    assert.equal(instance.getDOMNode().nodeName, 'DIV');
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
    assert.ok(instance.getDOMNode().lastChild.className.match(/\bcaption\b/));
  });
});
