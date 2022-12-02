import { solution } from "./part01.ts";

const topThree = solution.slice(0, 3);

const partTwoSolution = topThree.reduce((a, b) => a + b, 0);

console.log(partTwoSolution);
