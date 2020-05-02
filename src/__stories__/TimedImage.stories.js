import React from 'react';
import { TimedImage } from '../components/TimedImage';

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'TimedImage',
  component: TimedImage,
};

// The named exports define the stories
export const TimedImageStory = () => {
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
TimedImageStory.story = {
  name: 'TimedImage',
};
