function wordLength(arr) {
//code goes here
var map = new Map();
  for(var str of arr) {
    if(!map.has(str)) {
        map.set(str.toLowerCase(), str.length);
    }
  }
  return map;
}

module.exports = wordLength;
