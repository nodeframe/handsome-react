(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.index = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Then = Then;
  exports.Else = Else;
  exports.Elif = Elif;
  exports.If = If;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function render(props) {
    if (typeof props.children === 'function') {
      return props.children();
    }

    return props.children || null;
  }

  function Then(props) {
    return render(props);
  }

  function Else(props) {
    return render(props);
  }

  function Elif(props) {
    return render(props);
  }

  function If(props) {
    var children = props.children;


    if (children == null) {
      return null;
    }

    return _react2.default.Children.toArray(children).find(function (c) {
      return c.type === Then ? props.condition : c.type === Elif ? c.props.condition : c.type === Else ? !props.condition : props.condition;
    }) || null;
  }

  var ThenOrElseIfOrElse = _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.instanceOf(Then), _react.PropTypes.instanceOf(Else), _react.PropTypes.instanceOf(Elif)]);

  Then.propTypes = Else.propTypes = {
    children: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.object])
  };

  If.propTypes = {
    condition: _react.PropTypes.bool.isRequired,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(ThenOrElseIfOrElse), ThenOrElseIfOrElse])
  };
});
//# sourceMappingURL=index.js.map