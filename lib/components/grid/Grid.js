'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    margin: 0 auto;\n    padding-right: 16px;\n    padding-left: 16px;\n\n    ', '\n\n    ', '\n\n    max-width: 100%;\n'], ['\n    margin: 0 auto;\n    padding-right: 16px;\n    padding-left: 16px;\n\n    ', '\n\n    ', '\n\n    max-width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n            ', '\n        '], ['\n            ', '\n        ']),
    _templateObject3 = _taggedTemplateLiteral(['\n                width: ', 'px;\n            '], ['\n                width: ', 'px;\n            ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        width: 100% !important;\n        padding: 0;\n    '], ['\n        width: 100% !important;\n        padding: 0;\n    ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTools = require('styled-tools');

var _styledComponentsBreakpoint = require('styled-components-breakpoint');

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Grid = _styledComponents2.default.div(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return Object.keys(theme.breakpoints).map(function (key, index) {
        return (0, _styledComponents.css)(_templateObject2, function (props) {
            return (0, _styledComponentsBreakpoint2.default)(key, props.theme.breakpoints)(_templateObject3, props.theme.container[key]);
        });
    });
}, (0, _styledTools.ifProp)('fluid', (0, _styledComponents.css)(_templateObject4)));

exports.default = Grid;