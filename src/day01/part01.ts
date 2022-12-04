import { parseInput } from "../utils/parseInput.ts";

const input = await parseInput(1);

const parsedInput = input.join().split(",,").map((elf) => {
  return elf.split(",").map((s) => parseInt(s));
});

const solve = (input: number[][]) => {
  const sums = input.map((elf) =>
    elf.reduce((a, b) => {
      return a + b;
    }, 0)
  );

  return sums.sort((a, b) => b - a);
};

export const solution = solve(parsedInput);

console.log(solution[0]);
