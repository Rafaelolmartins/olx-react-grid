'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\n    ', '\n\n    ', '\n\n    ', '\n\n    ', '\n'], ['\n\n    ', '\n\n    ', '\n\n    ', '\n\n    ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n            ', '\n        '], ['\n            ', '\n        ']),
    _templateObject3 = _taggedTemplateLiteral(['\n                ', ' \n            '], ['\n                ', ' \n            ']),
    _templateObject4 = _taggedTemplateLiteral(['\n                    ', '\n                    \n                    ', '\n\n                    ', '\n\n                    ', '\n                '], ['\n                    ', '\n                    \n                    ', '\n\n                    ', '\n\n                    ', '\n                ']);

var _helpers = require('./helpers');

var _css = require('./css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTools = require('styled-tools');

var _styledComponentsBreakpoint = require('styled-components-breakpoint');

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Col = _styledComponents2.default.div(_templateObject, _css.colStyles, (0, _styledTools.ifProp)('reverse', _css.reverseStyles), function (props) {
    return (0, _helpers.mapSpacingProps)(props);
}, function (_ref) {
    var theme = _ref.theme;
    return Object.keys(theme.breakpoints).map(function (key, index) {
        return (0, _styledComponents.css)(_templateObject2, function (props) {
            return (0, _styledComponentsBreakpoint2.default)(key, props.theme.breakpoints)(_templateObject3, (0, _styledTools.ifProp)(key, (0, _styledComponents.css)(_templateObject4, (0, _css.colCommonStyles)(props[key]), (0, _styledTools.ifProp)(key + 'Offset', (0, _css.offset)(props[key + 'Offset'])), (0, _styledTools.ifProp)(key + 'First', _css.first), (0, _styledTools.ifProp)(key + 'Last', _css.last))));
        });
    });
});

exports.default = Col;