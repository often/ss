# [ss](https://ss.sany.one)
small and secure string generator

## why?
I couldn't find something that works for me, so I made this.

## library documentation
the `lib.js` file exports two functions, `ss` and `random`.

### ss function
the `ss` function takes two parameters, `length` (number) and `characters` (string).

it returns a string (which is the random generated string of the given length and characters).

### random function
the `random` function is a secure replacement for `Math.random`.

it makes use of `crypto.getRandomValues` since the `Math.random` function returns a floating-point, pseudo-random number, which is not entirely random.

## an example of using the library
```js
import { ss, random } from 'https://ss.sany.one/lib.js'

console.log(ss(10, '0123456789'))
console.log(ss(26, 'abcdefghijklmnopqrstuvwxyz'))

console.log(random())
console.log(Math.floor(random() * 10))
```

## license
[0BSD](LICENSE)
