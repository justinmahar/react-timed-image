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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimedImage = void 0;
var React = __importStar(require("react"));
var react_timed_renderer_1 = require("react-timed-renderer");
var react_uncached_image_1 = require("react-uncached-image");
/**
 * See documentation: [TimedImage](https://justinmahar.github.io/react-timed-image/TimedImage)
 *
 * A TimedImage repeatedly renders an image at a timed interval.
 *
 * Features optional client-side cache busting so the image reloads on every render.
 */
function TimedImage(props) {
    var interval = props.interval ? props.interval : 5000;
    var uncached = typeof props.uncached !== 'undefined' ? !!props.uncached : true;
    var imgProps = __assign({}, props);
    // Remove our own props
    delete imgProps.interval;
    delete imgProps.uncached;
    return (React.createElement(react_timed_renderer_1.TimedRenderer, { interval: interval, render: function (time) {
            if (uncached) {
                return React.createElement(react_uncached_image_1.UncachedImage, __assign({}, imgProps));
            }
            else {
                return React.createElement("img", __assign({}, imgProps, { alt: imgProps.alt }));
            }
        } }));
}
exports.TimedImage = TimedImage;
