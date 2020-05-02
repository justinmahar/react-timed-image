import * as React from 'react';
interface TimedImageProps {
    interval?: number;
    uncached?: boolean;
}
export declare function TimedImage(props: TimedImageProps & React.ImgHTMLAttributes<HTMLImageElement>): JSX.Element;
export {};
