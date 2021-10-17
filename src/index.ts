import { absolutePath } from "swagger-ui-dist";
import serve from "koa-static";
import mount from "koa-mount";
import { generateHtml } from "./template";

import { SwaggerOptions } from "./interface";
import type { Middleware } from "koa";

export default function KoaSwaggerUIPlus(opt?: SwaggerOptions): Middleware {
  const swaggerOptions = Object.assign(
    { routePrefix: "/docs", gzip: true },
    opt || {}
  );

  const swaggerPath = absolutePath();
  const { routePrefix, gzip } = swaggerOptions;

  return mount(routePrefix, async function (ctx, next) {
    if (["/", "/index.html"].includes(ctx.path)) {
      await next();

      if (ctx.method !== "HEAD" && ctx.method !== "GET") return;
      if (ctx.body != null || ctx.status !== 404) return;

      return (ctx.body = generateHtml(swaggerOptions));
    } else {
      await serve(swaggerPath, { gzip })(ctx, next);
    }
  });
}
