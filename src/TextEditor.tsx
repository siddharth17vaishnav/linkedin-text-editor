import { useEffect, useRef, useState } from "react";
// import { createRoot } from "react-dom/client";
import { BoldIcon, ItalicIcon, UnderLineIcon } from "./iconts";
import { replaceWithStyle } from "./utils";

interface Props {
  placeholder?: string;
  width?: number | string;
  height?: number | string;
  containerStyle?: Record<string, string | number | boolean>;
  value: string;
  onChange: (val: string) => void;
}

const TextEditor = ({
  placeholder = "Type here...",
  height = "100%",
  width = "100%",
  containerStyle = {},
  onChange,
  value,
}: Props) => {
  const textareaRef = useRef<any>(null);
  const [type, setType] = useState(["default"]);
  // const [value, onChange] = useState("");
  const [selectionRange, setSelectionRange] = useState({ start: 0, end: 0 });
  const handleOnChange = (txt: string) => {
    if (value.length < value.length) {
      const previousText = value;
      if (
        previousText.length > 0 &&
        previousText[previousText.length - 1] !==
          replaceWithStyle(previousText[previousText.length - 1], type)
      ) {
        onChange(previousText.slice(0, previousText.length - 1));
        return;
      }
      onChange(txt);
      return;
    }
    if (txt.length > value.length) {
      const lastChar = txt[txt.length - 1];
      const styledLastChar = replaceWithStyle(lastChar, type);
      if (value === txt.slice(0, -1)) {
        onChange(txt.slice(0, -1) + styledLastChar);
      } else {
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
    if (start === end) return; // No selection

    const selectedText = value.substring(start, end);
    const styledText = Array.from(selectedText)
      .map((char) => replaceWithStyle(char, type))
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

  const handleToggle = (style: string) => {
    setType((prev) =>
      prev.includes(style) ? prev.filter((i) => i !== style) : [...prev, style]
    );
  };

  useEffect(() => {
    applyStyleToSelection();
  }, [type]);

  return (
    <div
      style={{
        border: "1px solid rgb(196, 196, 196)",
        borderRadius: "6px",
        padding: "12px 10px",
        width,
        height,
        ...containerStyle,
      }}
    >
      <div
        className="icon-container"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "6px",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            background: type.includes("bold") ? "#e3d7d7" : "unset",
            alignItems: "center",
            padding: 3,
            borderRadius: 5,
            cursor: "pointer",
          }}
          onClick={() => handleToggle("bold")}
        >
          <BoldIcon />
        </div>
        <div
          style={{
            display: "flex",
            background: type.includes("italic") ? "#e3d7d7" : "unset",
            alignItems: "center",
            padding: 3,
            borderRadius: 5,
            cursor: "pointer",
          }}
          onClick={() => handleToggle("italic")}
        >
          <ItalicIcon />
        </div>
        <div
          style={{
            display: "flex",
            background: type.includes("underline") ? "#e3d7d7" : "unset",
            alignItems: "center",
            padding: 3,
            borderRadius: 5,
            cursor: "pointer",
          }}
          onClick={() => handleToggle("underline")}
        >
          <UnderLineIcon />
        </div>
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
        style={{
          all: "unset",
          boxSizing: "border-box",
          resize: "none",
          overflowWrap: "break-word",
          width: "100%",
          height: "100%",
          outline: "none",
        }}
        onSelect={updateSelection}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextEditor;

// const rootElement = document.getElementById("root");
// if (rootElement) {
//   const root = createRoot(rootElement);
//   root.render(<TextEditor />);
// }
