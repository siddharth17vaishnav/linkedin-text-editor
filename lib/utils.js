"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceWithStyle = void 0;
// utils.ts
const contants_1 = require("./contants");
const replaceWithStyle = (char, styles) => {
    const charCode = char.charCodeAt(0);
    let styledChar = char;
    if (styles.includes("bold")) {
        if (char >= "a" && char <= "z") {
            styledChar = contants_1.BOLD[charCode - "a".charCodeAt(0)];
        }
        else if (char >= "A" && char <= "Z") {
            styledChar = contants_1.CAPITAL_BOLD[charCode - "A".charCodeAt(0)];
        }
    }
    if (styles.includes("italic")) {
        if (char >= "a" && char <= "z") {
            styledChar = contants_1.ITALIC[charCode - "a".charCodeAt(0)];
        }
        else if (char >= "A" && char <= "Z") {
            styledChar = contants_1.CAPITAL_ITALIC[charCode - "A".charCodeAt(0)];
        }
    }
    if (styles.includes("underline")) {
        if (char >= "a" && char <= "z") {
            styledChar = contants_1.UNDERLINE[charCode - "a".charCodeAt(0)];
        }
        else if (char >= "A" && char <= "Z") {
            styledChar = contants_1.CAPITAL_UNDERLINE[charCode - "A".charCodeAt(0)];
        }
    }
    if (styles.includes("bold") && styles.includes("italic")) {
        if (char >= "a" && char <= "z") {
            styledChar = contants_1.BOLD_ITALIC[charCode - "a".charCodeAt(0)];
        }
        else if (char >= "A" && char <= "Z") {
            styledChar = contants_1.CAPITAL_BOLD_ITALIC[charCode - "A".charCodeAt(0)];
        }
    }
    return styledChar;
};
exports.replaceWithStyle = replaceWithStyle;
