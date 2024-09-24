# Loaders Package

A fully functional & comprehensive suite of customizable and visually appealing loaders designed to enhance your web applications.

## Loaders Available
1. `Infinite`
2. `BouncingBalls`
3. `BouncingSquares`
4. `Circle`
5. `ColorFullSpinner`
6. `DoubleBounce`
7. `DoubleRing`
8. `ExpandingCircle`
9. `ExpandingRing`
10. `FlashSquares`
11. `FlashingDots`
12. `FlashingSquares`
13. `FoldingCube`
14. `MorphSquare`
15. `PulsatingCircle`
16. `PulsatingCrosses`
17. `PulsatingHexagon`
18. `PulsatingRectangles`
19. `PulsatingRings`
20. `PulsatingSquare`
21. `RollingSquares`
22. `RotatingBars`
23. `RotatingDots`
24. `RotatingPlane`
25. `ScalingSquares`
26. `SkewedSquares`
27. `SlidingBars`
28. `SlidingLines`
29. `SlidingSquares`
30. `Spinner`
31. `SpinnerHalf`
32. `SpinnerRing`
33. `WanderingCubes`
34. `ZigZagLine`

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
