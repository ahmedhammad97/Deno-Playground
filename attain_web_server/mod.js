import { App, parser } from "https://deno.land/x/attain/mod.ts";
import router from './router.js';

const app = new App();
app.use(parser);

app.use('/hello', router);

app.get('/', (req, res) => {
    res.send("Hey there!");
});

app.listen({port: 8080});
console.log("Running on port 8080");