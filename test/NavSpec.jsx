/** @jsx React.DOM */
/*global describe, beforeEach, afterEach, it, assert */

var React          = require('react');
var ReactTestUtils = require('react/lib/ReactTestUtils');
var Nav            = require('../react-bootstrap-npm/Nav');
var NavItem        = require('../react-bootstrap-npm/NavItem');

describe('Nav', function () {
  it('Should set the correct item active', function () {
    var instance = (
        <Nav bsStyle="pills" activeKey={1}>
          <NavItem key={1} ref="item1">Pill 1 content</NavItem>
          <NavItem key={2} ref="item2">Pill 2 content</NavItem>
        </Nav>
      );

    ReactTestUtils.renderIntoDocument(instance);
    assert.ok(instance.refs.item1.props.isActive);
    assert.notOk(instance.refs.item2.props.isActive);
  });

  it('Should adds style class', function () {
    var instance = (
        <Nav bsStyle="tabs" activeKey={1}>
          <NavItem key={1} ref="item1">Tab 1 content</NavItem>
          <NavItem key={2} ref="item2">Tab 2 content</NavItem>
        </Nav>
      );

    ReactTestUtils.renderIntoDocument(instance);
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'nav'));
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'nav-tabs'));
  });

  it('Should adds variation class', function () {
    var instance = (
        <Nav bsStyle="tabs" bsVariation="stacked" activeKey={1}>
          <NavItem key={1} ref="item1">Tab 1 content</NavItem>
          <NavItem key={2} ref="item2">Tab 2 content</NavItem>
        </Nav>
      );

    ReactTestUtils.renderIntoDocument(instance);
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'nav-stacked'));
  });

  it('Should call on select when item is selected', function (done) {
    function handleSelect(key) {
      assert.equal(key, 2);
      done();
    }
    var instance = (
      <Nav bsStyle="tabs" activeKey={1} onSelect={handleSelect}>
        <NavItem key={1} ref="item1">Tab 1 content</NavItem>
        <NavItem key={2} ref="item2"><span>Tab 2 content</span></NavItem>
      </Nav>
      );

    ReactTestUtils.renderIntoDocument(instance);
    ReactTestUtils.Simulate.click(instance.refs.item2.refs.anchor);
  });
});
