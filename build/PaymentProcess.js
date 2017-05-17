(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Link', './SimplePrice', 'immutable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Link'), require('./SimplePrice'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Link, global.SimplePrice, global.immutable);
    global.PaymentProcess = mod.exports;
  }
})(this, function (exports, _Link, _SimplePrice, _immutable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Link2 = _interopRequireDefault(_Link);

  var _SimplePrice2 = _interopRequireDefault(_SimplePrice);

  var _immutable2 = _interopRequireDefault(_immutable);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var PaymentProcessRecord = new _immutable.Record({
    _id: null,
    status: null,
    amount: null,
    _links: null,
    _embedded: new _immutable.Map()
  });

  var PaymentProcess = function (_PaymentProcessRecord) {
    _inherits(PaymentProcess, _PaymentProcessRecord);

    function PaymentProcess(paymentProcess) {
      _classCallCheck(this, PaymentProcess);

      var immutable = _immutable2.default.fromJS(paymentProcess || {});
      var parsed = immutable.update('amount', function (a) {
        return a && new _SimplePrice2.default(a);
      }).update('_links', function (ls) {
        return ls ? ls.map(function (l) {
          return new _Link2.default(l);
        }) : new _immutable.Map();
      });

      return _possibleConstructorReturn(this, (PaymentProcess.__proto__ || Object.getPrototypeOf(PaymentProcess)).call(this, parsed));
    }

    return PaymentProcess;
  }(PaymentProcessRecord);

  exports.default = PaymentProcess;
});