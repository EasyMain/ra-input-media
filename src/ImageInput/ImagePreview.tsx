import { Box, IconButton, makeStyles, Theme } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
//@ts-ignore
import { Pannellum } from "pannellum-react";
import React from 'react';


const useStyles = makeStyles((theme: Theme) => ({
  editButton: {
    backgroundColor: theme.palette.info.main,
    position: 'absolute',
    color: theme.palette.info.contrastText,
    right: 40,
    top: 5,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
    },
  },
  deleteButton: {
    zIndex: 9999,
    backgroundColor: theme.palette.error.main,
    position: 'absolute',
    color: theme.palette.error.contrastText,
    right: 10,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
}));

export interface ImagePreviewProps {
  source: string;
  src?: string;
  is360?: boolean;
  onRemove?: (event: any) => void;
  onChange?: (event: any) => void;
}

export const ImagePreview = ({
  src,
  source,
  onRemove,
  is360,
  onChange,
}: ImagePreviewProps) => {
  const classes = useStyles();
  React.useEffect(() => {
    console.log(src);
  }, [src]);
  return (
    <Box className="image-wrapper">
      <Box className="image-buttons">
        <IconButton
          onClick={onRemove}
          className={classes.deleteButton}
          size="small"
          component="span"
          style={{
            top: is360? 20 : 5
          }}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Box>
      {!is360 ? (
        <img src={src} />
      ) : (
        <Pannellum  image={src} />
      )}
    </Box>
  );
};
