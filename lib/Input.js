var React = require('react/addons');

var INPUT_TYPES = [
  'text',
  'password',
  'datetime',
  'datetime-local',
  'date',
  'month',
  'time',
  'week',
  'number',
  'email',
  'url',
  'search',
  'tel',
  'color'
];

var Input = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(INPUT_TYPES).isRequired,
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string,
    required: React.PropTypes.bool,
    oneOf: React.PropTypes.array,
    minLength: React.PropTypes.int
  },

  getValue: function () {
    return this.refs.input.getDOMNode().value;
  },

  renderInput: function () {
    var className = 'form-control input-md';

    return (
      <input
        id={this.props.id}
        type={this.props.type}
        className={className}
        placeholder={this.props.placeholder}
        ref="input"
      />
    );
  },

  renderLabel: function () {
    return this.props.label ? <label for={this.props.id}>{this.props.label}</label> : null;
  },

  render: function () {
    var className = 'form-group';

    if (this.state.error) {
      className += ' has-error';
    }

    return (
      <div className={className} onBlur={this.handleBlur} onFocus={this.handleFocus}>
        {this.renderInput()}
        {this.renderLabel()}
      </div>
    );
  },

  handleBlur: function (e) {
    var value = this.getValue();
    var error;

    if (this.props.required && !value) {
      error = 'required';
    } else if (this.props.oneOf && !(value in this.props.oneOf)) {
      error = 'oneOf';
    } else if (this.props.minLength && value.length < this.props.minLength) {
      error = 'minLength';
    }

    this.setState({
      error: error
    });
  },

  handleFocus: function(e) {
    this.setState({
      error: false
    });

    e.stopPropagation();
  }
});

module.exports = Input;