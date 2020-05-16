import { Router } from "https://deno.land/x/oak/mod.ts";

const philosophers = new Map();
philosophers.set("1", "Aristotle");
philosophers.set("2", "Plato");
philosophers.set("3", "Socrates");

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/philosophers", (context) => {
    context.response.body = Array.from(philosophers.values());
  })
  .get("/philosopher/:id", (context) => {
    if (context.params && context.params.id && philosophers.has(context.params.id)) {
      context.response.body = philosophers.get(context.params.id);
    }
  });

  export default router