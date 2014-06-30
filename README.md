# Dividize

A jQuery plugin/snippet to evenly divide and wrap selected elements into a set number of groups.

## Description
Dividize is a simple jQuery solution for wrapping a bunch of elements in a set number of groups. A common use case, for example, might be splitting a long `<ul>` list into three columns with an equal (or as close to possible) number of `<li>`'s in each column. While the [CSS columns spec](http://www.w3schools.com/cssref/css3_pr_columns.asp) is pretty cool, it's still [not totally supported](http://caniuse.com/#search=column), so Dividize is a great solution in the meantime.
 
## Installation
Simply include dividize.js in your project, either by including the entire file with something like `<script src="/js/dividize.js"></script>`, or by copying the file's contents into your pre-existing JavaScript.

## Usage
Dividize provides you with the `dividize()` function, which can be used as follows:
```
jQuery('.my-elements').dividize(divNumber, wrapperElement, className);
```
The function attributes include:

`divNumber` - (int) the number of groups to split the elements into.

`wrapperElement` - (string) the HTML tag to use as the wrapper (e.g. `div`, `span`, `b`).

`className` - (string) the class to apply to the wrapper tags.

