export const parseInput = async (day: number) => {
  return (await Deno.readTextFile(
    `./src/day${day > 9 ? day : "0" + day}/input.txt`,
  )).trimEnd().split(/\n/);
};
