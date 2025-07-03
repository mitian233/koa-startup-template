import Koa from 'koa';
import dotenv from 'dotenv';

dotenv.config();

const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = 'Hello World!';
})

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening on http://localhost:${port}/`);