type Prefixes = string[];

const generateCombinations = (prefixes: Prefixes): string[] => {
  const result: string[] = [''];

  prefixes.forEach((prefix) => {
    result.forEach((combination) => {
      result.push(combination + prefix);
    });
  });

  result.shift(); // Remove first value -> '';

  return result.sort();
}

export default generateCombinations;
