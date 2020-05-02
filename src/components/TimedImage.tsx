import * as React from 'react';
import { TimedRenderer } from '@devboldly/react-timed-renderer';
import { UncachedImage } from '@devboldly/react-uncached-image';

export interface TimedImageProps {
  /** Optional. The re-render interval in milliseconds. Defaults to `5000`. */
  interval?: number;
  /** Optional. When `true`, the `src` attribute will have a cache-busting query param attached, causing the browser to download the image on every render. When `false`, the `src` will not have a cache-busting query param attached and the browser cache may be used for the image. Default `true`. */
  uncached?: boolean;
}

/**
 * See documentation: https://devboldly.github.io/react-timed-image/TimedImage
 *
 * A TimedImage repeatedly renders an image at a timed interval.
 *
 * Features optional client-side cache busting so the image reloads on every render.
 */
export function TimedImage(props: TimedImageProps & React.ImgHTMLAttributes<HTMLImageElement>): JSX.Element {
  const interval: number | undefined = props.interval ? props.interval : 5000;
  const uncached: boolean = typeof props.uncached !== 'undefined' ? !!props.uncached : true;

  const imgProps = { ...props };
  // Remove our own props
  delete imgProps.interval;
  delete imgProps.uncached;

  return (
    <TimedRenderer
      interval={interval}
      render={(time: number) => {
        if (uncached) {
          return <UncachedImage {...imgProps} cacheBuster={time} />;
        } else {
          return <img {...imgProps} alt={imgProps.alt} />;
        }
      }}
    />
  );
}
