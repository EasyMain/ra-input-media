"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewCarousel = exports.MainCarousel = void 0;
var Image_1 = __importDefault(require("@material-ui/icons/Image"));
var swiper_1 = __importStar(require("swiper"));
var react_1 = require("swiper/react");
// Import Swiper styles
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/thumbs");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var react_2 = __importDefault(require("react"));
swiper_1.default.use([swiper_1.Navigation, swiper_1.Thumbs]);
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    containerDefaultImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#dadada',
        height: '35vw',
        minHeight: '200px',
        maxHeight: '500px',
        width: '100%',
        fontSize: theme.spacing(15),
    }
}); });
var MainCarousel = function (_a) {
    var images = _a.images, _b = _a.is360, is360 = _b === void 0 ? false : _b, thumbs = _a.thumbs, onRemove = _a.onRemove, onChange = _a.onChange, children = _a.children;
    var classes = useStyles();
    return (react_2.default.createElement(react_2.default.Fragment, null, images && images.length > 0 && is360 ? (react_2.default.cloneElement(children, {
        src: images[0][children.props.source],
        onRemove: onRemove(images[0]),
        onChange: onChange(images[0]),
        is360: is360,
    })) : (react_2.default.createElement(react_1.Swiper, { loop: true, spaceBetween: 0, navigation: images && (images === null || images === void 0 ? void 0 : images.length) > 1, thumbs: thumbs, className: "main-swiper" }, images && images.length > 0 ? (images.map(function (item, index) { return (react_2.default.createElement(react_1.SwiperSlide, { key: index }, react_2.default.cloneElement(children, {
        src: item[children.props.source],
        onRemove: onRemove(item),
        onChange: onChange(item),
    }))); })) : (react_2.default.createElement(react_1.SwiperSlide, null,
        react_2.default.createElement(core_1.Box, { className: classes.containerDefaultImage },
            react_2.default.createElement(Image_1.default, { fontSize: "inherit" }))))))));
};
exports.MainCarousel = MainCarousel;
var PreviewCarousel = function (_a) {
    var images = _a.images, onRemove = _a.onRemove, onChange = _a.onChange, children = _a.children, onSwiper = _a.onSwiper;
    return (react_2.default.createElement(react_2.default.Fragment, null, images && images.length > 1 && (react_2.default.createElement(react_1.Swiper, { onSwiper: onSwiper, spaceBetween: 10, slidesPerView: "auto", freeMode: true, className: "preview-carrousel" }, images &&
        images.map(function (item, index) { return (react_2.default.createElement(react_1.SwiperSlide, { key: index }, react_2.default.cloneElement(children, {
            src: item[children.props.source],
            onRemove: onRemove(item),
            onChange: onChange(item),
        }))); })))));
};
exports.PreviewCarousel = PreviewCarousel;
