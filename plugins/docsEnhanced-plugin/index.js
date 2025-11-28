const fs = require('fs-extra');
const path = require('path');
const docsPluginExports = require('@docusaurus/plugin-content-docs');
const docsPlugin = docsPluginExports.default;

async function docsPluginEnhanced(context, options) {
  const docsPluginInstance = await docsPlugin(context, options);

  const { siteConfig } = context;
  const { themeConfig } = siteConfig; // , title, favicon, url: siteUrl, baseUrl
  const { redirectExport } = themeConfig || {};

  if (!redirectExport) {
    throw new Error(
      `You need to specify 'redirectExport' object in 'themeConfig' with 'destPath' field in it`
    );
  }

  const { destPath } = redirectExport; // sourcePath,

  if (!destPath) {
    throw new Error(
      'You specified the `redirectExport` object in `themeConfig` but the `destPath` field was missing.'
    );
  }

  return {
    ...docsPluginInstance,
    async postBuild(params) {
      const { outDir, content } = params; //, siteConfig

      if (
        !content ||
        !content.loadedVersions ||
        content.loadedVersions.length < 1 ||
        content.loadedVersions[0].docs.length < 1
      ) {
        return null;
      }

      const docs = content.loadedVersions[0].docs;

      const outPutPath = path.join(outDir, destPath);

      const exists = fs.existsSync(outPutPath);
      let strRedirects = '';
      docs.map((post) => {
        const { permalink, frontMatter, source } = post;
        const { title, redirect_from } = frontMatter;

        const htmlFilePath = path.join(outDir, permalink, 'index.html');

        if (fs.existsSync(htmlFilePath)) {
          let htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
          const canonicalTag = `<link rel="canonical" href="${frontMatter.canonical_url || "https://developer.superqa.io" + permalink
            }" />`;
          htmlContent = htmlContent.replace(
            /<\/head>/i,
            `  ${canonicalTag}\n</head>`
          );

          fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
        }

        if (redirect_from) {
          if (Array.isArray(redirect_from)) {
            redirect_from.forEach((al) => {
              strRedirects += `# MD Path : ${source} \r\n${al} ${permalink}\r\n\r\n`;
            });
          } else {
            strRedirects += `# MD Path : ${source} \r\n${redirect_from} ${permalink}\r\n\r\n`;
          }
        }

        return title;
      });

      //Historic and User Generated Redirects, appeneding to _server-redirects
      if (!exists) {
        const serverRedirectsPath = path.resolve(
          __dirname,
          '../../_server-redirects'
        );
        fs.copySync(serverRedirectsPath, outPutPath);
        fs.appendFileSync(outPutPath, strRedirects);
      } else {
        fs.appendFileSync(outPutPath, strRedirects);
      }
    },
  };
}

module.exports = {
  ...docsPluginExports,
  default: docsPluginEnhanced,
};
