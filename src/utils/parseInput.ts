export const parseInput = async (dayNumber: string) => {
  const rawData = await Deno.readTextFile(
    `./src/day${dayNumber}/input.txt`,
  );

  return rawData.split("\n");
};
