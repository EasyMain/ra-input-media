import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { InputProps, useInput, useTranslate } from 'ra-core';
import React, {
  Children,
  FunctionComponent,
  isValidElement,
  ReactElement,
} from 'react';
import { InputHelperText, Labeled } from 'react-admin';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { shallowEqual } from 'react-redux';

const useStyles = makeStyles(
  (theme) => ({
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
  }),
  { name: 'RaFileInput' }
);

export interface FileInputProps {
  accept?: string;
  labelMultiple?: string;
  labelSingle?: string;
  maxSize?: number;
  minSize?: number;
  multiple?: boolean;
  mainComponent?: (
    files: any[],
    children: JSX.Element,
    onRemove: (file: any) => () => void,
    onChange: (file: any) => (file: File) => void
  ) => JSX.Element;
  previewComponent?: (
    files: any[],
    children: JSX.Element,
    onRemove: (file: any) => () => void,
    onChange: (file: any) => (file: File) => void
  ) => JSX.Element;
}

export interface FileInputOptions extends DropzoneOptions {
  inputProps?: any;
  onRemove?: Function;
}

const FileInput: FunctionComponent<
  FileInputProps & InputProps<FileInputOptions>
> = (props) => {
  const {
    accept,
    children,
    className,
    classes: classesOverride,
    format,
    helperText,
    label,
    labelMultiple = 'ra.input.file.upload_several',
    labelSingle = 'ra.input.file.upload_single',
    maxSize,
    minSize,
    multiple = false,
    options: {
      inputProps: inputPropsOptions,
      ...options
    } = {} as FileInputOptions,
    parse,
    placeholder,
    resource,
    source,
    validate,
    mainComponent,
    previewComponent,
    ...rest
  } = props;
  const translate = useTranslate();
  const classes = useStyles(props);

  // turn a browser dropped file structure into expected structure
  const transformFile = (file: any) => {
    if (!(file instanceof File)) {
      return file;
    }

    const { source, title } = (Children.only(children) as ReactElement<any>)
      .props;

    const preview = URL.createObjectURL(file);
    const transformedFile = {
      rawFile: file,
      [source]: preview,
    };

    if (title) {
      transformedFile[title] = file.name;
    }

    return transformedFile;
  };

  const transformFiles = (files: any[]) => {
    if (!files) {
      return multiple ? [] : null;
    }

    if (Array.isArray(files)) {
      return files.map(transformFile);
    }

    return transformFile(files);
  };

  const {
    id,
    input: { onChange, value, ...inputProps },
    meta,
    isRequired,
  } = useInput({
    format: format || transformFiles,
    parse: parse || transformFiles,
    source,
    type: 'file',
    validate,
    ...rest,
  });
  const { touched, error, submitError } = meta;
  const files = value ? (Array.isArray(value) ? value : [value]) : [];

  const onDrop = (newFiles: any, rejectedFiles: any, event: any) => {
    const updatedFiles = multiple ? [...files, ...newFiles] : [...newFiles];

    if (multiple) {
      onChange(updatedFiles);
    } else {
      onChange(updatedFiles[0]);
    }

    if (options.onDrop) {
      options.onDrop(newFiles, rejectedFiles, event);
    }
  };

  const onChangeFile = (file: any) => (newFile: File) => {
    if (multiple) {
      const indexFile = files.findIndex((stateFile) =>
        shallowEqual(stateFile, file)
      );
      files[indexFile] = newFile;
      onChange(files as any);
    } else {
      onChange(null);
    }
  };

  const onRemove = (file: any) => () => {
    if (multiple) {
      const filteredFiles = files.filter(
        (stateFile) => !shallowEqual(stateFile, file)
      );
      onChange(filteredFiles as any);
    } else {
      onChange(null);
    }

    if (options.onRemove) {
      options.onRemove(file);
    }
  };

  const childrenElement =
    children && isValidElement(Children.only(children))
      ? (Children.only(children) as ReactElement<any>)
      : undefined;

  const { getRootProps, getInputProps } = useDropzone({
    ...options,
    accept,
    maxSize,
    minSize,
    multiple,
    onDrop,
  });

  return (
    <Labeled
      id={id}
      label={label}
      className={classnames(classes.root, className)}
      source={source}
      resource={resource}
      isRequired={isRequired}
      meta={meta}
      {...rest}
    >
      <>
        {children &&
          mainComponent &&
          mainComponent(files, childrenElement as any, onRemove, onChangeFile)}
        <div
          data-testid="dropzone"
          className={classes.dropZone}
          {...getRootProps()}
        >
          <input
            id={id}
            {...getInputProps({
              ...inputProps,
              ...inputPropsOptions,
            })}
          />
          {placeholder ? (
            placeholder
          ) : multiple ? (
            <p>{translate(labelMultiple)}</p>
          ) : (
            <p>{translate(labelSingle)}</p>
          )}
        </div>
        <FormHelperText>
          <InputHelperText
            touched={touched || false}
            error={error || submitError}
            helperText={helperText}
          />
        </FormHelperText>
        {children &&
          previewComponent &&
          previewComponent(
            files,
            childrenElement as any,
            onRemove,
            onChangeFile
          )}
      </>
    </Labeled>
  );
};

export default FileInput;
