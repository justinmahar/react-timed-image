"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_timed_renderer_1 = require("@devboldly/react-timed-renderer");
var react_uncached_image_1 = require("@devboldly/react-uncached-image");
// Use http://lorempixel.com/ for demo
var DEFAULT_INTERVAL = 5000;
function TimedImage(props) {
    var interval = props.interval ? props.interval : DEFAULT_INTERVAL;
    var uncached = typeof props.uncached !== 'undefined' ? !!props.uncached : true;
    var imgProps = __assign({}, props);
    // Remove our own props
    delete imgProps.interval;
    delete imgProps.uncached;
    return (React.createElement(react_timed_renderer_1.TimedRenderer, { interval: interval, render: function (time) {
            if (uncached) {
                return React.createElement(react_uncached_image_1.UncachedImage, __assign({}, imgProps, { cacheBuster: time }));
            }
            else {
                return React.createElement("img", __assign({}, imgProps));
            }
        } }));
}
exports.TimedImage = TimedImage;
