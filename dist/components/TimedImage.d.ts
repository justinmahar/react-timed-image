import * as React from 'react';
export interface TimedImageProps {
    /** Optional. The re-render interval in milliseconds. Defaults to `5000`. */
    interval?: number;
    /** Optional. When `true`, the `src` attribute will have a cache-busting query param attached, causing the browser to download the image on every render. When `false`, the `src` will not have a cache-busting query param attached and the browser cache may be used for the image. Default `true`. */
    uncached?: boolean;
}
/**
 * See documentation: [TimedImage](https://devboldly.github.io/react-timed-image/TimedImage)
 *
 * A TimedImage repeatedly renders an image at a timed interval.
 *
 * Features optional client-side cache busting so the image reloads on every render.
 */
export declare function TimedImage(props: TimedImageProps & React.ImgHTMLAttributes<HTMLImageElement>): JSX.Element;
