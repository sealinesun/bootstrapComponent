import warning from 'warning';

const warned = {};

function deprecationWarning(oldname, newname, link) {
  let message;

  if (typeof oldname === 'object'){
    message = oldname.message;
  }
  else {
    message = `${oldname} is deprecated. Use ${newname} instead.`;

    if (link) {
      message += `\nYou can read more about it at ${link}`;
    }
  }

  if (warned[message]) {
    return;
  }

  warning(false, message);
  warned[message] = true;
}


deprecationWarning.wrapper = function(Component, ...args){
  return class DeprecatedComponent extends Component {
    componentWillMount(...methodArgs){
      deprecationWarning(...args);

      if (super.componentWillMount) {
        super.componentWillMount(...methodArgs);
      }
    }
  };
};

export default deprecationWarning;

