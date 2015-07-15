
This module controls borders and border radii.

## Borders

Add borders with these border utilities.

```html
<div class="p1 m1 border bg-silver">.border</div>
<div class="p1 m1 border-top bg-silver">.border-top</div>
<div class="p1 m1 border-right bg-silver">.border-right</div>
<div class="p1 m1 border-bottom bg-silver">.border-bottom</div>
<div class="p1 m1 border-left bg-silver">.border-left</div>
```

Remove borders with the `.border-none` utility.

```html
<input type="text" class="border-none" placeholder=".border-none" />
```

## Border Radii

Utility styles for border radii can be used to style images and other elements.

```html
<img class="rounded" src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width="64" height="64" />
<img class="circle" src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width="64" height="64" />
<img class="rounded-top" src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width="64" height="64" />
<img class="rounded-right" src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width="64" height="64" />
<img class="rounded-bottom" src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width="64" height="64" />
<img class="rounded-left" src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width="64" height="64" />
```

The `.not-rounded` utility can be used to override default radii.
This is useful for things like input and button groups.

```html
<button class="btn btn-primary not-rounded">Not Rounded</button>
```

