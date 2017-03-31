import React, {PropTypes} from 'react';

function render(props) {
  if (typeof props.children === 'function') {
    return props.children();
  }

  return props.children || null;
}

export function Then(props) {
  return render(props);
}

export function Else(props) {
  return render(props);
}

export function Elif(props){
  return render(props);
}

export function Switch(props) {
  const { children, condition } = props;

  if (children == null) {
    return null;
  }

  var render;
  var isCase;

  React.Children.toArray(children).find(c => {
    switch (c.type) {
      case Case:
        if(c.props.break) {
          if (condition === c.props.value) {
            render = c;
            isCase = false
          } else if(isCase) {
            render = c;
          }
        } else {
          if (condition === c.props.value) {
            isCase = true;
          }
        }
        break;
      default:
        if(!render) {
          render = c;
        }
        break;
    }
  })

  return render || null
}

export function Default(props) {
  return render(props)
}

export function Case(props) {
  const { children } = props;
  return render(props);
}

export function If(props) {
  const { children } = props;

  if (children == null) {
    return null;
  }

  return React.Children.toArray(children).find(c => {
    return (c.type === Then)?props.condition:
      (c.type === Elif)?c.props.condition:
      (c.type === Else)?!props.condition:
      props.condition;
  }) || null;
}

const ThenOrElseIfOrElse = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.instanceOf(Then),
  PropTypes.instanceOf(Else),
  PropTypes.instanceOf(Elif)
]);

Then.propTypes = Else.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};

If.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(ThenOrElseIfOrElse),
    ThenOrElseIfOrElse
  ])
};
