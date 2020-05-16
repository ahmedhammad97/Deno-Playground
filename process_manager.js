import { f64 } from 'https://deno.land/x/rand/mod.ts';
import { get, getAll, kill } from 'https://deno.land/x/process@v0.3.0/mod.ts';
import { assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts";

let processes = await getAll();
let validIds = processes.map(process => {
    return process.pid
}).filter(id => {
    return !isNaN(id)
});

let sortedUniqueIds = [...new Set(validIds)];
let randomId = Math.floor((f64() * sortedUniqueIds.length));
let randomPid = sortedUniqueIds[randomId];

assertNotEquals(await get(randomPid), undefined);
// CAUTION: THIS IS DANGEROUS AND MIGHT KILL AN IMPORTANT PROCESS
await kill(randomPid, {force: true, tree: false});
assertEquals(await get(randomPid), undefined);