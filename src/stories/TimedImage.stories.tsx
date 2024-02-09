import React from 'react';
import { TimedImage } from '../components/TimedImage';
import type { Meta, StoryObj } from '@storybook/react';

// === Setup ===
const StoryComponent = TimedImage; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/TimedImage', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const Hello: Story = {
  name: 'Cached and Uncached',
  render: () => {
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
  },
};
