"use strict";
/** @jsx React.DOM */

var React                 = require('react');
var BootstrapMixin = require("./BootstrapMixin")["default"];
var utils = require("./utils")["default"];
var Tab = require("./Tab")["default"];

var TabbedArea = React.createClass({displayName: 'TabbedArea',
  mixins: [BootstrapMixin],

  propTypes: {
    onSelect: React.PropTypes.func
  },

  getInitialState: function () {
    var initialActiveKey = this.props.initialActiveKey;

    if (initialActiveKey == null) {
      var children = this.props.children;
      initialActiveKey =
        Array.isArray(children) ? children[0].props.key : children.props.key;
    }

    return {
      activeKey: initialActiveKey
    };
  },

  render: function () {
    var children = this.props.children;

    if (!Array.isArray(children)) {
      children = [children]
    }

    function hasTab (child) {
      return !!child.props.tab;
    }

    return this.transferPropsTo(
      React.DOM.div(null, 
        React.DOM.ul( {className:"nav nav-tabs", ref:"tabs"}, 
          children.filter(hasTab).map(this.renderTab)
        ),
        React.DOM.div( {id:this.props.id, ref:"panes"}, 
          children.map(this.renderPane)
        )
      )
    );
  },

  renderPane: function (child) {
    var activeKey =
      this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
    return utils.cloneWithProps(
        child,
        {
          isActive: (child.props.key === activeKey)
        }
      );
  },

  renderTab: function (child) {
    var activeKey =
      this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
    var key = child.props.key;
    return (
      Tab(
        {id:child.props.id,
        ref:'tab' + key,
        key:key,
        isActive:key === activeKey,
        onSelect:this.handleSelect.bind(this, key)}, 
        child.props.tab
      )
    );
  },

  shouldComponentUpdate: function() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleSelect: function (key) {
    if (this.props.onSelect) {
      this._isChanging = true;
      this.props.onSelect(key);
      this._isChanging = false;
    }

    this.setState({
      activeKey: key
    });
  }
});

exports["default"] = TabbedArea;