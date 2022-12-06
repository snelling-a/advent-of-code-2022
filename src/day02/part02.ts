import { elfMoves, input, myMoves, outcomePoints } from "./part01.ts";

const tournament = (input: string[][]) => {
	return input.reduce((acc, [elf, outcome]) => {
		const elfMove = elfMoves[elf as keyof typeof elfMoves];
		switch (outcome) {
			case "X": // lose
				if (elfMove === elfMoves.A) {
					acc += myMoves.Z;
				}
				if (elfMove === elfMoves.B) {
					acc += myMoves.X;
				}
				if (elfMove === elfMoves.C) {
					acc += myMoves.Y;
				}

				return acc + outcomePoints.LOSE;
			case "Y": // draw
				return acc + elfMove + outcomePoints.DRAW;
			case "Z": // win
				if (elfMove === elfMoves.A) {
					acc += myMoves.Y;
				}
				if (elfMove === elfMoves.B) {
					acc += myMoves.Z;
				}
				if (elfMove === elfMoves.C) {
					acc += myMoves.X;
				}

				return acc + outcomePoints.WIN;
			default:
				return acc;
		}
	}, 0);
};

const solution = tournament(input);

console.log(solution);

// NOT
// 7275 (too low)
