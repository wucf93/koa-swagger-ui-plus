import koa from 'koa';
import KoaSwaggerUIPlus from '../src';

const app = new koa();

app.use(KoaSwaggerUIPlus());

app.listen(3000);