import { Box, IconButton, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
//@ts-ignore
import { Pannellum } from "pannellum-react";
import React from 'react';
var useStyles = makeStyles(function (theme) { return ({
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
}); });
export var ImagePreview = function (_a) {
    var src = _a.src, onRemove = _a.onRemove, is360 = _a.is360;
    var classes = useStyles();
    return (React.createElement(Box, { className: "image-wrapper" },
        React.createElement(Box, { className: "image-buttons" },
            React.createElement(IconButton, { onClick: onRemove, className: classes.deleteButton, size: "small", component: "span", style: {
                    top: is360 ? 20 : 5
                } },
                React.createElement(DeleteIcon, { fontSize: "inherit" }))),
        !is360 ? (React.createElement("img", { src: src })) : (React.createElement(Pannellum, { image: src }))));
};
