import { InputProps } from 'ra-core';
import { FunctionComponent } from 'react';
import { DropzoneOptions } from 'react-dropzone';
export interface FileInputProps {
    accept?: string;
    labelMultiple?: string;
    labelSingle?: string;
    maxSize?: number;
    minSize?: number;
    multiple?: boolean;
    mainComponent?: (files: any[], children: JSX.Element, onRemove: (file: any) => () => void, onChange: (file: any) => (file: File) => void) => JSX.Element;
    previewComponent?: (files: any[], children: JSX.Element, onRemove: (file: any) => () => void, onChange: (file: any) => (file: File) => void) => JSX.Element;
}
export interface FileInputOptions extends DropzoneOptions {
    inputProps?: any;
    onRemove?: Function;
}
declare const FileInput: FunctionComponent<FileInputProps & InputProps<FileInputOptions>>;
export default FileInput;
//# sourceMappingURL=FileInput.d.ts.map