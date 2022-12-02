export const write = async (text: string) => {
  await Deno.stdout.write(
    new TextEncoder().encode(text),
  );
};
