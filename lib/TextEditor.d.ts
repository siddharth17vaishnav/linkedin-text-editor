interface Props {
    placeholder?: string;
    width?: number | string;
    height?: number | string;
    containerStyle?: Record<string, string | number | boolean>;
    value: string;
    onChange: (val: string) => void;
}
declare const TextEditor: ({ placeholder, height, width, containerStyle, onChange, value, }: Props) => import("react/jsx-runtime").JSX.Element;
export default TextEditor;
