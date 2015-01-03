Kondico
=== 

Functional conditions and compositions (uses [Formi](https://github.com/krambuhl/Formi)).

###Status

[ ![Codeship Status for krambuhl/Kondico](https://codeship.com/projects/94cccd00-7494-0132-a4c0-7eda6227987e/status?branch=develop)](https://codeship.com/projects/55036)

[![Code Climate](https://codeclimate.com/github/krambuhl/Kondico/badges/gpa.svg)](https://codeclimate.com/github/krambuhl/Kondico)

[![Test Coverage](https://codeclimate.com/github/krambuhl/Kondico/badges/coverage.svg)](https://codeclimate.com/github/krambuhl/Kondico)

API Docs
---

Kondico exposes the `Kondico` function.

- `Kondico(boolean, [options])` -> Function
- `Kondico(func, [options])` -> Function


####Kondico(boolean, [options])

Defines function that returns input boolean.

__Example__

```js
var isTrue = Kondico(true);
isTrue(); // ==> true
```

####Kondico(func, [options])

Defines function that returns result of a called function.

__Example__

```js
var isDefined = Kondico(function(val) { return val !== undefined;  }); 
isDefined(640) // true
isDefined(undefined) // false
```

###Kondico Options

Option | Value | Description
--- | --- | ---
once | Boolean | Only run function body once, cache result
memoize | Boolean/Function | Only run function body once per input value

####Kondico(func, { once: true })

Defines a function that runs it's body a single time, any subsequent calls will return that same value without running that function body.

__Example__

```js
var hasJquery = Kondico(function() {
    return typeof jQuery === 'function';
}, { once: true });

if (hasJquery()) {
    $('html').addClass('has-jquery');
    alert('has jquery: ' + hasJquery());
}
```

####Kondico(func, { memoize: true })

Defines a function that runs it's body a single time for each unique input, any subsequent calls with the same input will return the same value without running the function body.  

`memoize` option can be a boolean value or a hashFunction that returns an id used to cache a functions return; hashFunction will return first argument by default.

__Example__

```js
var has = Kondico(function(val) {
    return typeof val === 'function';
}, { memoize: true });

if (has(jQuery)) {
    $('html').addClass('has-jquery');
    alert('has jquery: ' + has(jQuery));
}
```

##Compositions (Logic Gates)

Kondico defines logic gate function for composing more complex conditions.  All functions will operate on any number of arguments.  `not` returns an array if more than one argument is passes.

- `Kondico.not`
- `Kondico.or`
- `Kondico.and`
- `Kondico.nor`
- `Kondico.nand`
- `Kondico.xor`
- `Kondico.xnor`


---

Example Useages
---

####Media Queries
```js
var smallSize = Kondico(function(val) { return val < 720;  }); 
var largeSize = Kondico(function(val) { return val > 1280; });
var mediumSize = Kondico.nor(smallSize, largeSize);

// example window size (960x720)
smallSize(window.innerWidth) // false
mediumSize(window.innerWidth) // true
largeSize(window.innerWidth) // false
```

####Feature Detection
```js
var hasCanvas = Kondico(function() {
    var elem = createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}, { once: true }); 
```
