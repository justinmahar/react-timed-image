/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TimedImage } from '../components/TimedImage';

export default {
  title: 'Stories/TimedImage',
  component: TimedImage,
} as ComponentMeta<typeof TimedImage>;

const Template: ComponentStory<typeof TimedImage> = (args) => {
  const src = 'https://loremflickr.com/220/140';
  return (
    <>
      <p>Reloads every 3 seconds -- uncached, will change:</p>
      <TimedImage src={src} interval={3000} />
      <pre>{`<TimedImage src="https://loremflickr.com/220/140" interval={3000} />`}</pre>
      <p>
        When uncached (default), a cache busting query param is attached to the src attribute. In most circumstances,
        this causes the browser to retrieve the image again.
      </p>
      <hr />
      <p>Reloads every 5 seconds (default time) -- cached, will not change:</p>
      <TimedImage src={src} uncached={false} />
      <pre>{`<TimedImage src="https://loremflickr.com/220/140" uncached={false} />`}</pre>
      <p>Disabling the cache buster typically prevents the browser from retrieving the image again.</p>
    </>
  );
};

export const TimedImageStory = Template.bind({});
TimedImageStory.args = {};
TimedImageStory.story = {
  name: 'Cached and Uncached',
};
