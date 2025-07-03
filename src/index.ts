import Koa from 'koa';
import Router from "koa-router";
import dotenv from 'dotenv';

dotenv.config();

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    ctx.body = 'Hello Koa Router!';
})

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});