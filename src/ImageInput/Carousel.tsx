import { ThumbsOptions } from "swiper/types";
import InsertPhotoIcon from "@material-ui/icons/Image";

import SwiperCore, { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Box, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { ReactElement } from "react";
import { ImagePreviewProps } from "./ImagePreview";

SwiperCore.use([Navigation, Thumbs]);

const useStyles = makeStyles((theme: Theme) => ({
  containerDefaultImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "#dadada",
    height: "35vw",
    minHeight: "200px",
    maxHeight: "500px",
    width: "100%",
    fontSize: theme.spacing(15),
  },
}));

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

export const MainCarousel = ({
  images,
  is360 = false,
  thumbs,
  onRemove,
  onChange,
  children,
}: CarouselProps) => {
  const classes = useStyles();

  return (
    <>
      {images && images.length > 0 && is360 ? (
        React.cloneElement(children as ReactElement<ImagePreviewProps>, {
          src: images[0][children.props.source],
          onRemove: onRemove(images[0]),
          onChange: onChange(images[0]),
          is360,
        })
      ) : images && images.length > 0 ? (
        <Swiper
          loop
          spaceBetween={0}
          navigation={images && images?.length > 1}
          thumbs={thumbs}
          className="main-swiper"
        >
          {images.map((item, index: number) => (
            <SwiperSlide key={index}>
              {React.cloneElement(children as ReactElement<ImagePreviewProps>, {
                src: item[children.props.source],
                onRemove: onRemove(item),
                onChange: onChange(item),
              })}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Box className={classes.containerDefaultImage}>
          <InsertPhotoIcon fontSize="inherit" />
        </Box>
      )}
    </>
  );
};

export const PreviewCarousel = ({
  images,
  onRemove,
  onChange,
  children,
  onSwiper,
}: PreviewCarouselProps) => {
  return (
    <>
      {images && images.length > 1 && (
        <Swiper
          onSwiper={onSwiper}
          spaceBetween={10}
          slidesPerView="auto"
          freeMode
          className="preview-carrousel"
        >
          {images &&
            images.map((item, index: number) => (
              <SwiperSlide key={index}>
                {React.cloneElement(
                  children as ReactElement<ImagePreviewProps>,
                  {
                    src: item[children.props.source],
                    onRemove: onRemove(item),
                    onChange: onChange(item),
                  }
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </>
  );
};
