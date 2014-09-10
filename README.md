# Table Object
A simple CSS layout module to vertically center elements

http://jxnblk.github.io/table-object

## Basic Usage

``` html
<div class="table">
  <div class="table-cell"></div>
  <div class="table-cell"></div>
  <div class="table-cell"></div>
</div>
```

## Widths
The Table Object can be used in combination with width utilities, such as a grid system.
By default `.table-cell` widths are all equal.

``` html
<style>
  .col-3 { width: 25%; }
  .col-9 { width: 75%; }
</style>
<div class="table">
  <div class="table-cell col-3">
  <div class="table-cell col-9">
</div>
```

## Padding
Add padding to any `.table-cell`. Do *not* add padding to the `.table` element.

``` html
<div class="table">
  <div class="table-cell pad">Padded</div>
  <div class="table-cell pad">Padded</div>
</div>
```

---

## License
The MIT License (MIT)

Copyright (c) 2014 Brent Jackson

