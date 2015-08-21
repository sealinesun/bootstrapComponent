import React from 'react';
import BootstrapMixin from './BootstrapMixin';
import Button from './Button';
import Dropdown from './Dropdown';
import SplitToggle from './SplitToggle';

class SplitButton extends React.Component {

  render() {
    let {
      children, title, onClick, target, href, bsStyle, ...props } = this.props;

     let { disabled } = props;

    let button = (
      <Button
        onClick={onClick}
        bsStyle={bsStyle}
        disabled={disabled}
        target={target}
        href={href}
      >
        {title}
      </Button>
    );

    return (
      <Dropdown {...props}>
        {button}

        <SplitToggle
          aria-label={title}
          bsStyle={bsStyle}
          disabled={disabled}
        />
        <Dropdown.Menu>
          {children}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}


SplitButton.propTypes = {
  //dropup: React.PropTypes.bool,
  ...Dropdown.propTypes,
  ...BootstrapMixin.propTypes,

  /**
   * @private
   */
  onClick(){},
  target: React.PropTypes.string,
  href: React.PropTypes.string,
  /**
   * The content of the split button.
   */
  title: React.PropTypes.node.isRequired
};

SplitButton.Toggle = SplitToggle;

export default SplitButton;
