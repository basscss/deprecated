# Basscss Grid

Grid layout module for use with Rework.

http://basscss.com

# Usage

Compile with Rework, using the following plugins:
- [rework-npm](https://github.com/reworkcss/rework-npm)
- [rework-vars](https://github.com/reworkcss/rework-vars)
- [rework-custom-media](https://github.com/reworkcss/rework-custom-media/)
- [rework-calc](https://github.com/reworkcss/rework-calc/)

Basscss Grid also works with:
- [Basswork](https://github.com/jxnblk/basswork)
- [Suitcss Preprocessor](https://github.com/suitcss/preprocessor)

# Defaults

## Custom Media Queries
To edit these defaults, define new custom media queries afer importing basscss-grid.

```css
@custom-media --breakpoint-sm (min-width: 40em);
@custom-media --breakpoint-md (min-width: 52em);
@custom-media --breakpoint-lg (min-width: 64em);
```

## Variables
To edit these defaults, define new variables after importing basscss-grid.

```css
:root {
  --container-width: 64em;
}
```

