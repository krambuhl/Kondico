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

###Kondico(func, [options])

__Example__

```js
var isDefined = Kondico(function(val) { return val !== undefined;  }); 
isDefined(640) // true
isDefined(undefined) // false
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
