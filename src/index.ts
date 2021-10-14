import { absolutePath, SwaggerConfigs } from "swagger-ui-dist";
import serve from "koa-static";
import mount from "koa-mount";
import { generateHtml } from "./template";

import type { Middleware } from "koa";

export interface SwaggerOptions extends SwaggerConfigs {
  // route where the view is returned,must begin with "/", (defaults to "/docs")
  routePrefix?: string;
  // Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. (defaults to true).
  gzip?: boolean | undefined;
}

export default function KoaSwaggerUIPlus(opt?: SwaggerOptions): Middleware {
  const { routePrefix = "/docs", gzip = true } = opt || {};
  const swaggerPath = absolutePath();

  return mount(routePrefix, async function (ctx, next) {
    if (["/", "/index.html"].includes(ctx.path)) {
      await next();

      if (ctx.method !== "HEAD" && ctx.method !== "GET") return;
      if (ctx.body != null || ctx.status !== 404) return;

      return (ctx.body = generateHtml(opt));
    } else {
      await serve(swaggerPath, { gzip })(ctx, next);
    }
  });
}
