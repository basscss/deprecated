# Table Object
A simple CSS layout module to vertically center elements

http://jxnblk.github.io/table-object

## Basic Usage
To vertically center elements for screens wider than 40em, follow this pattern:

``` html
<div class="table">
  <div class="table-cell"></div>
  <div class="table-cell"></div>
  <div class="table-cell"></div>
</div>
```

For use at all screen sizes, use the `.mobile-table` version.
``` html
<div class="mobile-table">
  <div class="mobile-table-cell"></div>
  <div class="mobile-table-cell"></div>
  <div class="mobile-table-cell"></div>
</div>
```

## Widths
The Table Object can be used in combination with width utilities, such as a grid system.
By default `.table-cell` widths are all equal.

``` html
<style>
  .grid-3 { width: 25%; }
  .grid-9 { width: 75%; }
</style>
<div class="table">
  <div class="table-cell grid-3">
  <div class="table-cell grid-9">
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

## About
I constantly run into situations where someone wants something vertically aligned in CSS.
This is an attempt to create a highly reusable and flexible method for acheiving that.
Inspired by Harry Robert's
[Flag Object](http://csswizardry.com/2013/05/the-flag-object/)
and Mark Otto's
[Table Grid](http://mdo.github.io/table-grid/).

---

## License
The MIT License (MIT)

Copyright (c) 2014 Brent Jackson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
