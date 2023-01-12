"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimedImage = void 0;
const React = __importStar(require("react"));
const react_timed_renderer_1 = require("react-timed-renderer");
const react_uncached_image_1 = require("react-uncached-image");
/**
 * See documentation: [TimedImage](https://justinmahar.github.io/react-timed-image/?path=/story/components-timedimage--page)
 *
 * A TimedImage repeatedly renders an image at a timed interval.
 *
 * Features optional client-side cache busting so the image reloads on every render.
 */
function TimedImage(props) {
    const interval = props.interval ? props.interval : 5000;
    const uncached = typeof props.uncached !== 'undefined' ? !!props.uncached : true;
    const imgProps = Object.assign({}, props);
    // Remove our own props
    delete imgProps.interval;
    delete imgProps.uncached;
    return (React.createElement(react_timed_renderer_1.TimedRenderer, { interval: interval, render: (time) => {
            if (uncached) {
                return React.createElement(react_uncached_image_1.UncachedImage, Object.assign({}, imgProps));
            }
            else {
                return React.createElement("img", Object.assign({}, imgProps, { alt: imgProps.alt }));
            }
        } }));
}
exports.TimedImage = TimedImage;
