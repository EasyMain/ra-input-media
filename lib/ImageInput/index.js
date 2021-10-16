"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageInput = void 0;
var core_1 = require("@material-ui/core");
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var styles_1 = require("@material-ui/styles");
var react_1 = __importDefault(require("react"));
var Carousel_1 = require("./Carousel");
var FileInput_1 = __importDefault(require("../FileInput"));
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: {
        padding: '0 !important',
        margin: '0 !important',
        borderTop: 0,
        '& div:nth-child(2)': {
            padding: '0 !important',
        },
    },
    dropZone: {
        border: '1px solid #d6d6d6',
        margin: '0 !important',
    },
}); });
var ImageInput = function (_a) {
    var children = _a.children, _b = _a.is360, is360 = _b === void 0 ? false : _b, _c = _a.placeholder, placeholder = _c === void 0 ? react_1.default.createElement(PlaceHolderDropZone, null) : _c, rest = __rest(_a, ["children", "is360", "placeholder"]);
    var classes = useStyles();
    var _d = react_1.default.useState(), swiper = _d[0], setSwiper = _d[1];
    return (react_1.default.createElement(core_1.Box, { width: "90vw", maxWidth: "100%" },
        react_1.default.createElement(FileInput_1.default, __assign({}, rest, { placeholder: placeholder, classes: classes, mainComponent: function (files, children, onRemove, onChange) { return (react_1.default.createElement(Carousel_1.MainCarousel, { images: files, onRemove: onRemove, onChange: onChange, thumbs: { swiper: swiper }, is360: is360 }, children)); }, previewComponent: function (files, children, onRemove, onChange) { return (react_1.default.createElement(Carousel_1.PreviewCarousel, { onSwiper: setSwiper, images: files, onRemove: onRemove, onChange: onChange }, children)); } }), children)));
};
exports.ImageInput = ImageInput;
var PlaceHolderDropZone = function () {
    return (react_1.default.createElement(core_1.Box, { display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" },
        react_1.default.createElement(Add_1.default, { fontWeight: "bold" }),
        react_1.default.createElement(core_1.Box, { fontWeight: "bold" }, "ADD NEW IMAGE")));
};
