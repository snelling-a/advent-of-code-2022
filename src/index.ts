import { initDay } from "./utils/initDay.ts";
import { parse } from "https://deno.land/std@0.159.0/flags/mod.ts";

const flags = parse(Deno.args, {
	string: ["day"],
});

initDay(flags.day);
