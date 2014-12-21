# Flex Object

<p class="hide">CSS layout module using flexbox</p>
<a href="http://jxnblk.com/flex-object" class="hide">jxnblk.com/flex-object</a>

The flex-object is a powerful suite of utilities based on the
<a href="http://www.w3.org/TR/css3-flexbox/">flexible box layout module</a>.
These utilities can replace the need for a grid system in many instances,
but can also be combined with the Basscss grid for even more possibilities.

## .flex
To begin, add the `.flex` class to a parent element.
This sets the element to `display: flex` and enables a flex context for all direct child elements.
```html:example
<div class="flex">
  <a href="#" class="button">Link</a>
  <a href="#" class="button">Link</a>
</div>
```

## .flex-wrap
To wrap elements, use the `.flex-wrap` utility.
```html:example
<div class="flex flex-wrap">
  <a href="#" class="button">Home</a>
  <a href="#" class="button">Nav Item</a>
  <a href="#" class="button">Nav Item</a>
  <a href="#" class="button">Nav Item</a>
  <a href="#" class="button">Nav Item</a>
  <a href="#" class="button">Nav Item</a>
  <a href="#" class="button">Nav Item</a>
  <a href="#" class="button">Nav Item</a>
</div>
```

## .flex-column
To arrange items vertically, use the `.flex-column` utility.
```html:example
<div class="flex flex-column">
  <div class="p1 blue border">Row</div>
  <div class="p1 blue border">Row</div>
  <div class="p1 blue border">Row</div>
</div>
```

## Alignment
Use these utilities to control vertical alignment of child elements.

### .flex-center
To vertically center child elements, add the `.flex-center` class to the parent element.
```html:example
<div class="flex flex-center">
  <div class="flex-auto px2 py4 blue border">
    <h1 class="m0">Big</h1>
  </div>
  <div class="px2 blue border">Small</div>
</div>
```

### .flex-stretch
To stretch all elements to fill the height of the parent, use the `.flex-stretch` utility.
```html:example
<div class="flex flex-stretch">
  <div class="flex-auto px2 py4 blue border">
    <h1 class="m0">Big</h1>
  </div>
  <div class="px2 blue border">Small</div>
</div>
```

### .flex-stretch with nested content
To ensure nested elements stretch as well, add the `.flex` class to relevant elements.
```html:example
<div class="flex flex-stretch">
  <div class="flex-auto px2 py4 blue border">
    <h1 class="m0">Big</h1>
  </div>
  <div class="flex blue border">
    <div class="px2 white bg-blue">
      Small
    </div>
  </div>
</div>
```

### .flex-baseline
To align child elements to their baseline, use the `.flex-baseline` utility.

```html:example
<div class="flex flex-baseline blue border-bottom">
  <div class="flex-auto px2">
    <h1 class="m0">Big</h1>
  </div>
  <div class="px2">Small</div>
</div>
```

### .flex-start
To align child elements to the top, use the `.flex-start` utility.

```html:example
<div class="flex flex-start blue border-top">
  <div class="flex-auto px2">
    <h1 class="m0">Big</h1>
  </div>
  <div class="px2">Small</div>
</div>
```

### .flex-end
To align child elements to the bottom, use the `.flex-end` utility.

```html:example
<div class="flex flex-end blue border-bottom">
  <div class="flex-auto px2">
    <h1 class="m0">Big</h1>
  </div>
  <div class="px2">Small</div>
</div>
```

## Justification
To control how the white space between and around elements is handled, use the justify utilities.

### .flex-justify-start
```html:example
<div class="flex flex-justify-start">
  <a href="#" class="button button-blue-outline">Home</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
</div>
```

### .flex-justify-end
```html:example
<div class="flex flex-justify-end">
  <a href="#" class="button button-blue-outline">Home</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
</div>
```

### .flex-justify-center
```html:example
<div class="flex flex-justify-center">
  <a href="#" class="button button-blue-outline">Home</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
</div>
```

### .flex-justify-around
```html:example
<div class="flex flex-justify-around">
  <a href="#" class="button button-blue-outline">Home</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
</div>
```

### .flex-justify-between
```html:example
<div class="flex flex-justify-between">
  <a href="#" class="button button-blue-outline">Home</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
  <a href="#" class="button button-blue-outline">Nav Item</a>
</div>
```

## Responsive Utilities
To set display flex only at certain breakpoints and up,
use the breakpoint-prefixed versions of `.flex`.
All other utilities will only work at the set breakpoint.

```html:example
<div class="sm-flex flex-center mb2 blue">
  <div class="border">
    <h2 class="m0">.sm-flex</h2>
  </div>
  <div class="flex-auto border">Div</div>
  <div class="border">Div</div>
</div>
<div class="md-flex flex-center mb2 blue">
  <div class="border">
    <h2 class="m0">.md-flex</h2>
  </div>
  <div class="flex-auto border">Div</div>
  <div class="border">Div</div>
</div>
<div class="lg-flex flex-center mb2 blue">
  <div class="border">
    <h2 class="m0">.lg-flex</h2>
  </div>
  <div class="flex-auto border">Div</div>
  <div class="border">Div</div>
</div>
```

## Child elements
To control the size and behavior of child elements, use these utilities.

### .flex-auto
To make an element grow or shrink as needed, use the `.flex-auto` utility.
```html:example
<div class="flex">
  <a href="#" class="button button-nav-light">Home</a>
  <a href="#" class="button button-nav-light">Nav Item</a>
  <a href="#" class="button button-nav-light">Nav Item</a>
  <div class="flex-auto blue border"></div>
  <a href="#" class="button button-nav-light">Nav Item</a>
</div>
```

### .flex-grow
To make an element grow, but not shrink, use the `.flex-auto` utility.
```html:example
<div class="flex">
  <a href="#" class="button button-nav-light">Home</a>
  <a href="#" class="button button-nav-light">Nav Item</a>
  <a href="#" class="button button-nav-light">Nav Item</a>
  <div class="flex-grow blue border"></div>
  <a href="#" class="button button-nav-light">Nav Item</a>
</div>
```

### .flex-none
To prevent an element from growing or shrinking, use the `.flex-none` utility.
```html:example
<div class="flex">
  <a href="#" class="flex-auto m1 button button-blue">Home</a>
  <a href="#" class="flex-auto m1 button button-blue">Nav Item</a>
  <a href="#" class="flex-auto m1 button button-blue">Nav Item</a>
  <a href="#" class="flex-none m1 button button-blue">Nav Item</a>
</div>
```


## Parent Element Utilities

```css
.flex { display: flex }
.flex-column  { flex-direction: column }
.flex-wrap    { flex-wrap: wrap }
.flex-center   { align-items: center }
.flex-baseline { align-items: baseline }
.flex-stretch  { align-items: stretch }
.flex-start    { align-items: flex-start }
.flex-end      { align-items: flex-end }
.flex-justify-start   { justify-content: flex-start }
.flex-justify-end     { justify-content: flex-end }
.flex-justify-center  { justify-content: center }
.flex-justify-around  { justify-content: space-around }
.flex-justify-between { justify-content: space-between }
```

## Child Element Utilities

```css
.flex-first { order: -1 }
.flex-last  { order: 1024 }
.flex-auto { flex: 1 1 auto }
.flex-grow { flex: 1 0 auto }
.flex-none { flex: none }
```

## Custom Media Queries
Adjust these custom media query values to change the breakpoints.

```css
@custom-media --breakpoint-sm (min-width: 40em);
@custom-media --breakpoint-md (min-width: 52em);
@custom-media --breakpoint-lg (min-width: 64em);
```

