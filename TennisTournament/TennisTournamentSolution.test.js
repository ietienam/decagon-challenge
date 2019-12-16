const solution = require("./TennisTournamentSolution");

test("Less players more courts", () => {
    expect(solution(2, 9)).toEqual(1)
})

test("Two players but no court", () => {
    expect(solution(2, 0)).toEqual(0)
})

test("No players but Two court", () => {
    expect(solution(0, 2)).toEqual(0)
})

test("Three players 1 court", () => {
    expect(solution(3, 1)).toEqual(1)
})

test("Odd players less courts", () => {
    expect(solution(7, 2)).toEqual(2)
})

test("Even players more courts", () => {
    expect(solution(6, 12)).toEqual(3)
})

test("Even players less courts", () => {
    expect(solution(6, 2)).toEqual(2)
})
test("Odd players more courts", () => {
    expect(solution(7, 9)).toEqual(3)
})

test("High number of players", () => {
    expect(solution(99, 23)).toEqual(23)
})

test("High number of players", () => {
    expect(solution(102, 102)).toEqual(51)
})