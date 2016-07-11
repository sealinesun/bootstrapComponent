import classNames from 'classnames';
import React, { PropTypes } from 'react';
import elementType from 'react-prop-types/lib/elementType';

import { bsClass as setBsClass, omitBsProps, prefix }
  from './utils/bootstrapUtils';

const propTypes = {
  componentClass: elementType,

  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or any
   * `<Transition>` component.
   */
  animation: PropTypes.oneOfType([
    PropTypes.bool, elementType,
  ]),

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit: PropTypes.bool,
};

const defaultProps = {
  componentClass: 'div',
  animation: true,
  unmountOnExit: false,
};

const contextTypes = {
  $bs_tabContainer: PropTypes.shape({
    activeKey: PropTypes.any,
  }),
};

const childContextTypes = {
  $bs_tabContent: PropTypes.shape({
    bsClass: PropTypes.string,
    animation: PropTypes.oneOfType([
      PropTypes.bool, elementType,
    ]),
    activeKey: PropTypes.any,
    unmountOnExit: PropTypes.bool,
    onPaneEnter: PropTypes.func.isRequired,
    onPaneExited: PropTypes.func.isRequired,
    exiting: PropTypes.bool.isRequired,
  }),
};

class TabContent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handlePaneEnter = this.handlePaneEnter.bind(this);
    this.handlePaneExited = this.handlePaneExited.bind(this);

    // Active entries in state will be `null` unless `animation` is set. Need
    // to track active child in case keys swap and the active child changes
    // but the active key does not.
    this.state = {
      activeKey: null,
      activeChild: null,
    };
  }

  getChildContext() {
    const { bsClass, animation, unmountOnExit } = this.props;

    const stateActiveKey = this.state.activeKey;
    const containerActiveKey = this.getContainerActiveKey();

    const activeKey =
      stateActiveKey != null ? stateActiveKey : containerActiveKey;
    const exiting =
      stateActiveKey != null && stateActiveKey !== containerActiveKey;

    return {
      $bs_tabContent: {
        bsClass,
        animation,
        activeKey,
        unmountOnExit,
        onPaneEnter: this.handlePaneEnter,
        onPaneExited: this.handlePaneExited,
        exiting,
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.animation && this.state.activeChild) {
      this.setState({ activeKey: null, activeChild: null });
    }
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  handlePaneEnter(child, childKey) {
    if (!this.props.animation) {
      return false;
    }

    // It's possible that this child should be transitioning out.
    if (childKey !== this.getContainerActiveKey()) {
      return false;
    }

    this.setState({
      activeKey: childKey,
      activeChild: child,
    });

    return true;
  }

  handlePaneExited(child) {
    // This might happen as everything is unmounting.
    if (this.isUnmounted) {
      return;
    }

    this.setState(({ activeChild }) => {
      if (activeChild !== child) {
        return null;
      }

      return {
        activeKey: null,
        activeChild: null,
      };
    });
  }

  getContainerActiveKey() {
    const tabContainer = this.context.$bs_tabContainer;
    return tabContainer && tabContainer.activeKey;
  }

  render() {
    const { componentClass: Component, className, ...props } = this.props;

    delete props.animation;
    delete props.unmountOnExit;

    return (
      <Component
        {...omitBsProps(props)}
        className={classNames(className, prefix(props, 'content'))}
      />
    );
  }
}

TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;
TabContent.contextTypes = contextTypes;
TabContent.childContextTypes = childContextTypes;

export default setBsClass('tab', TabContent);
