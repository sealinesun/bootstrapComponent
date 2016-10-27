// TODO: Remove this pragma once we upgrade eslint-config-airbnb.
/* eslint-disable react/no-multi-comp */

import classNames from 'classnames';
import React, { PropTypes } from 'react';
import elementType from 'react-prop-types/lib/elementType';
import uncontrollable from 'uncontrollable';

import Grid from './Grid';
import NavbarBrand from './NavbarBrand';
import NavbarCollapse from './NavbarCollapse';
import NavbarHeader from './NavbarHeader';
import NavbarToggle from './NavbarToggle';
import {
  bsClass as setBsClass,
  bsStyles,
  getClassSet,
  prefix,
  splitBsPropsAndOmit,
} from './utils/bootstrapUtils';
import { Style } from './utils/StyleConfig';
import createChainedFunction from './utils/createChainedFunction';

const propTypes = {
  /**
   * Create a fixed navbar along the top of the screen, that scrolls with the
   * page
   */
  fixedTop: React.PropTypes.bool,
  /**
   * Create a fixed navbar along the bottom of the screen, that scrolls with
   * the page
   */
  fixedBottom: React.PropTypes.bool,
  /**
   * Create a full-width navbar that scrolls away with the page
   */
  staticTop: React.PropTypes.bool,
  /**
   * An alternative dark visual style for the Navbar
   */
  inverse: React.PropTypes.bool,
  /**
   * Allow the Navbar to fluidly adjust to the page or container width, instead
   * of at the predefined screen breakpoints
   */
  fluid: React.PropTypes.bool,

  /**
   * Set a custom element for this component.
   */
  componentClass: elementType,
  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `navExpanded`
   * boolean value.
   *
   * @controllable navExpanded
   */
  onToggle: React.PropTypes.func,
  /**
   * A callback fired when a `<NavItem>` grandchild is selected inside a child
   * `<Nav>`. Should be used to execute complex toggling or other miscellaneous
   * actions desired after selecting a `<NavItem>`. Does nothing if no `<Nav>`
   * & `<NavItem>`/`<MenuItem>` children exist. The callback is called with an
   * eventKey, which is a prop from the `<NavItem>`, and an event.
   *
   * ```js
   * function (
   * 	Any eventKey,
   * 	SyntheticEvent event?
   * )
   * ```
   *
   * For basic closing behavior after all `<NavItem>` onSelect events in mobile
   * viewports, try using closeOnSelect.
   * Note: If you are manually closing the navbar using this `OnSelect` prop,
   * ensure that you are setting `expanded` to false and not *toggling* between
   * true and false.
   */
  onSelect: React.PropTypes.func,
  /**
   * Sets `expanded` to false after the onSelect event of a child of `<Nav>`
   * (such as `<NavItem>` or `<MenuItem>`). Does nothing if no `<Nav>` or
   * `<NavItem>`/`<MenuItem>` children exist.
   *
   * The onSelect callback should be used instead for more complex operations
   * desired for after `<NavItem>` select events.
   */
  closeOnSelect: React.PropTypes.bool,
  /**
   * Explicitly set the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: React.PropTypes.bool,

  role: React.PropTypes.string,
};

const defaultProps = {
  componentClass: 'nav',
  fixedTop: false,
  fixedBottom: false,
  staticTop: false,
  inverse: false,
  fluid: false,
  closeOnSelect: false,
};

const childContextTypes = {
  $bs_navbar: PropTypes.shape({
    bsClass: PropTypes.string,
    expanded: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
    onSelect: PropTypes.func,
  })
};

class Navbar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  getChildContext() {
    const { bsClass, expanded, onSelect, closeOnSelect } = this.props;

    return {
      $bs_navbar: {
        bsClass,
        expanded,
        onToggle: this.handleToggle,
        onSelect: createChainedFunction(onSelect, closeOnSelect && this.handleClose || null),
      },
    };
  }

  handleClose() {
    const { onToggle, expanded } = this.props;

    if (expanded) {
      onToggle(false);
    }
  }

  handleToggle() {
    const { onToggle, expanded } = this.props;

    onToggle(!expanded);
  }

  render() {
    const {
      componentClass: Component,
      fixedTop,
      fixedBottom,
      staticTop,
      inverse,
      fluid,
      className,
      children,
      ...props
    } = this.props;

    const [bsProps, elementProps] = splitBsPropsAndOmit(props, [
      'expanded', 'onToggle', 'onSelect', 'closeOnSelect'
    ]);

    // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one
    if (elementProps.role === undefined && Component !== 'nav') {
      elementProps.role = 'navigation';
    }

    if (inverse) {
      bsProps.bsStyle = Style.INVERSE;
    }

    const classes = {
      ...getClassSet(bsProps),
      [prefix(bsProps, 'fixed-top')]: fixedTop,
      [prefix(bsProps, 'fixed-bottom')]: fixedBottom,
      [prefix(bsProps, 'static-top')]: staticTop,
    };

    return (
      <Component
        {...elementProps}
        className={classNames(className, classes)}
      >
        <Grid fluid={fluid}>
          {children}
        </Grid>
      </Component>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
Navbar.childContextTypes = childContextTypes;

setBsClass('navbar', Navbar);

const UncontrollableNavbar = uncontrollable(Navbar, { expanded: 'onToggle' });

function createSimpleWrapper(tag, suffix, displayName) {
  const Wrapper = (
    { componentClass: Component, className, pullRight, pullLeft, ...props },
    { $bs_navbar: navbarProps = { bsClass: 'navbar' } }
  ) => (
    <Component
      {...props}
      className={classNames(
        className,
        prefix(navbarProps, suffix),
        pullRight && prefix(navbarProps, 'right'),
        pullLeft && prefix(navbarProps, 'left'),
      )}
    />
  );

  Wrapper.displayName = displayName;

  Wrapper.propTypes = {
    componentClass: elementType,
    pullRight: React.PropTypes.bool,
    pullLeft: React.PropTypes.bool,
  };

  Wrapper.defaultProps = {
    componentClass: tag,
    pullRight: false,
    pullLeft: false,
  };

  Wrapper.contextTypes = {
    $bs_navbar: PropTypes.shape({
      bsClass: PropTypes.string,
    }),
  };

  return Wrapper;
}

UncontrollableNavbar.Brand = NavbarBrand;
UncontrollableNavbar.Header = NavbarHeader;
UncontrollableNavbar.Toggle = NavbarToggle;
UncontrollableNavbar.Collapse = NavbarCollapse;

UncontrollableNavbar.Form = createSimpleWrapper('div', 'form', 'NavbarForm');
UncontrollableNavbar.Text = createSimpleWrapper('p', 'text', 'NavbarText');
UncontrollableNavbar.Link = createSimpleWrapper('a', 'link', 'NavbarLink');

// Set bsStyles here so they can be overridden.
export default bsStyles([Style.DEFAULT, Style.INVERSE], Style.DEFAULT,
  UncontrollableNavbar
);
