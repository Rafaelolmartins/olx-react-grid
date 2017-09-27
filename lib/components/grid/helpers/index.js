'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapSpacingProps = exports.breakPointLoop = exports.generateSpacingProp = exports.generateError = exports.getPercentOfGridCols = exports.isInteger = undefined;

var _templateObject = _taggedTemplateLiteral(['\n            ', ': ', ' !important;\n        '], ['\n            ', ': ', ' !important;\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        ', ': ', 'px !important;\n    '], ['\n        ', ': ', 'px !important;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n            ', '    \n        '], ['\n            ', '    \n        ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponentsBreakpoint = require('styled-components-breakpoint');

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var isInteger = exports.isInteger = function isInteger(prop) {
    return (/^\d+$/.test(prop)
    );
};

var getPercentOfGridCols = exports.getPercentOfGridCols = function getPercentOfGridCols(prop) {
    return parseFloat(prop / 12 * 100);
};

var generateError = exports.generateError = function generateError(errorMessage) {
    throw new Error(errorMessage);
};

var generateSpacingProp = exports.generateSpacingProp = function generateSpacingProp(propName, propValue) {
    if (Array.isArray(propValue)) {
        return (0, _styledComponents.css)(_templateObject, propName, propValue.join(' '));
    }

    return (0, _styledComponents.css)(_templateObject2, propName, propValue);
};

var breakPointLoop = exports.breakPointLoop = function breakPointLoop(args) {
    Object.keys(args.theme.breakpoints).map(function (key, index) {
        return function (args) {
            return (0, _styledComponentsBreakpoint2.default)(key, args.theme.breakpoints)(_templateObject3, _styledComponents.css.apply(undefined, _toConsumableArray(args)));
        };
    });
};

var mapSpacingProps = exports.mapSpacingProps = function mapSpacingProps(props) {
    return (0, _styledComponents.css)(_templateObject4, props.theme.spaces.map(function (prop, index) {

        var incommingProp = Object.keys(prop)[0];

        if (props.hasOwnProperty(incommingProp)) {

            var propName = prop[incommingProp];
            var propValue = props[incommingProp];
            var nuggetsList = props.theme.nuggets;
            var nuggetsListSize = nuggetsList.length;

            if (Array.isArray(propValue)) {
                var maxAllowedSize = 4;
                if (propValue.length <= maxAllowedSize) {
                    var arrayValue = [];
                    propValue.map(function (n) {
                        if (isInteger(n)) {
                            if (n <= nuggetsListSize) {
                                arrayValue.push(nuggetsList[n] + 'px');
                            } else {
                                arrayValue.push(n + 'px');
                            }
                        } else {
                            generateError('Invalid format for prop ' + propName);
                        }
                        return null;
                    });
                    return generateSpacingProp(propName, arrayValue);
                } else {
                    generateError('Invalid format for prop ' + propName);
                }
            } else if (isInteger(propValue)) {
                if (propValue <= nuggetsListSize) {
                    return generateSpacingProp(propName, nuggetsList[propValue]);
                } else {
                    return generateSpacingProp(propName, propValue);
                }
            } else {
                generateError('Invalid format for prop ' + propName);
            }
        }
        return null;
    }));
};