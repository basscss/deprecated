# Flex Object

CSS layout module using flexbox
<a href="http://jxnblk.com/flex-object" class="hide">jxnblk.com/flex-object</a>

<hr class="border-light-gray">

## Examples

### .flex-wrap
```html:example
<div class="flex flex-wrap">
  <a href="#" class="button button-nav-light">Home</a>
  <a href="#" class="button button-nav-light">Nav Item</a>
  <a href="#" class="button button-nav-light">Nav Item</a>
  <div class="flex-auto"></div>
  <a href="#" class="button button-nav-light">Nav Item</a>
</div>
```

### .flex-center
```html:example
<div class="flex flex-center">
  <div class="flex-auto px2 py4 blue border">
    <h1 class="m0">Big</h1>
  </div>
  <div class="px2 blue border">Small</div>
</div>
```

### .flex-stretch
```html:example
<div class="flex flex-stretch">
  <div class="flex-auto px2 py4 blue border">
    <h1 class="m0">Big</h1>
  </div>
  <div class="px2 blue border">Small</div>
</div>
```

### .flex-stretch with nested content
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

### .flex-column
```html:example
<div class="flex flex-column">
  <div class="blue border">Row</div>
  <div class="blue border">Row</div>
</div>
```

### .flex-auto
```html:example
<div class="flex">
  <a href="#" class="button button-nav-light">Home</a>
  <a href="#" class="button button-nav-light">Nav Item</a>
  <a href="#" class="button button-nav-light">Nav Item</a>
  <div class="flex-auto"></div>
  <a href="#" class="button button-nav-light">Nav Item</a>
</div>
```

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

## Styles

### Parent Element

```css
.flex { display: flex }
.flex-column  { flex-direction: column }
.flex-reverse { flex-direction: row-reverse }
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

### Child Elements

```css
.flex-first { order: -1 }
.flex-last  { order: 1024 }

.flex-auto { flex: 1 1 auto }
.flex-grow { flex: 1 0 auto }
.flex-none { flex: none }

.flex-wrap > div { box-sizing: border-box }
```

