const test = require("ava");
const toTypedArray = require("./to-typed-array");

test("converting binary numbers to an uint8array", async t => {
  const nums = [];
  for (let i = 0; i < 100; i++) nums.push(Math.random() >= 0.5 ? 1 : 0);
  const { array: typedArray } = toTypedArray({ data: nums, debug: true });
  t.is(typedArray.constructor.name, "Uint8Array");
});

test("converting  numbers to an uint8array", async t => {
  const nums = [];
  for (let i = 0; i < 100; i++) nums.push(Math.random() >= 0.5 ? 1 : 0);
  const { array: typedArray } = toTypedArray({ data: nums, debug: true });
  t.is(typedArray.constructor.name, "Uint8Array");
});

test("converting  numbers to an int8array", async t => {
  const nums = [];
  for (let i = 0; i < 100; i++) nums.push(Math.random() >= 0.5 ? 1 : -1);
  const { array: typedArray } = toTypedArray({ data: nums, debug: true });
  t.is(typedArray.constructor.name, "Int8Array");
});

test("converting  numbers to a Float32 Array", async t => {
  const nums = [];
  for (let i = 0; i < 100; i++)
    nums.push(Math.round(Math.random() * 1e5) / 1e5);
  const { array: typedArray } = toTypedArray({ data: nums, debug: true });
  t.is(typedArray.constructor.name, "Float32Array");
});

test("converting  numbers to a Float64 Array", async t => {
  const nums = [];
  for (let i = 0; i < 100; i++) nums.push(Math.random());
  const { array: typedArray } = toTypedArray({ data: nums, debug: true });
  t.is(typedArray.constructor.name, "Float64Array");
});
