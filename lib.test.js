const { test, expect } = require("@jest/globals")
const lib = require("./lib")

test("sum([1, 2]) should be 3", () => {
    expect(lib.sum([1, 2])).toBe(3);
})

test("avg([-5, 5]) should be 0", () => {
    expect(lib.sum([-5, 5])).toBe(0);
})

test("sum([0, 3, 2]) should be 3", () => {
    expect(lib.sum([0, 3, 2])).toBe(3);
})