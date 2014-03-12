define(
  ["./react-es6","./react-es6/lib/cx","./BootstrapMixin","./DropdownStateMixin","./utils","./Button","./ButtonGroup","./DropdownMenu","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __exports__) {
    "use strict";
    /** @jsx React.DOM */
    /* global document */

    var React = __dependency1__["default"];
    var classSet = __dependency2__["default"];
    var BootstrapMixin = __dependency3__["default"];
    var DropdownStateMixin = __dependency4__["default"];
    var utils = __dependency5__["default"];
    var Button = __dependency6__["default"];
    var ButtonGroup = __dependency7__["default"];
    var DropdownMenu = __dependency8__["default"];


    var DropdownButton = React.createClass({displayName: 'DropdownButton',
      mixins: [BootstrapMixin, DropdownStateMixin],

      propTypes: {
        right:    React.PropTypes.bool,
        title:    React.PropTypes.string,
        href:     React.PropTypes.string,
        onClick:  React.PropTypes.func,
        onSelect: React.PropTypes.func
      },

      render: function () {
        var groupClasses = {
            'open': this.state.open,
            'dropup': this.props.dropup
          };

        return (
          ButtonGroup(
            {bsSize:this.props.bsSize,
            className:classSet(groupClasses)}, 
            Button(
              {ref:"dropdownButton",
              href:this.props.href,
              bsStyle:this.props.bsStyle,
              className:"dropdown-toggle",
              onClick:this.handleOpenClick}, 
              this.props.title + ' ',
              React.DOM.span( {className:"caret"} )
            ),

            DropdownMenu(
              {ref:"menu",
              'aria-labelledby':this.props.id,
              onSelect:this.handleOptionSelect,
              right:this.props.right}, 
              this.props.children
            )
          )
        );
      },

      handleOpenClick: function () {
        this.setDropdownState(true);
      },

      handleOptionSelect: function (key) {
        if (this.props.onSelect) {
          this.props.onSelect(key);
        }

        this.setDropdownState(false);
      }
    });

    __exports__["default"] = DropdownButton;
  });