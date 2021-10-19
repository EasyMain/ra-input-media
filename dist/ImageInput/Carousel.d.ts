import { ThumbsOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import React from "react";
interface CarouselProps {
    images?: any[];
    is360?: boolean;
    onRemove: (file: any) => () => void;
    onChange: (file: any) => (file: File) => void;
    thumbs: ThumbsOptions;
    children: JSX.Element;
}
interface PreviewCarouselProps {
    images?: any[];
    onRemove: (file: any) => () => void;
    onChange: (file: any) => (file: File) => void;
    onSwiper: React.Dispatch<any>;
    children: JSX.Element;
}
export declare const MainCarousel: ({ images, is360, thumbs, onRemove, onChange, children, }: CarouselProps) => JSX.Element;
export declare const PreviewCarousel: ({ images, onRemove, onChange, children, onSwiper, }: PreviewCarouselProps) => JSX.Element;
export {};
//# sourceMappingURL=Carousel.d.ts.map