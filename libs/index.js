(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './If'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./If'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.If);
    global.index = mod.exports;
  }
})(this, function (exports, _If) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_If).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _If[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map