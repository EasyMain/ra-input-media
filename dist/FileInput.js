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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { useInput, useTranslate } from 'ra-core';
import React, { Children, isValidElement, } from 'react';
import { InputHelperText, Labeled } from 'react-admin';
import { useDropzone } from 'react-dropzone';
import { shallowEqual } from 'react-redux';
var useStyles = makeStyles(function (theme) { return ({
    dropZone: {
        background: theme.palette.background.default,
        cursor: 'pointer',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.getContrastText(theme.palette.background.default),
    },
    preview: {},
    removeButton: {},
    root: { width: '100%' },
}); }, { name: 'RaFileInput' });
var FileInput = function (props) {
    var accept = props.accept, children = props.children, className = props.className, classesOverride = props.classes, format = props.format, helperText = props.helperText, label = props.label, _a = props.labelMultiple, labelMultiple = _a === void 0 ? 'ra.input.file.upload_several' : _a, _b = props.labelSingle, labelSingle = _b === void 0 ? 'ra.input.file.upload_single' : _b, maxSize = props.maxSize, minSize = props.minSize, _c = props.multiple, multiple = _c === void 0 ? false : _c, _d = props.options, _e = _d === void 0 ? {} : _d, inputPropsOptions = _e.inputProps, options = __rest(_e, ["inputProps"]), parse = props.parse, placeholder = props.placeholder, resource = props.resource, source = props.source, validate = props.validate, mainComponent = props.mainComponent, previewComponent = props.previewComponent, rest = __rest(props, ["accept", "children", "className", "classes", "format", "helperText", "label", "labelMultiple", "labelSingle", "maxSize", "minSize", "multiple", "options", "parse", "placeholder", "resource", "source", "validate", "mainComponent", "previewComponent"]);
    var translate = useTranslate();
    var classes = useStyles(props);
    // turn a browser dropped file structure into expected structure
    var transformFile = function (file) {
        var _a;
        if (!(file instanceof File)) {
            return file;
        }
        var _b = Children.only(children)
            .props, source = _b.source, title = _b.title;
        var preview = URL.createObjectURL(file);
        var transformedFile = (_a = {
                rawFile: file
            },
            _a[source] = preview,
            _a);
        if (title) {
            transformedFile[title] = file.name;
        }
        return transformedFile;
    };
    var transformFiles = function (files) {
        if (!files) {
            return multiple ? [] : null;
        }
        if (Array.isArray(files)) {
            return files.map(transformFile);
        }
        return transformFile(files);
    };
    var _f = useInput(__assign({ format: format || transformFiles, parse: parse || transformFiles, source: source, type: 'file', validate: validate }, rest)), id = _f.id, _g = _f.input, onChange = _g.onChange, value = _g.value, inputProps = __rest(_g, ["onChange", "value"]), meta = _f.meta, isRequired = _f.isRequired;
    var touched = meta.touched, error = meta.error, submitError = meta.submitError;
    var files = value ? (Array.isArray(value) ? value : [value]) : [];
    var onDrop = function (newFiles, rejectedFiles, event) {
        var updatedFiles = multiple ? __spreadArray(__spreadArray([], files, true), newFiles, true) : __spreadArray([], newFiles, true);
        if (multiple) {
            onChange(updatedFiles);
        }
        else {
            onChange(updatedFiles[0]);
        }
        if (options.onDrop) {
            options.onDrop(newFiles, rejectedFiles, event);
        }
    };
    var onChangeFile = function (file) { return function (newFile) {
        if (multiple) {
            var indexFile = files.findIndex(function (stateFile) {
                return shallowEqual(stateFile, file);
            });
            files[indexFile] = newFile;
            onChange(files);
        }
        else {
            onChange(null);
        }
    }; };
    var onRemove = function (file) { return function () {
        if (multiple) {
            var filteredFiles = files.filter(function (stateFile) { return !shallowEqual(stateFile, file); });
            onChange(filteredFiles);
        }
        else {
            onChange(null);
        }
        if (options.onRemove) {
            options.onRemove(file);
        }
    }; };
    var childrenElement = children && isValidElement(Children.only(children))
        ? Children.only(children)
        : undefined;
    var _h = useDropzone(__assign(__assign({}, options), { accept: accept, maxSize: maxSize, minSize: minSize, multiple: multiple, onDrop: onDrop })), getRootProps = _h.getRootProps, getInputProps = _h.getInputProps;
    return (React.createElement(Labeled, __assign({ id: id, label: label, className: classnames(classes.root, className), source: source, resource: resource, isRequired: isRequired, meta: meta }, rest),
        React.createElement(React.Fragment, null,
            children &&
                mainComponent &&
                mainComponent(files, childrenElement, onRemove, onChangeFile),
            React.createElement("div", __assign({ "data-testid": "dropzone", className: classes.dropZone }, getRootProps()),
                React.createElement("input", __assign({ id: id }, getInputProps(__assign(__assign({}, inputProps), inputPropsOptions)))),
                placeholder ? (placeholder) : multiple ? (React.createElement("p", null, translate(labelMultiple))) : (React.createElement("p", null, translate(labelSingle)))),
            React.createElement(FormHelperText, null,
                React.createElement(InputHelperText, { touched: touched || false, error: error || submitError, helperText: helperText })),
            children &&
                previewComponent &&
                previewComponent(files, childrenElement, onRemove, onChangeFile))));
};
export default FileInput;
