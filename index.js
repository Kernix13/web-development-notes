// Function to sort words then strip out repeats
// Used to get unique keywords from different web languages/tools I've used to get ideas for blog posts. I tend to have a lot of repeats...

const commaSeparated = "memoization, hoisting, es6 classes, closures, modules, service worker, indexedDB, web storage, cookie, why need , cookies, cookie options, deleting a cookie, coookie vs storage, accessing , storage, storage event, web worker, what is a promise, why use promises, 3 states of promise, cb Fx, Server-sent events, promise rules, cb in cb, promise chaining, promise.all, promise race method, strict mode, double exclamation, delete operator, typeof operator, undefined, null, null vs undefined, eval, window vs document, accessing history, caps lock on/off, isNaN, isFinite purpose, event bubbling, event capturing, js form submit, op system info, native, host user obj's, tools to debug in js, promises over cb's, attribute vs property, Same-origin policy, Void 0 purpose, JS: compiled or interpreted, what are events, why use preventDefault, why use stopPropogation, steps to return false, recursion, call stack (LIFO), primitive types, value types, reference types, Fx, block, lexical scope, expression vs statement, iife, modules, namespaces, message queue, event loop, setTimeout, setInterval, requestAnimationFrame, js engines, bitwise operators, type arrays, array buffers, DOM & layout trees, Factories & classes, this, call, apply, bind, new, constructor, instanceof, Instances, prototype inheritance, prototype chain, Object.create, Object.assign, map, reduce, filter, pure Fx's, side effects, state mutation, event propogation, closures, high order Fx's, Collections & generators, promises, .then, .catch, async/await, try/catch, data structures, expensive operation, big O notation, algorithms, inheritance, polymorphism, code reuse, design patterns, partial applications, currying, compose, pipe, clean code";

const spaceSeparated = "split sort and filter strings separated by spaces with no repeats repeats repeats";

let commaWords = [];
let spaceWords = [];

function splitStrings(str, separator, output) {
  return str
    .toLowerCase()
    .split(separator)
    .sort((a, b) => a.localeCompare(b))
    .filter(word => {
      if (!output.includes(word)) {
        output.push(word);
      }
    });
}
const commaCount = splitStrings(commaSeparated, ", ", commaWords);
document.getElementById("comma-output").innerHTML = commaWords.join(", ");

splitStrings(spaceSeparated, " ", spaceWords);
document.getElementById("space-output").innerHTML = spaceWords.join(", ");
