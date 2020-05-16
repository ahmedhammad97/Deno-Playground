import { moment } from "https://deno.land/x/moment/moment.ts";

const args = Deno.args;
const time = args[0]
const name = args[1]

let currTime = moment();
let lateness = currTime.subtract(time, 'hours');
let lateHours = lateness.format("H");

let msg = `Hi ${name}! You are ${lateHours} hour late!`;
console.log(msg);

// Usage: deno run cmdline.js (Hour in 24-hour format) (Name)
// Ex. deno run cmdline.js 15 Hammad