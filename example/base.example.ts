import koa from "koa";
import KoaSwaggerUIPlus from "../src";

const app = new koa();

app.use(
  KoaSwaggerUIPlus({
    url: "https://petstore.swagger.io/v2/swagger.json",
  })
);

app.listen(3000);
