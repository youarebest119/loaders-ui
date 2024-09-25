# Loaders Package

A fully functional & comprehensive suite of customizable and visually appealing loaders designed to enhance your web applications.

## Loaders Available
1. `Spinner`

## Installation

To install the package, run:

```bash
npm install loaders-ui
```

## Usage

### Simple Spinner

```tsx
import React from 'react';
import "loaders-ui/dist/main/index.min.css";
import { Spinner } from 'loaders-ui';

const App = () => (
  <div>
    <Spinner />
  </div>
);

export default App;
```

## Common Props

All loaders can accept the following common props:

- `width` (string | number): Define the size of the loader.
- `color` (string): Define the primary color of the loader. Default is `#3498db`.
- `className` (string): Add custom class names for styling.

## Specific Props

### ColorFullSpinner

- `colors` [string, string, string, string]: Define the four colors of the spinner's stroke.
- `color` : is not valid in this case.

### DoubleRing

- `width` (number): Define the size of the loader.

### ExpandingRing

- `borderWidth` (number): Define the border-width of ring.

### RotatingDots

- `dotsSize` (number | string): Define the size of the dots.

### Spinner

- `dullColor` (string): Define the stroke (of complete circle) color.
- `borderWidth` (number | string): Define the stroke width.

### SpinnerHalf ,
### SpinnerRing

- `borderWidth` (number | string): Define the stroke width.

### ZigZagLine

- `maxWidth` (number | string): Define the max width of where line can be moved.
- `height` (number | string): Define the height of the line.

## Keywords

- loaders
- react-loaders
- spinner
- loading-indicator
- bouncing-squares
- circular-spinner
- pulsing-dot
- rotating-cube

## License

This project is licensed under the MIT License.
