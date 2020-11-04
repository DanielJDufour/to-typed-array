# to-typed-array
To Typed Array: Convert an Array of Numbers to the Typed Array with the Smallest Memory Footprint

# why
If you have a large array of numbers, you may run out of memory.  In order to reduce your memory usage, you can convert it into a typed array.  This library makes sure you convert it to the correct typed array with the least memory consumption while not losing precision.

# install
```js
npm install to-typed-array
```

# usage
```js
const toTypedArray = require("to-typed-array");

const regularArray1 = [0, 255, 128, 35, 84, 12, 54, 42];
const { array: typedArray1 } = toTypedArray({ data: regularArray1 });
// typedArray1 is Uint8Array(8) [ 0, 255, 128, 35, 84,  12,  54, 42 ]

const regularArray2 = [-0.6133, 0.9003, -0.2071, 0.42008]
const { array: typedArray2 } = toTypedArray({ data: regularArray2 });
// typedArray2 is Float32Array(4) [-0.6133000254631042, 0.9003000259399414, -0.2071000039577484, 0.4200800061225891]
```
