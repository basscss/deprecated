# Basscss Table Object
CSS layout module to vertically center elements for use with Rework.

http://basscss.com

## Usage

Compile with Rework, using the following plugins:
- [rework-npm](https://github.com/reworkcss/rework-npm)
- [rework-custom-media](https://github.com/reworkcss/rework-custom-media/)

Basscss Table Object also works with:
- [Basswork](https://github.com/jxnblk/basswork)
- [Suitcss Preprocessor](https://github.com/suitcss/preprocessor)

# Defaults

## Custom Media Queries
To edit these defaults, define new custom media queries afer importing basscss-utilities.

```css
@custom-media --breakpoint-sm (min-width: 40em);
@custom-media --breakpoint-md (min-width: 52em);
@custom-media --breakpoint-lg (min-width: 64em);
```

---

# Using this Modules

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
  <div class="table-cell px2">Padded</div>
  <div class="table-cell px2">Padded</div>
</div>
```

---

## License
The MIT License (MIT)

