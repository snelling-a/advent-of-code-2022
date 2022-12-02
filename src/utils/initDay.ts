import "https://deno.land/std@0.167.0/dotenv/load.ts";
import { write } from "./write.ts";

export const initDay = async (day: number) => {
  const inputDir = `${Deno.cwd()}/src/day${day > 9 ? day : "0" + day}`;
  const inputPath = inputDir + "/input.txt";

  try {
    await Deno.stat(inputPath);

    write("input already fetched");
  } catch (e) {
    Deno.mkdir(inputDir);

    const input = await fetchInput(day);

    Deno.writeTextFile(inputPath, input);

    write(`day ${day} input fetched\nhappy hackingdays!`);
  }
};
const fetchInput = async (day: number) => {
  const url = `https://adventofcode.com/2022/day/${day}/input`;

  const agent =
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)";

  const cookie = (Deno.env.get("AOC_COOKIE"));

  const resp = await fetch(url, {
    method: "GET",
    headers: {
      cookie,
      Agent: agent,
    },
  });

  return resp.text();
};
