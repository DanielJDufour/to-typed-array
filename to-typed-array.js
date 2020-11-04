const getSignificantDigits = require("@extra-number/significant-digits");
const chooseTypedArray = require("choose-typed-array");

module.exports = ({ data: nums, debug, min, max }) => {
  if (debug) console.log("starting to-typed-array with nums:", nums);

  const length = nums.length;
  let all_numbers_are_integers = true;
  let max_significant_digits = 0;

  if (min === undefined || max === undefined) {
    min = max = nums[0];
    for (let i = 1; i < length; i++) {
      const value = nums[i];
      const significant_digits = getSignificantDigits(value);
      if (all_numbers_are_integers && value.toString().includes("."))
        all_numbers_are_integers = false;
      if (significant_digits > max_significant_digits)
        max_significant_digits = significant_digits;
      if (value < min) {
        min = value;
      } else if (value > max) {
        max = value;
      }
    }
  }
  console.log({ min, max });

  const TypedArray = chooseTypedArray({
    min,
    max,
    all_numbers_are_integers,
    max_significant_digits
  });

  const converted = TypedArray.from(nums);

  return { array: converted, min, max };
};
