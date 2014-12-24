# Basscss UI Utility Groups

UI group utilities module for Basscss - http://basscss.com

Use group utilities for fine-grained control over visually grouping buttons, form fields, and other elements

## Button Groups
Button groups allow for more flexibility in establishing gestalt and controlling information density.
Use a combination of layout utilities and color extensions to create button groups.
The utilities `.rounded-left`, `.rounded-right`,
and `.not-rounded` can be used to override button and form field border radii.

```html
<div class="inline-block clearfix">
  <button type="button" class="left button-blue rounded-left is-active">Burgers</button>
  <button type="button" class="left button-blue border-left not-rounded">Fries</button>
  <button type="button" class="left button-blue border-left rounded-right">Shakes</button>
</div>
```

Normally, buttons with borders would double up when placed next to each other.
The `.x-group-item` and `.x-group-item-2` utilities
adjust negative margins and focus states to visually collapse borders.

Use the `.x-group-item-2` utility on elements with 2px borders.
Functionally, this is similar to how other frameworks handle button and form input groups,
but with more direct control over styling.

```html
<div class="inline-block clearfix">
  <button type="button" class="left button-blue-outline x-group-item-2 rounded-left is-active">Burgers</button>
  <button type="button" class="left button-blue-outline x-group-item-2 not-rounded">Fries</button>
  <button type="button" class="left button-blue-outline x-group-item-2 rounded-right">Shake</button>
</div>
```

Use `.y-group-item` and `.y-group-item-2` to group elements vertically.

{{ macros.example('button-group-segments-vertical.html') }}

