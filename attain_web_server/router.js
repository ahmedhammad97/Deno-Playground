import { Router } from "https://deno.land/x/attain/mod.ts";
const router = new Router()

router.get('/:name', (req, res) => {
    res.status(200).send("Hello " + req.params.name);
});

router.post('/', (req, res) => {
    console.log(req.params);
    res.status(200).send("Processed");
});

router.get('/', (req, res) => {
    console.log(req.query); // Not working
    res.status(200).send("Done");
})

export default router;