# Dividize

A jQuery plugin/snippet to evenly divide and wrap selected elements into a set number of groups.

## Description
Dividize is a simple jQuery solution for wrapping a bunch of elements in a set number of groups. A common use case, for example, might be splitting a long `<ul>` list into three columns with an equal (or as close to possible) number of `<li>`'s in each column. While the [CSS columns spec](http://www.w3schools.com/cssref/css3_pr_columns.asp) is pretty cool, it's still [not totally supported](http://caniuse.com/#search=column), so Dividize is a great solution in the meantime.
 
## Installation
Simply include dividize.js in your project after you've included jQuery with somerthing like: 
```
<script src="/path/to/dividize.js"></script>
```

Alternately you can copy the contents of dividize.js into a pre-existing JavaScript file in your project.

## Usage
Dividize provides you with the `dividize()` function, which can be used as follows:
```
jQuery('.my-elements').dividize(divNumber, wrapperElement, className);
```
The function attributes include:

`divNumber` - (int) the number of groups to split the elements into.

`wrapperElement` - (string) the HTML tag to use as the wrapper (e.g. `div`, `span`, `b`).

`className` - (string) the class to apply to the wrapper tags.

## Example
The following code divides unordered list items into 3 groups, and wraps each group in a `<div class="my-group">` element.
```
jQuery('ul#my-list li').dividize( 3, 'div', 'my-group'); 
```

So this line of jQuery turn this Initial HTML:
```
<ul id="my-list">
 <li>Item 1</li>
 <li>Item 2</li>
 <li>Item 3</li>
 <li>Item 4</li>
 <li>Item 5</li>
 <li>Item 6</li>
 <li>Item 7</li>
 <li>Item 8</li>
 <li>Item 9</li>
 <li>Item 10</li>
</ul>
```

Into:
```
<ul id="my-list">
 <div class="my-group">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
 </div>
 <div class="my-group">
  <li>Item 5</li>
  <li>Item 6</li>
  <li>Item 7</li>
 </div>
 <div class="my-group">
  <li>Item 8</li>
  <li>Item 9</li>
  <li>Item 10</li>
 </div>
</ul>
```
