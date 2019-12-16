const wordCount = require('./WordCountSolution');

test(`Expect the wordCount of ["one", "fish", "two", "fish", "red", "fish", "blue", "fish"] to equal {one: 1, fish: 4, two: 1, red: 1, blue: 1}`, () => {
	expect(wordCount([ 'one', 'fish', 'two', 'fish', 'red', 'fish', 'blue', 'fish' ])).toEqual({ one: 1, fish: 4, two: 1, red: 1, blue: 1 });
});

test(`Expect the wordCount of ["str", "hell", "str", "str"] to equal {str: 3, hell: 1}`, () => {
	expect(wordCount([ 'str', 'hell', 'str', 'str' ])).toEqual({ str: 3, hell: 1 });
});

test(`Expect the wordCount of ["a", "b", "a", "c", "b"] to equal {"a": 2, "b": 2, "c": 1}`, () => {
	expect(wordCount([ 'a', 'b', 'a', 'c', 'b' ])).toEqual({ a: 2, b: 2, c: 1 });
});

test(`Expect the wordCount of [1, "chair", "cane", "chair"] to equal {1: 1, chair: 2, cane: 1}`, () => {
	expect(wordCount([ 1, 'chair', 'cane', 'chair' ])).toEqual({ 1: 1, chair: 2, cane: 1 });
});

test(`Expect the wordCount of ["ch", "chair", "cane", "chair", "ai", "ir"] to equal { ch: 1, chair: 2, cane: 1, ai: 1, ir: 1 }`, () => {
	expect(wordCount([ 'ch', 'chair', 'cane', 'chair', 'ai', 'ir' ])).toEqual({ ch: 1, chair: 2, cane: 1, ai: 1, ir: 1 });
});
