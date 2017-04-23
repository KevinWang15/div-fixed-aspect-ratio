div-fixed-aspect-ratio
===========================
**Warning: This is a purely experimental project, at its current state, there can be a lot of bugs and compatibility issues. Don't use it in production!**

**For a more reliable subset of this project, you may be interested in [KevinWang15/img-with-aspect-ratio](https://github.com/KevinWang15/img-with-aspect-ratio)**

Turn a div into any aspect ratio you specify. Unconventional but effective hack, no obscure css, supports all css units, supports max/min-width/media query, doesn't rely on JS watchers or callbacks.
# Demo
[Check out the demo!]()

# How it works
It generates an image with certain aspect ratio in memory, uses the image to make the browser calculate the width/height of the element and recalculate & apply them automatically when resized (keeping the aspect ratio).

# Advantages
* Once set up, no JavaScript is needed any more, doesn't rely on JS watchers or callbacks.
* No obscure css, plays well with other css (e.g. max-width/min-width/media query).
* Supports all css units, 200px or 100%.

# Installation
Download [dist/div-fixed-aspect-ratio.min.js](https://raw.githubusercontent.com/KevinWang15/div-fixed-aspect-ratio/master/dist/div-fixed-aspect-ratio.min.js) and include it in the HTML.

# API
```javascript
window.DivFixedAspectRatio.create
              (element_id, aspectWidth, aspectHeight,
                             primaryAttribute = "width", primaryAttributeValue = "100%");
```

## element_id
Id of the div element

## aspectWidth, aspectHeight
Both are numbers, together they determine the aspect ratio.

## primaryAttribute
According to which attribute should the image resize.
Must be set to either ```width``` or ```height```.

The attribute specified in the ```primaryAttribute``` can later be modified by css or js and produce correct results.

Default value is ```width```.

## primaryAttributeValue
The value of the attribute specified in the ```primaryAttribute```, supports all css length units (e.g. ```50%```, ```200px```).

Default value is ```100%```.

Can be set to "" (empty string) if you wish to specify it in CSS and don't wish to use ```!important```.

# Performance tips
Since in-memory generation of an image is involved, performance is affected by the total pixels of the image.

For the best performance, make ```aspectWidth```/```gcd``` and ```aspectHeight```/```gcd``` as small as possible (where ```gcd``` stands for ```Greatest Common Divisor``` of ```aspectWidth``` and ```aspectHeight```), so that only an image of (```aspectWidth```/```gcd```) * (```aspectHeight```/```gcd```) px is needed.

In other words, make their ```gcd``` as big as possible.

Remember, ```aspectWidth```=10000,```aspectHeight```=6000 is ```4,000,000 times``` faster and more memory-efficient than ```aspectWidth```=10000,```aspectHeight```=6001 ! 

# TODOs
- [ ] Do more tests to cover more cases.
- [ ] JavaScript reconfiguration API. 
- [ ] jQuery plugin. 
- [ ] AngularJS directive. 
- [ ] Angular 2 component. 
- [ ] React component. 

# See also
[A more reliable subset of this project: img-with-aspect-ratio](https://github.com/KevinWang15/img-with-aspect-ratio)