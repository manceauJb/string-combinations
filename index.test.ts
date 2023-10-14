import generateStringCombinations from "./index";

test('[] => []', () => {
  const result = generateStringCombinations([]);
  expect(result).toStrictEqual([]);
});

test('["a"] => ["a"]', () => {
  const result = generateStringCombinations(["a"]);
  expect(result).toStrictEqual(["a"]);
});

test('["a", "b"] => ["a", "ab", "b"]', () => {
  const result = generateStringCombinations(["a", "b"]);
  expect(result).toStrictEqual(["a", "ab", "b"]);
});

test('["a","b","c"] => ["a", "ab", "abc", "ac", "b", "bc", "c"]', () => {
  const result = generateStringCombinations(["a", "b", "c"]);
  expect(result).toStrictEqual(["a", "ab", "abc", "ac", "b", "bc", "c"]);
});

test('["a", "b", "c", "d"] => ["a", "ab", "abc", "abcd", "abd", "ac", "acd", "ad", "b", "bc", "bcd", "bd", "c", "cd", "d"]', () => {
  const result = generateStringCombinations(["a", "b", "c", "d"]);
  expect(result).toStrictEqual(["a", "ab", "abc", "abcd", "abd", "ac", "acd", "ad", "b", "bc", "bcd", "bd", "c", "cd", "d"]);
});

test('["ab","cd"] => ["ab", "abcd", "cd"]', () => {
  const result = generateStringCombinations(["ab", "cd"]);
  expect(result).toStrictEqual(["ab", "abcd", "cd"]);
});

test('[["c", "n", "s"]] => ["c", "cn", "cns", "cs", "n", "ns", "s"]', () => {
  const result = generateStringCombinations(["c", "n", "s"]);
  expect(result).toStrictEqual(["c", "cn", "cns", "cs", "n", "ns", "s"]);
});
