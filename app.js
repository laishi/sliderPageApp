import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";


const router = new Router();
router
  .get("/index", (context) => {
    context.response.body = "Hello world!";
  })
  .post("/api", (context) => {
    console.log(context)
  })
  .get("/api", (context) => {
    context.response.body = " api!";
    console.log(context)
  })
  .get("/book", (context) => {
    context.response.body = "books";
    console.log(context)
  })
  .get("/book/:id", (context) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  });


const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/public`,
    index: "index.html",
  });
});
await app.listen({ port: 3838 });
console.log("http://localhost:3838/")
