import { Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { FileInputProps, InputProps } from "react-admin";
import { MainCarousel, PreviewCarousel } from "./Carousel";
import FileInput from "../FileInput";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 !important",
    margin: "0 !important",
    borderTop: 0,
    "& div:nth-child(2)": {
      padding: "0 !important",
    },
  },
  dropZone: {
    border: "1px solid #d6d6d6",
    margin: "0 !important",
  },
}));

interface ImageInputProps {
  children: React.ReactChild;
  fullWidth?: boolean;
}

export const ImageInput = ({
  children,
  is360 = false,
  fullWidth = false,
  placeholder = <PlaceHolderDropZone />,
  ...rest
}: ImageInputProps & FileInputProps & InputProps) => {
  const classes = useStyles();
  const [swiper, setSwiper] = React.useState<any>();

  const BaseImageInput = () => (
    <Box width="100vw" maxWidth="100%" marginRight="-20vw">
      <FileInput
        {...rest}
        placeholder={placeholder}
        classes={classes}
        mainComponent={(files, children, onRemove, onChange) => (
          <MainCarousel
            images={files}
            onRemove={onRemove}
            onChange={onChange}
            thumbs={{ swiper }}
            is360={is360}
          >
            {children}
          </MainCarousel>
        )}
        previewComponent={(files, children, onRemove, onChange) => (
          <PreviewCarousel
            onSwiper={setSwiper}
            images={files}
            onRemove={onRemove}
            onChange={onChange}
          >
            {children}
          </PreviewCarousel>
        )}
      >
        {children}
      </FileInput>
    </Box>
  );

  return (
    <>
      {fullWidth ? (
        <Box width="100% !important">
          <BaseImageInput />
        </Box>
      ) : (
        <BaseImageInput />
      )}
    </>
  );
};

const PlaceHolderDropZone = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >
      <AddIcon fontWeight="bold" />
      <Box fontWeight="bold">ADD NEW IMAGE</Box>
    </Box>
  );
};
