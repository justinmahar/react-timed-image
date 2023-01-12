"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimedImageStory = void 0;
/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
const react_1 = __importDefault(require("react"));
const TimedImage_1 = require("../components/TimedImage");
exports.default = {
    title: 'Stories/TimedImage',
    component: TimedImage_1.TimedImage,
};
const Template = (args) => {
    const src = 'https://loremflickr.com/220/140';
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", null, "Reloads every 3 seconds -- uncached, will change:"),
        react_1.default.createElement(TimedImage_1.TimedImage, { src: src, interval: 3000 }),
        react_1.default.createElement("pre", null, `<TimedImage src="https://loremflickr.com/220/140" interval={3000} />`),
        react_1.default.createElement("p", null, "When uncached (default), a cache busting query param is attached to the src attribute. In most circumstances, this causes the browser to retrieve the image again."),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("p", null, "Reloads every 5 seconds (default time) -- cached, will not change:"),
        react_1.default.createElement(TimedImage_1.TimedImage, { src: src, uncached: false }),
        react_1.default.createElement("pre", null, `<TimedImage src="https://loremflickr.com/220/140" uncached={false} />`),
        react_1.default.createElement("p", null, "Disabling the cache buster typically prevents the browser from retrieving the image again.")));
};
exports.TimedImageStory = Template.bind({});
exports.TimedImageStory.args = {};
exports.TimedImageStory.story = {
    name: 'Cached and Uncached',
};
