const twoSumIndex = require('./two-sum-index') 

describe('twoSumIndex tests', () => {
  const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
    { nums: [1, 2, 3, 4, 5], target: 10, expected: null },
    { nums: [0, -1, 2, -3, 1], target: -2, expected: [3, 4] },
    { nums: [1, 5, 1, 5], target: 10, expected: [1, 3] },
    { nums: [1, 2], target: 3, expected: [0, 1] },
    { nums: [1, 2], target: 4, expected: null },
    { nums: [], target: 0, expected: null },
    { nums: [5], target: 5, expected: null },
  ]

  test.each(testCases)(
    '',
    ({ nums, target, expected }) => {
      const result = twoSumIndex(nums, target)
      expect(result).toEqual(expected)
    }
  )
})