/// <reference types="react" />
export interface ImagePreviewProps {
    source: string;
    src?: string;
    is360?: boolean;
    onRemove?: (event: any) => void;
    onChange?: (event: any) => void;
}
export declare const ImagePreview: ({ src, source, onRemove, is360, onChange, }: ImagePreviewProps) => JSX.Element;
//# sourceMappingURL=ImagePreview.d.ts.map