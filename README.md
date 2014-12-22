Kondico
=== 

Functional conditions and compositions (using [Formi](https://github.com/krambuhl/Formi)).  AKA Logic gates for formi

###Status


API
---

- `Kondico(boolean, [options])` -> Function
- `Kondico(func, [options])` -> Function
- `Kondico(composer, args..., [options])` -> Function

Static Methods
---

- `Kondico.composer(name)`
- `Kondico.composer(name, function)`

---


Kondico exposes the `Kondico` function.

###Kondico(boolean, [options])

__Example__

```js
var isTrue = Kondico(true);
isTrue(); // ==> true
```

__Options__

Option | Description
--- | ---
once | Only run function body once, cache result
cache | Only run function body once per input value

###Kondico(func, [options])

__Example__

```js
var isDefined = Kondico(function(val) { return val !== undefined;  }); 
isDefined(640) // true
isDefined(undefined) // false
```

###Kondico(composer, funcs..., [options])

__Example__

```js
var not = function(val) { return !val; };
var isUndefined = function(val) { return val === undefined;  };
var isDefined = Kondico(not, isUndefined);

isDefined(640) // true
isDefined(undefined) // false
```


###Kondico.composer(name, func)

__Example__

```js
Kondico.composer('not', function(val) {
    return !val;
});
```

####Built-in Composers

Composer |
--- | ---
not | not(true) === false
or | or(true, false) === true
and | and(true, false) === false
nor | nor(false, false) === true
nand | nand(true, true) === false
xor | xor(true, true) === false
xnor | xand(true, true) === true

###Kondico.composer(name)

__Example__

```js
Kondico.composer('not')(true); // false

// can then be called by string in compositions
var isUndefined = function(val) { return val === undefined;  };
var isDefined = Kondico('not', isUndefined);
```



Example Useages
---

####Media Queries
```js
var smallSize = Kondico(function(val) { return val < 720;  }); 
var largeSize = Kondico(function(val) { return val > 1280; });

// logically the same (nor is faster internally)
var mediumSize = Kondico('nor', smallSize, largeSize);
var mediumSize = Kondico.not(Kondico.or(smallSize, largeSize));

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
