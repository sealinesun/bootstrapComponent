define(
  ["./react-es6","./react-es6/lib/cx","./BootstrapMixin","./utils","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    /** @jsx React.DOM */

    var React = __dependency1__["default"];
    var classSet = __dependency2__["default"];
    var BootstrapMixin = __dependency3__["default"];
    var utils = __dependency4__["default"];

    var Panel = React.createClass({displayName: 'Panel',
      mixins: [BootstrapMixin],

      propTypes: {
        //header: React.PropTypes.renderable,
        //footer: React.PropTypes.renderable,
        isCollapsable: React.PropTypes.bool,
        isOpen: React.PropTypes.bool,
        onClick: React.PropTypes.func
      },

      getDefaultProps: function () {
        return {
          bsClass: 'panel'
        };
      },

      handleSelect: function () {
        if (this.props.onSelect) {
          this.props.onSelect(this.props.key);
        }
      },

      render: function () {
        var classes = this.getBsClassSet();
        classes['panel'] = true;
        classes['panel-collapse'] = this.props.isCollapsable;
        classes['collapse'] = this.props.isCollapsable;
        classes['in'] = this.props.isOpen;

        return this.transferPropsTo(
          React.DOM.div( {className:classSet(classes)}, 
            this.renderHeading(),
            React.DOM.div( {className:"panel-body"}, 
              this.props.children
            ),
            this.renderFooter()
          )
        );
      },

      renderHeading: function () {
        var header = this.props.header;

        if (!header) {
          return null;
        }

        if (!React.isValidComponent(header) || Array.isArray(header)) {
          header = (
            React.DOM.h4( {className:"panel-title"}, header)
          );
        } else {
          header = utils.cloneWithProps(header, {
            className: 'panel-title'
          });
        }

        return (
          React.DOM.div( {className:"panel-heading", onClick:this.handleSelect}, 
            header
          )
        );
      },

      renderFooter: function () {
        if (!this.props.footer) {
          return null;
        }

        return (
          React.DOM.div( {className:"panel-footer"}, 
            this.props.footer
          )
        );
      }
    });

    __exports__["default"] = Panel;
  });