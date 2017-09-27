'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Valign = exports.Halign = exports.distribution = exports.rowStyles = exports.last = exports.first = exports.offset = exports.reverseStyles = exports.colCommonStyles = exports.colStyles = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 16px;\n    padding-left: 16px;\n'], ['\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 16px;\n    padding-left: 16px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n                -ms-flex-preferred-size: ', '%;\n                flex-basis: ', '%;\n                max-width: ', '%;\n            '], ['\n                -ms-flex-preferred-size: ', '%;\n                flex-basis: ', '%;\n                max-width: ', '%;\n            ']),
    _templateObject4 = _taggedTemplateLiteral(['\n                -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                flex-grow: 1;\n                -ms-flex-preferred-size: 0;\n                flex-basis: 0;\n                max-width: 100%;\n            '], ['\n                -webkit-box-flex: 1;\n                -ms-flex-positive: 1;\n                flex-grow: 1;\n                -ms-flex-preferred-size: 0;\n                flex-basis: 0;\n                max-width: 100%;\n            ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    flex-direction: row-reverse;\n'], ['\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: row-reverse;\n    flex-direction: row-reverse;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    margin-left: ', '%;\n'], ['\n    margin-left: ', '%;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n'], ['\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n'], ['\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n'], ['\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n                -webkit-box-pack: justify;\n                -moz-box-pack: justify;\n                -ms-flex-pack: justify;\n                -webkit-justify-content: space-between;\n                justify-content: space-between;\n            '], ['\n                -webkit-box-pack: justify;\n                -moz-box-pack: justify;\n                -ms-flex-pack: justify;\n                -webkit-justify-content: space-between;\n                justify-content: space-between;\n            ']),
    _templateObject11 = _taggedTemplateLiteral(['\n                -ms-flex-pack: distribute;\n                -webkit-justify-content: space-around;\n                justify-content: space-around;\n            '], ['\n                -ms-flex-pack: distribute;\n                -webkit-justify-content: space-around;\n                justify-content: space-around;\n            ']),
    _templateObject12 = _taggedTemplateLiteral(['\n                -webkit-box-pack: start;\n                -ms-flex-pack: start;\n                text-align: start;\n                -webkit-justify-content: flex-start;\n                justify-content: flex-start;\n            '], ['\n                -webkit-box-pack: start;\n                -ms-flex-pack: start;\n                text-align: start;\n                -webkit-justify-content: flex-start;\n                justify-content: flex-start;\n            ']),
    _templateObject13 = _taggedTemplateLiteral(['\n                -webkit-box-pack: center;\n                -moz-box-pack: center;\n                -ms-flex-pack: center;\n                -webkit-justify-content: center;\n                justify-content: center;\n            '], ['\n                -webkit-box-pack: center;\n                -moz-box-pack: center;\n                -ms-flex-pack: center;\n                -webkit-justify-content: center;\n                justify-content: center;\n            ']),
    _templateObject14 = _taggedTemplateLiteral(['\n                -webkit-box-pack: end;\n                -ms-flex-pack: end;\n                text-align: end;\n                -webkit-justify-content: flex-end;\n                justify-content: flex-end;\n            '], ['\n                -webkit-box-pack: end;\n                -ms-flex-pack: end;\n                text-align: end;\n                -webkit-justify-content: flex-end;\n                justify-content: flex-end;\n            ']),
    _templateObject15 = _taggedTemplateLiteral(['\n                -webkit-box-align: start;\n                -moz-box-align: start;\n                -ms-flex-align: start;\n                -webkit-align-items: flex-start;\n                align-items: flex-start; \n            '], ['\n                -webkit-box-align: start;\n                -moz-box-align: start;\n                -ms-flex-align: start;\n                -webkit-align-items: flex-start;\n                align-items: flex-start; \n            ']),
    _templateObject16 = _taggedTemplateLiteral(['\n                -webkit-box-align: center;\n                -moz-box-align: center;\n                -ms-flex-align: center;\n                -webkit-align-items: center;\n                align-items: center; \n            '], ['\n                -webkit-box-align: center;\n                -moz-box-align: center;\n                -ms-flex-align: center;\n                -webkit-align-items: center;\n                align-items: center; \n            ']),
    _templateObject17 = _taggedTemplateLiteral(['\n                -webkit-box-align: end;\n                -moz-box-align: end;\n                -ms-flex-align: end;\n                -webkit-align-items: flex-end;\n                align-items: flex-end; \n            '], ['\n                -webkit-box-align: end;\n                -moz-box-align: end;\n                -ms-flex-align: end;\n                -webkit-align-items: flex-end;\n                align-items: flex-end; \n            ']);

var _styledComponents = require('styled-components');

var _helpers = require('./helpers');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var colStyles = exports.colStyles = function colStyles() {
    return (0, _styledComponents.css)(_templateObject);
};

var colCommonStyles = exports.colCommonStyles = function colCommonStyles(size) {
    return (0, _styledComponents.css)(_templateObject2, function () {
        if ((0, _helpers.isInteger)(size)) {
            return (0, _styledComponents.css)(_templateObject3, (0, _helpers.getPercentOfGridCols)(size), (0, _helpers.getPercentOfGridCols)(size), (0, _helpers.getPercentOfGridCols)(size));
        } else {
            return (0, _styledComponents.css)(_templateObject4);
        }
    });
};

var reverseStyles = exports.reverseStyles = function reverseStyles() {
    return (0, _styledComponents.css)(_templateObject5);
};

var offset = exports.offset = function offset(size) {
    return (0, _styledComponents.css)(_templateObject6, (0, _helpers.getPercentOfGridCols)(size));
};

var first = exports.first = function first() {
    return (0, _styledComponents.css)(_templateObject7);
};

var last = exports.last = function last() {
    return (0, _styledComponents.css)(_templateObject8);
};

var rowStyles = exports.rowStyles = function rowStyles() {
    return (0, _styledComponents.css)(_templateObject9);
};

var distribution = exports.distribution = function distribution(value) {
    return (0, _styledComponents.css)(_templateObject2, function () {
        if (value === 'between') {
            return (0, _styledComponents.css)(_templateObject10);
        } else if (value === 'around') {
            return (0, _styledComponents.css)(_templateObject11);
        }
    });
};

var Halign = exports.Halign = function Halign(value) {
    return (0, _styledComponents.css)(_templateObject2, function () {
        if (value === 'start') {
            return (0, _styledComponents.css)(_templateObject12);
        } else if (value === 'center') {
            return (0, _styledComponents.css)(_templateObject13);
        } else if (value === 'end') {
            return (0, _styledComponents.css)(_templateObject14);
        }
    });
};

var Valign = exports.Valign = function Valign(value) {
    return (0, _styledComponents.css)(_templateObject2, function () {
        if (value === 'top') {
            return (0, _styledComponents.css)(_templateObject15);
        } else if (value === 'middle') {
            return (0, _styledComponents.css)(_templateObject16);
        } else if (value === 'bottom') {
            return (0, _styledComponents.css)(_templateObject17);
        }
    });
};