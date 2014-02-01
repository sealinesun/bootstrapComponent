"use strict";
/** @jsx React.DOM */

var React = require("./react-es6")["default"];
var classSet = require("./react-es6/lib/cx")["default"];

var Tab = React.createClass({displayName: 'Tab',
  handleClick: function () {
    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect(this.props.id);
    }
  },

  render: function () {
    var classes = {
      'nav': true,
      'nav-tab': true,
      'active': this.props.isActive
    };

    return this.transferPropsTo(
      React.DOM.li( {className:classSet(classes)}, 
        React.DOM.a(
          {ref:"button",
          href:this.props.id ? '#' + this.props.id : null,
          onClick:this.handleClick}, 
          this.props.children
        )
      )
    );
  }
});

exports["default"] = Tab;