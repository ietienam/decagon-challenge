const canBalance = require('./canBalanceSolution');

test('for an obvious case where the array can be split evenly', () => {
  expect(canBalance([1, 2, 3, 4, 5, 6, 6, 7, 8])).toEqual([6, 3]);
});

test('for an obvious case where the array cannot be split evenly', () => {
  expect(canBalance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(-1);
});

test('for when the array has all zeros with a one at the end', () => {
  expect(canBalance([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])).toBe(-1);
});

test('for when the array has all ones but cannot be split', () => {
  expect(canBalance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(-1);
});

test('for when the array has all ones but can be split', () => {
  expect(canBalance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual([9, 9]);
});

test('for when the array some negative numbers', () => {
  expect(canBalance([3, 18, -5, -44, 23, 26, 20, -1, 0, -10, 30])).toEqual([10, 1]);
});

test('Alternating cases of positive and negative equivalent with 1 at the end', () => {
  expect(canBalance([-10, +10, -10, +10, -10, +10, -10, +10, -10, +10, -10, +10,
    -10, +10, -10, +10, -10, +10, -10, +10, -10, +10, 1])).toBe(-1);
});

test('for a simple case of positive and negative numbers', () => {
  expect(canBalance([1, 0, 0, -1])).toBe(-1);
});

test('for a tricky case of decimal numbers', () => {
  expect(canBalance([0.1, 0.2, 0.3])).toBe(-1);
});
