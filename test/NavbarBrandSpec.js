import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import NavbarBrand from '../src/NavbarBrand';

describe('<Navbar.Brand>', () => {

  it('Should create NavbarBrand SPAN element', () => {
    const instance = ReactTestUtils.renderIntoDocument(
      <NavbarBrand>Brand</NavbarBrand>
    );

    const brand = ReactDOM.findDOMNode(instance);

    assert.equal(brand.nodeName, 'SPAN');
    assert.ok(brand.className.match(/\bnavbar-brand\b/));
    assert.equal(brand.textContent, 'Brand');
  });

  it('Should create NavbarBrand A (link) element', () => {
    const instance = ReactTestUtils.renderIntoDocument(
      <NavbarBrand><a href>BrandLink</a></NavbarBrand>
    );

    const brand = ReactDOM.findDOMNode(instance);

    assert.equal(brand.nodeName, 'A');
    assert.ok(brand.className.match(/\bnavbar-brand\b/));
    assert.equal(brand.textContent, 'BrandLink');
  });

});
