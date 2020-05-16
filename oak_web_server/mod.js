import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './router.js';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
console.log("Running on 8080");