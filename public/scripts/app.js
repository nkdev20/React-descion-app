'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Indecesion = require('./components/Indecesion');

var _Indecesion2 = _interopRequireDefault(_Indecesion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Indecesion2.default, { options: ['pn', 'fse'] }), document.getElementById('app'));
