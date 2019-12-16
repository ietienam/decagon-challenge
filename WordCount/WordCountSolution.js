function wordCount(arrayOfStrings) {
  var obj = {};
  for(var str of arrayOfStrings) {
    if(obj[str] === undefined) {
      obj[str] = 1;
    } else {
      obj[str] += 1;
    }
  }
  return obj;
}

module.exports = wordCount;
