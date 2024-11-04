# Linkedin Text Editor

A customizable text editor component for React, featuring rich text formatting options like bold, italic, and underline for selected text. Perfect for simple text-editing needs in applications that require basic styling functionality in a text editor.

## Features

- **Bold, Italic, and Underline** styling for selected text.
- **Customizable dimensions** and styles for flexible layout.
- **Easy integration** and usage within React applications.
- **TypeScript support** (optional), with type definitions for enhanced development experience.

## Installation

Install the component from npm:

```bash
npm i linkedin-text-editor
```




## Usage
![App Screenshot](https://github.com/siddharth17vaishnav/linkedin-text-editor/blob/main/assets/Linkedin-Text-Editor.png?raw=true)


### Props

| Prop             | Type                 | Default          | Description                                             |
|------------------|----------------------|------------------|---------------------------------------------------------|
| `placeholder`    | `string`             | `"Type here..."` | Placeholder text for the editor                         |
| `width`          | `string` or `number` | `"100%"`         | Width of the editor container                           |
| `height`         | `string` or `number` | `"100%"`         | Height of the editor container                          |
| `containerStyle` | `object`             | `{}`             | Custom styles for the editor container                  |
| `onChange`       | `function`           | `undefined`      | Callback function to handle editor content changes      |
| `value`          | `string`             | `undefined`      | Initial value for the editor content                    |

## Styling
Text styles are applied by selecting the text within the editor and clicking on the relevant style icons (Bold, Italic, or Underline). The TextEditor component automatically applies the selected style to the currently highlighted text.

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request.