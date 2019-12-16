const wordLength = require("./WordLengthSolution");


test(`Expect Word length of ["a", "bb", "a", "bb"] to be Map{'a' : 1, 'b': 2}`, () => {
    let returnedMap = new Map ([["a", 1], ["bb" ,  2]])
    expect(wordLength(["a", "bb", "a", "bb"])).toEqual(returnedMap);
})


test(`Expect Word length of ["aba", "cdda", "that", "this", "ddac"] to be Map { 'aba' => 3, 'cdda' => 4, 'that' => 4, 'this' => 4, 'ddac' => 4 }`, () => {
    let returnedMap = new Map ([["aba", 3], ["cdda" ,  4], ["that", 4], ["this", 4], ["ddac", 4]])
    expect(wordLength(["aba", "cdda", "that", "this", "ddac"])).toEqual(returnedMap);
})

test(`Expect Word length of ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"] to be Map {'the' => 3,'quick' => 5,'brown' => 5,'fox' => 3,'jumped' => 6,'over' => 4,'lazy' => 4,'dog' => 3 }`, () => {
    let returnedMap = new Map ([['the', 3],['quick', 5],['brown', 5] ,['fox', 3],['jumped', 6],['over',  4],['lazy', 4],['dog', 3]])
    expect(wordLength(["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"])).toEqual(returnedMap);
})

test(`Expect Word length of ["a", "bb", "a", "b"] to be Map{'a' : 1, 'b': 2}`, () => {
    let returnedMap = new Map ([["a", 1], ["bb" ,  2], ["b", 1]])
    expect(wordLength(["a", "bb", "a", "b"])).toEqual(returnedMap);
})

test(`Expect Word length of ["a", "bab", "ba", "b"] to be Map{'a' : 1, 'bab': 3, 'ba': 2, 'b':1}`, () => {
    let returnedMap = new Map ([["a", 1], ["bab" ,  3], ["ba", 2],["b", 1]])
    expect(wordLength(["a", "bAb", "ba", "b"])).toEqual(returnedMap);
})
