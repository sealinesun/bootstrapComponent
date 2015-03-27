import React from 'react';
import Router, { Link } from 'react-router';
import Navbar from '../../src/Navbar';
import Nav from '../../src/Nav';

const NAV_LINKS = {
  'getting-started': {
    link: 'getting-started',
    title: 'Getting started'
  },
  'components': {
    link: 'components',
    title: 'Components'
  }
};

const NavMain = React.createClass({
  propTypes: {
    activePage: React.PropTypes.string
  },

  render() {
    let brand = <Link to='home' className="navbar-brand">React Bootstrap</Link>;
    let links = Object.keys(NAV_LINKS).map(this.renderNavItem).concat([
      <li key='github-link'>
        <a href='https://github.com/react-bootstrap/react-bootstrap' target='_blank'>GitHub</a>
      </li>
    ]);

    return (
      <Navbar componentClass='header' brand={brand} staticTop className="bs-docs-nav" role="banner" toggleNavKey={0}>
        <Nav className="bs-navbar-collapse" role="navigation" eventKey={0} id="top">
          {links}
        </Nav>
      </Navbar>
    );
  },

  renderNavItem(linkName) {
    let link = NAV_LINKS[linkName];

    return (
        <li className={this.props.activePage === linkName ? 'active' : null} key={linkName}>
          <Link to={link.link}>{link.title}</Link>
        </li>
      );
  }
});

export default NavMain;
