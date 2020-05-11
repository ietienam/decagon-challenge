function solution(P, C) {
    //Provide Your solution here
    var players = P;
    var courts = C;
    var numOfGames = 0;
    if (players % 2 !== 0) {
      players -= 1;
    }
    for (var i = players; i > 0; i -= 2) {
      if (courts === 0) {
        break;
      }
      numOfGames += 1;
      courts -= 1;
    }
    return numOfGames;
}

module.exports = solution;
