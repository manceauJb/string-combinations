type Prefixes = string[];

const generateCombinations = (
  prefixes: Prefixes,
  prefix: string = ''
): string[] => {
  const result: string[] = [];

  for (let i = 0; i < prefixes.length; i++) {
    const newPrefix = prefix + prefixes[i];

    result.push(newPrefix);
    result.push(...generateCombinations(prefixes.slice(i + 1), newPrefix));
  }

  return result;
};

export default generateCombinations;
