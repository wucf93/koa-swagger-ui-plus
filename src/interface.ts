export interface SwaggerOptions {
  // route where the view is returned,must begin with "/", (defaults to "/docs")
  routePrefix?: string;
  // Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. (defaults to true).
  gzip?: boolean | undefined;
  // The URL pointing to API definition (normally swagger.json or swagger.yaml). Will be ignored if urls or spec is used
  url?: string;
  urls?: Array<{ name: string; url: string }>;
  //  A JavaScript object describing the OpenAPI definition. When used, the url parameter will not be parsed. This is useful for testing manually-generated definitions without hosting them
  spec?: Record<string, any>;
}
