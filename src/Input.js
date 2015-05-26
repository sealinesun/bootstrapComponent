import React from 'react';
import InputBase from './InputBase';
import ButtonInput from './ButtonInput';
import deprecationWarning from './utils/deprecationWarning';

class Input extends InputBase {
  render() {
    if (ButtonInput.types.indexOf(this.props.type) > -1) {
      deprecationWarning(`Input type=${this.props.type}`, 'ButtonInput');
      return <ButtonInput {...this.props} />;
    }

    return super.render();
  }
}

export default Input;
