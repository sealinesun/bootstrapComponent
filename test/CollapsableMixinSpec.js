import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import CollapsableMixin from '../src/CollapsableMixin';
import classSet from 'classnames';

describe('CollapsableMixin', function () {

  let Component, instance;

  beforeEach(function(){
    Component = React.createClass({
      mixins: [CollapsableMixin],

      getCollapsableDOMNode: function(){
        return this.refs.panel.getDOMNode();
      },

      getCollapsableDimensionValue: function(){
        return 15;
      },

      render: function(){
        let styles = this.getCollapsableClassSet();
        return (
          <div>
            <div ref="panel" className={classSet(styles)}>
              {this.props.children}
            </div>
          </div>
        );
      }
    });
  });

  describe('getInitialState', function(){
    it('Should check defaultExpanded', function () {
      instance = ReactTestUtils.renderIntoDocument(
        <Component defaultExpanded>Panel content</Component>
      );
      let state = instance.getInitialState();
      assert.ok(state.expanded === true);
    });

    it('Should default collapsing to false', function () {
      instance = ReactTestUtils.renderIntoDocument(
        <Component>Panel content</Component>
      );
      let state = instance.getInitialState();
      assert.ok(state.collapsing === false);
    });
  });

  describe('collapsed', function(){
    it('Should have collapse class', function () {
      instance = ReactTestUtils.renderIntoDocument(
        <Component>Panel content</Component>
      );
      assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'collapse'));
    });
  });

  describe('from collapsed to expanded', function(){
    beforeEach(function(){
      instance = ReactTestUtils.renderIntoDocument(
        <Component>Panel content</Component>
      );
    });

    it('Should have collapsing class', function () {
      instance.setProps({expanded:true});
      let node = instance.getCollapsableDOMNode();
      assert.equal(node.className, 'collapsing');
    });

    it('Should set initial 0px height', function () {
      let node = instance.getCollapsableDOMNode();
      assert.equal(node.style.height, '');

      instance._afterWillUpdate = function(){
        assert.equal(node.style.height, '0px');
      };

      instance.setProps({expanded:true});
    });

    it('Should set transition to height', function () {
      let node = instance.getCollapsableDOMNode();
      assert.equal(node.styled, undefined);

      instance.setProps({expanded:true});
      assert.equal(node.style.height, '15px');
    });

    it('Should transition from collapsing to not collapsing', function (done) {
      instance._addEndEventListener = function(node, complete){
        setTimeout(function(){
          complete();
          assert.ok(!instance.state.collapsing);
          done();
        }, 100);
      };
      instance.setProps({expanded:true});
      assert.ok(instance.state.collapsing);
    });

    it('Should clear height after transition complete', function (done) {
      let node = instance.getCollapsableDOMNode();

      instance._addEndEventListener = function(nodeInner, complete){
        setTimeout(function(){
          complete();
          assert.equal(nodeInner.style.height, '');
          done();
        }, 100);
      };

      assert.equal(node.style.height, '');
      instance.setProps({expanded:true});
      assert.equal(node.style.height, '15px');
    });
  });

  describe('from expanded to collapsed', function(){
    beforeEach(function(){
      instance = ReactTestUtils.renderIntoDocument(
        <Component defaultExpanded>Panel content</Component>
      );
    });

    it('Should have collapsing class', function () {
      instance.setProps({expanded:false});
      let node = instance.getCollapsableDOMNode();
      assert.equal(node.className, 'collapsing');
    });

    it('Should set initial height', function () {
      let node = instance.getCollapsableDOMNode();

      instance._afterWillUpdate = function(){
        assert.equal(node.style.height, '15px');
      };

      assert.equal(node.style.height, '');
      instance.setProps({expanded:false});
    });

    it('Should set transition to height', function () {
      let node = instance.getCollapsableDOMNode();
      assert.equal(node.style.height, '');

      instance.setProps({expanded:false});
      assert.equal(node.style.height, '0px');
    });

    it('Should transition from collapsing to not collapsing', function (done) {
      instance._addEndEventListener = function(node, complete){
        setTimeout(function(){
          complete();
          assert.ok(!instance.state.collapsing);
          done();
        }, 100);
      };
      instance.setProps({expanded:false});
      assert.ok(instance.state.collapsing);
    });

    it('Should have 0px height after transition complete', function (done) {
      let node = instance.getCollapsableDOMNode();

      instance._addEndEventListener = function(nodeInner, complete){
        setTimeout(function(){
          complete();
          assert.ok(nodeInner.style.height === '0px');
          done();
        }, 100);
      };

      assert.equal(node.style.height, '');
      instance.setProps({expanded:false});
      assert.equal(node.style.height, '0px');
    });
  });

  describe('expanded', function(){
    it('Should have collapse and in class', function () {
      instance = ReactTestUtils.renderIntoDocument(
        <Component expanded={true}>Panel content</Component>
      );
      assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'collapse in'));
    });

    it('Should have collapse and in class with defaultExpanded', function () {
      instance = ReactTestUtils.renderIntoDocument(
        <Component defaultExpanded>Panel content</Component>
      );
      assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'collapse in'));
    });
  });

  describe('dimension', function(){
    beforeEach(function(){
      instance = ReactTestUtils.renderIntoDocument(
        <Component>Panel content</Component>
      );
    });

    it('Defaults to height', function(){
      assert.equal(instance.dimension(), 'height');
    });

    it('Uses getCollapsableDimension if exists', function(){
      instance.getCollapsableDimension = function(){
        return 'whatevs';
      };
      assert.equal(instance.dimension(), 'whatevs');
    });
  });
});
