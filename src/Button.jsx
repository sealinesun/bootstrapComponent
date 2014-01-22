/** @jsx React.DOM */

var React          = require('react');
var merge          = require('react/lib/merge');
var BootstrapMixin = require('./BootstrapMixin');

var Button = React.createClass({
  mixins: [BootstrapMixin],

  propTypes: {
    loadingChildren: React.PropTypes.renderable,
    isLoading:   React.PropTypes.bool,
    isActive:    React.PropTypes.bool,
    isDisabled:    React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      bsClass: 'button',
      loadingChildren: 'Loading...'
    };
  },

  renderAnchor: function (children, className, isDisabled) {
    return (
      <a
        href={this.props.href}
        className={className}
        onClick={this.props.onClick}
        disabled={isDisabled}>
        {children}
      </a>
    );
  },

  renderButton: function (children, className, isDisabled) {
    return (
      <button
        type={this.props.type || "button"}
        className={className}
        onClick={this.props.onClick}
        disabled={isDisabled}>
        {children}
      </button>
    );
  },

  render: function () {
    var isDisabled = !!(this.props.isDisabled || this.props.isLoading);
    var className = this.extendClassName({
      disabled: isDisabled,
      active: this.props.isActive
    });

    var children = this.props.isLoading ?
      this.props.loadingChildren : this.props.children;

    var renderFuncName = (this.props.href) ?
      'renderAnchor' : 'renderButton';

    return this[renderFuncName](children, className, isDisabled);
  }
});

module.exports = Button;