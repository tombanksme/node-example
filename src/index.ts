import Koa from "koa";

const PORT = 8080;

const app = new Koa();
app.use(async (ctx) => {
  ctx.body = `Hello ${process.env.NAME}`;
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
