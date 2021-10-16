"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagePreview = void 0;
var core_1 = require("@material-ui/core");
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
//@ts-ignore
var pannellum_react_1 = require("pannellum-react");
var react_1 = __importDefault(require("react"));
require("./main.css");
var useStyles = (0, core_1.makeStyles)(function (theme) { return ({
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
var ImagePreview = function (_a) {
    var src = _a.src, source = _a.source, onRemove = _a.onRemove, is360 = _a.is360, onChange = _a.onChange;
    var classes = useStyles();
    react_1.default.useEffect(function () {
        console.log(src);
    }, [src]);
    return (react_1.default.createElement(core_1.Box, { className: "image-wrapper" },
        react_1.default.createElement(core_1.Box, { className: "image-buttons" },
            react_1.default.createElement(core_1.IconButton, { onClick: onRemove, className: classes.deleteButton, size: "small", component: "span", style: {
                    top: is360 ? 20 : 5
                } },
                react_1.default.createElement(Delete_1.default, { fontSize: "inherit" }))),
        !is360 ? (react_1.default.createElement("img", { src: src })) : (react_1.default.createElement(pannellum_react_1.Pannellum, { image: src }))));
};
exports.ImagePreview = ImagePreview;
