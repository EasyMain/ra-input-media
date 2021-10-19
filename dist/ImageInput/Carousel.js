import InsertPhotoIcon from "@material-ui/icons/Image";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
SwiperCore.use([Navigation, Thumbs]);
var useStyles = makeStyles(function (theme) { return ({
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
}); });
export var MainCarousel = function (_a) {
    var images = _a.images, _b = _a.is360, is360 = _b === void 0 ? false : _b, thumbs = _a.thumbs, onRemove = _a.onRemove, onChange = _a.onChange, children = _a.children;
    var classes = useStyles();
    return (React.createElement(React.Fragment, null, images && images.length > 0 && is360 ? (React.cloneElement(children, {
        src: images[0][children.props.source],
        onRemove: onRemove(images[0]),
        onChange: onChange(images[0]),
        is360: is360,
    })) : images && images.length > 0 ? (React.createElement(Swiper, { loop: true, spaceBetween: 0, navigation: images && (images === null || images === void 0 ? void 0 : images.length) > 1, thumbs: thumbs, className: "main-swiper" }, images.map(function (item, index) { return (React.createElement(SwiperSlide, { key: index }, React.cloneElement(children, {
        src: item[children.props.source],
        onRemove: onRemove(item),
        onChange: onChange(item),
    }))); }))) : (React.createElement(Box, { className: classes.containerDefaultImage },
        React.createElement(InsertPhotoIcon, { fontSize: "inherit" })))));
};
export var PreviewCarousel = function (_a) {
    var images = _a.images, onRemove = _a.onRemove, onChange = _a.onChange, children = _a.children, onSwiper = _a.onSwiper;
    return (React.createElement(React.Fragment, null, images && images.length > 1 && (React.createElement(Swiper, { onSwiper: onSwiper, spaceBetween: 10, slidesPerView: "auto", freeMode: true, className: "preview-carrousel" }, images &&
        images.map(function (item, index) { return (React.createElement(SwiperSlide, { key: index }, React.cloneElement(children, {
            src: item[children.props.source],
            onRemove: onRemove(item),
            onChange: onChange(item),
        }))); })))));
};
