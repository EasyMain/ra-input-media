var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { MainCarousel, PreviewCarousel } from "./Carousel";
import FileInput from "../FileInput";
var useStyles = makeStyles(function (theme) { return ({
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
}); });
export var ImageInput = function (_a) {
    var children = _a.children, _b = _a.is360, is360 = _b === void 0 ? false : _b, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, _d = _a.placeholder, placeholder = _d === void 0 ? React.createElement(PlaceHolderDropZone, null) : _d, rest = __rest(_a, ["children", "is360", "fullWidth", "placeholder"]);
    var classes = useStyles();
    var _e = React.useState(), swiper = _e[0], setSwiper = _e[1];
    var BaseImageInput = function () { return (React.createElement(Box, { width: "100vw", maxWidth: "100%", marginRight: "-20vw" },
        React.createElement(FileInput, __assign({}, rest, { placeholder: placeholder, classes: classes, mainComponent: function (files, children, onRemove, onChange) { return (React.createElement(MainCarousel, { images: files, onRemove: onRemove, onChange: onChange, thumbs: { swiper: swiper }, is360: is360 }, children)); }, previewComponent: function (files, children, onRemove, onChange) { return (React.createElement(PreviewCarousel, { onSwiper: setSwiper, images: files, onRemove: onRemove, onChange: onChange }, children)); } }), children))); };
    return (React.createElement(React.Fragment, null, fullWidth ? (React.createElement(Box, { width: "100% !important" },
        React.createElement(BaseImageInput, null))) : (React.createElement(BaseImageInput, null))));
};
var PlaceHolderDropZone = function () {
    return (React.createElement(Box, { display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" },
        React.createElement(AddIcon, { fontWeight: "bold" }),
        React.createElement(Box, { fontWeight: "bold" }, "ADD NEW IMAGE")));
};
