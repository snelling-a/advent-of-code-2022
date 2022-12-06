import { parseInput } from "../utils/parseInput.ts";

export const input = (await parseInput(2)).map((move) => move.split(" "));

export const elfMoves = {
	A: 1, // rock
	B: 2, // paper
	C: 3, // scissors
} as const;

export const myMoves = {
	X: 1, // rock
	Y: 2, // paper
	Z: 3, // scissors
} as const;

export const outcomePoints = {
	LOSE: 0,
	DRAW: 3,
	WIN: 6,
};

export const tournament = (input: string[][]) => {
	return input.reduce((acc, [elf, me]) => {
		const elfMove = elfMoves[elf as keyof typeof elfMoves];
		const myMove = myMoves[me as keyof typeof myMoves];

		switch (true) {
			case elfMove === elfMoves.A && myMove === myMoves.Y:
			case elfMove === elfMoves.B && myMove === myMoves.Z:
			case elfMove === elfMoves.C && myMove === myMoves.X:
				return acc + outcomePoints.WIN + myMove;
			case elfMove === elfMoves.A && myMove === myMoves.Z:
			case elfMove === elfMoves.B && myMove === myMoves.X:
			case elfMove === elfMoves.C && myMove === myMoves.Y:
				return acc + outcomePoints.LOSE + myMove;
			case elfMove === elfMoves.A && myMove === myMoves.X:
			case elfMove === elfMoves.B && myMove === myMoves.Y:
			case elfMove === elfMoves.C && myMove === myMoves.Z:
				return acc + outcomePoints.DRAW + myMove;
			default:
				return acc;
		}
	}, 0);
};

const solution = tournament(input);

console.log(solution);
