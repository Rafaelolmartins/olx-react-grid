'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n\n    ', '\n\n    ', '\n'], ['\n    ', '\n\n    ', '\n\n    ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n            ', '\n        '], ['\n            ', '\n        ']),
    _templateObject3 = _taggedTemplateLiteral(['\n                    \n                    ', '\n\n                    ', '\n                                    a  \n                    ', '\n\n                    ', '\n                \n            '], ['\n                    \n                    ', '\n\n                    ', '\n                                    a  \n                    ', '\n\n                    ', '\n                \n            ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _helpers = require('./helpers');

var _css = require('./css');

var _styledTools = require('styled-tools');

var _styledComponentsBreakpoint = require('styled-components-breakpoint');

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Row = _styledComponents2.default.div(_templateObject, _css.rowStyles, function (props) {
    return (0, _helpers.mapSpacingProps)(props);
}, function (_ref) {
    var theme = _ref.theme;
    return Object.keys(theme.breakpoints).map(function (key, index) {
        return (0, _styledComponents.css)(_templateObject2, function (props) {
            return (0, _styledComponentsBreakpoint2.default)(key, props.theme.breakpoints)(_templateObject3, (0, _styledTools.ifProp)(key + 'Distribution', (0, _css.distribution)(props[key + 'Distribution'])), (0, _styledTools.ifProp)(key + 'Halign', (0, _css.Halign)(props[key + 'Halign'])), (0, _styledTools.ifProp)(key + 'Valign', (0, _css.Valign)(props[key + 'Valign'])), (0, _styledTools.ifProp)(key + 'Reverse', _css.reverseStyles));
        });
    });
});

exports.default = Row;