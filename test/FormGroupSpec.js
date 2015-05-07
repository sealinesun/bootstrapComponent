import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import FormGroup from '../src/FormGroup';
import {shouldWarn} from './helpers';

describe('FormGroup', function() {
  it('renders children', function() {
    let instance = ReactTestUtils.renderIntoDocument(
      <FormGroup>
        <span className='child1' />
        <span className='child2' />
      </FormGroup>
    );

    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'child1'));
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'child2'));
  });

  it('renders with form-group class', function() {
    let instance = ReactTestUtils.renderIntoDocument(
      <FormGroup>
        <span />
      </FormGroup>
    );

    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'form-group'));
  });

  it('renders form-group with sm or lg class when bsSize is small or large', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <FormGroup bsSize="small">
        <span />
      </FormGroup>
    );

    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'form-group'));
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'form-group-sm'));

    instance = ReactTestUtils.renderIntoDocument(
      <FormGroup bsSize="large">
        <span />
      </FormGroup>
    );

    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'form-group'));
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'form-group-lg'));
  });

  it('throws warning about bsSize when standalone', function () {
    ReactTestUtils.renderIntoDocument(
      <FormGroup standalone bsSize="large" />
    );

    shouldWarn('Failed propType: bsSize');
  });

  it('renders no form-group class when standalone', function() {
    let instance = ReactTestUtils.renderIntoDocument(
      <FormGroup standalone>
        <span />
      </FormGroup>
    );

    assert.equal(ReactTestUtils.scryRenderedDOMComponentsWithClass(instance, 'form-group').length, 0);
  });

  it('renders no form-group-* class when standalone', function () {
    let instance = ReactTestUtils.renderIntoDocument(
      <FormGroup standalone bsSize="large" />
    );

    assert.equal(ReactTestUtils.scryRenderedDOMComponentsWithClass(instance, 'form-group').length, 0);
    assert.equal(ReactTestUtils.scryRenderedDOMComponentsWithClass(instance, 'form-group-lg').length, 0);
  });

  [{
    className: 'has-feedback',
    props: { hasFeedback: true }
  }, {
    className: 'has-success',
    props: { bsStyle: 'success' }
  }, {
    className: 'has-warning',
    props: { bsStyle: 'warning' }
  }, {
    className: 'has-error',
    props: { bsStyle: 'error' }
  }, {
    className: 'custom-group',
    props: { groupClassName: 'custom-group' }
  }
  ].forEach(function(testCase) {
    it(`does not render ${testCase.className} class`, function() {
      let instance = ReactTestUtils.renderIntoDocument(
        <FormGroup>
          <span />
        </FormGroup>
      );

      assert.equal(ReactTestUtils.scryRenderedDOMComponentsWithClass(instance, testCase.className).length, 0);
    });

    it(`renders with ${testCase.className} class`, function() {
      let instance = ReactTestUtils.renderIntoDocument(
        <FormGroup {...testCase.props}>
          <span />
        </FormGroup>
      );

      assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, testCase.className));
    });
  });
});
