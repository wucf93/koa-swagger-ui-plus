# koa-swagger-ui-plus

SwagerUi 4.0 middleware for koa

## Installation

```bash
$ npm install koa-swagger-ui-plus
```

## API

```js
const Koa = require("koa");
const app = new Koa();
app.use(
  require("koa-swagger-ui-plus")({
    url: "https://petstore.swagger.io/v2/swagger.json",
  })
);
```

### Options

- `routePrefix` route where the view is returned,must begin with "/", (defaults to "/docs")
- `gzip` Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. (defaults to true).
- `url` The URL pointing to API definition (normally swagger.json or swagger.yaml). Will be ignored if urls or spec is used
- `urls` If true, serves after `return next()`, allowing any downstream middleware to respond first.
- `spec` A JavaScript object describing the OpenAPI definition. When used, the url parameter will not be parsed. This is useful for testing manually-generated definitions without hosting them

## Example

```js
const SwaggerUIPlus = require("koa-swagger-ui-plus");
const Koa = require("koa");
const app = new Koa();

app.use(
  SwaggerUIPlus({
    routePrefix: "/swagger",
    url: "https://petstore.swagger.io/v2/swagger.json",
  })
);

app.listen(3000);

// visit http://localhost:3000/swagger
console.log("listening on port 3000");
```

### See also

- [swagger-ui](http://github.com/swagger-api/swagger-ui) Swagger UI official documentation

## License

MIT
