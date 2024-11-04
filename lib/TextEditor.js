"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// import { createRoot } from "react-dom/client";
const iconts_1 = require("./iconts");
const utils_1 = require("./utils");
const TextEditor = ({ placeholder = "Type here...", height = "100%", width = "100%", containerStyle = {}, onChange, value, }) => {
    const textareaRef = (0, react_1.useRef)(null);
    const [type, setType] = (0, react_1.useState)(["default"]);
    // const [value, onChange] = useState("");
    const [selectionRange, setSelectionRange] = (0, react_1.useState)({ start: 0, end: 0 });
    const handleOnChange = (txt) => {
        if (value.length < value.length) {
            const previousText = value;
            if (previousText.length > 0 &&
                previousText[previousText.length - 1] !==
                    (0, utils_1.replaceWithStyle)(previousText[previousText.length - 1], type)) {
                onChange(previousText.slice(0, previousText.length - 1));
                return;
            }
            onChange(txt);
            return;
        }
        if (txt.length > value.length) {
            const lastChar = txt[txt.length - 1];
            const styledLastChar = (0, utils_1.replaceWithStyle)(lastChar, type);
            if (value === txt.slice(0, -1)) {
                onChange(txt.slice(0, -1) + styledLastChar);
            }
            else {
                onChange(txt);
            }
            return;
        }
        onChange(txt);
    };
    const updateSelection = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            setSelectionRange({ start, end });
        }
    };
    const applyStyleToSelection = () => {
        const { start, end } = selectionRange;
        if (start === end)
            return; // No selection
        const selectedText = value.substring(start, end);
        const styledText = Array.from(selectedText)
            .map((char) => (0, utils_1.replaceWithStyle)(char, type))
            .join("");
        const updatedValue = value.slice(0, start) + styledText + value.slice(end);
        onChange(updatedValue);
        // Restore focus and selection range after updating text
        setTimeout(() => {
            const textarea = textareaRef.current;
            if (textarea) {
                textarea.focus();
                textarea.setSelectionRange(start, start + styledText.length);
            }
        }, 0);
    };
    const handleToggle = (style) => {
        setType((prev) => prev.includes(style) ? prev.filter((i) => i !== style) : [...prev, style]);
    };
    (0, react_1.useEffect)(() => {
        applyStyleToSelection();
    }, [type]);
    return ((0, jsx_runtime_1.jsxs)("div", { style: Object.assign({ border: "1px solid rgb(196, 196, 196)", borderRadius: "6px", padding: "12px 10px", width,
            height }, containerStyle), children: [(0, jsx_runtime_1.jsxs)("div", { className: "icon-container", style: {
                    display: "flex",
                    flexDirection: "row",
                    gap: "6px",
                    marginBottom: "8px",
                }, children: [(0, jsx_runtime_1.jsx)("div", { style: {
                            display: "flex",
                            background: type.includes("bold") ? "#e3d7d7" : "unset",
                            alignItems: "center",
                            padding: 3,
                            borderRadius: 5,
                            cursor: "pointer",
                        }, onClick: () => handleToggle("bold"), children: (0, jsx_runtime_1.jsx)(iconts_1.BoldIcon, {}) }), (0, jsx_runtime_1.jsx)("div", { style: {
                            display: "flex",
                            background: type.includes("italic") ? "#e3d7d7" : "unset",
                            alignItems: "center",
                            padding: 3,
                            borderRadius: 5,
                            cursor: "pointer",
                        }, onClick: () => handleToggle("italic"), children: (0, jsx_runtime_1.jsx)(iconts_1.ItalicIcon, {}) }), (0, jsx_runtime_1.jsx)("div", { style: {
                            display: "flex",
                            background: type.includes("underline") ? "#e3d7d7" : "unset",
                            alignItems: "center",
                            padding: 3,
                            borderRadius: 5,
                            cursor: "pointer",
                        }, onClick: () => handleToggle("underline"), children: (0, jsx_runtime_1.jsx)(iconts_1.UnderLineIcon, {}) })] }), (0, jsx_runtime_1.jsx)("textarea", { ref: textareaRef, value: value, onChange: (e) => handleOnChange(e.target.value), style: {
                    all: "unset",
                    boxSizing: "border-box",
                    resize: "none",
                    overflowWrap: "break-word",
                    width: "100%",
                    height: "100%",
                    outline: "none",
                }, onSelect: updateSelection, placeholder: placeholder })] }));
};
exports.default = TextEditor;
