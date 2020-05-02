import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { TimedImage, TimedImageProps } from '../components/TimedImage';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

function renderComponent(
  props: TimedImageProps & React.ImgHTMLAttributes<HTMLImageElement>,
  children: React.ReactNode = undefined
): RenderResult {
  return render(<TimedImage {...props}>{children}</TimedImage>);
}

describe('TimedImage', () => {
  test('should render without crashing', async () => {
    const props: TimedImageProps & React.ImgHTMLAttributes<HTMLImageElement> = {
      src: 'https://loremflickr.com/220/140',
      interval: 3000,
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
