import { join } from "path";
import { SwaggerOptions } from "./interface";

export const generateHtml = (options: Omit<SwaggerOptions, "gzip">) => {
  const getPath = (path: string) => join(options.routePrefix!, path);

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Swagger UI</title>
    <link rel="stylesheet" type="text/css" href="${getPath(
      "./swagger-ui.css"
    )}"/>
    <link rel="icon" type="image/png" href="${getPath(
      "./favicon-32x32.png"
    )}" sizes="32x32" />
    <link rel="icon" type="image/png" href="${getPath(
      "./favicon-16x16.png"
    )}" sizes="16x16" />
    <style>
      html
      {
        box-sizing: border-box;
        overflow: -moz-scrollbars-vertical;
        overflow-y: scroll;
      }

      *,
      *:before,
      *:after
      {
        box-sizing: inherit;
      }

      body
      {
        margin:0;
        background: #fafafa;
      }
    </style>
  </head>

  <body>
    <div id="swagger-ui"></div>

    <script src="${getPath(
      "./swagger-ui-bundle.js"
    )}" charset="UTF-8"> </script>
    <script src="${getPath(
      "./swagger-ui-standalone-preset.js"
    )}" charset="UTF-8"> </script>
    <script>
    window.onload = function() {
      // Begin Swagger UI call region
      const ui = SwaggerUIBundle({
        url: ${JSON.stringify(options.url)},
        urls: ${JSON.stringify(options.urls)},
        spec: ${JSON.stringify(options.spec)},
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout",
        validatorUrl: null
      });
      // End Swagger UI call region

      window.ui = ui;
    };
  </script>
  </body>
</html>
`;
};
