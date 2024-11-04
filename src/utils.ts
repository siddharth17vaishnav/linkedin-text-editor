// utils.ts
import {
  BOLD,
  CAPITAL_BOLD,
  ITALIC,
  CAPITAL_ITALIC,
  UNDERLINE,
  CAPITAL_UNDERLINE,
  BOLD_ITALIC,
  CAPITAL_BOLD_ITALIC,
} from "./contants";

const replaceWithStyle = (char: string, styles: string[]): string => {
  const charCode = char.charCodeAt(0);
  let styledChar = char;

  if (styles.includes("bold")) {
    if (char >= "a" && char <= "z") {
      styledChar = BOLD[charCode - "a".charCodeAt(0)];
    } else if (char >= "A" && char <= "Z") {
      styledChar = CAPITAL_BOLD[charCode - "A".charCodeAt(0)];
    }
  }

  if (styles.includes("italic")) {
    if (char >= "a" && char <= "z") {
      styledChar = ITALIC[charCode - "a".charCodeAt(0)];
    } else if (char >= "A" && char <= "Z") {
      styledChar = CAPITAL_ITALIC[charCode - "A".charCodeAt(0)];
    }
  }

  if (styles.includes("underline")) {
    if (char >= "a" && char <= "z") {
      styledChar = UNDERLINE[charCode - "a".charCodeAt(0)];
    } else if (char >= "A" && char <= "Z") {
      styledChar = CAPITAL_UNDERLINE[charCode - "A".charCodeAt(0)];
    }
  }
  if (styles.includes("bold") && styles.includes("italic")) {
    if (char >= "a" && char <= "z") {
      styledChar = BOLD_ITALIC[charCode - "a".charCodeAt(0)];
    } else if (char >= "A" && char <= "Z") {
      styledChar = CAPITAL_BOLD_ITALIC[charCode - "A".charCodeAt(0)];
    }
  }

  return styledChar;
};
export { replaceWithStyle };
