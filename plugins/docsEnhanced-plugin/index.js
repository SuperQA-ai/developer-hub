const fs = require('fs-extra');
const path = require('path');
const docsPluginExports = require('@docusaurus/plugin-content-docs');
const docsPlugin = docsPluginExports.default;

async function docsPluginEnhanced(context, options) {
  const docsPluginInstance = await docsPlugin(context, options);

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

      // Add canonical tags to HTML files
      docs.map((post) => {
        const { permalink, frontMatter } = post;

        const htmlFilePath = path.join(outDir, permalink, 'index.html');

        if (fs.existsSync(htmlFilePath)) {
          let htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
          const canonicalTag = `<link rel="canonical" href="${frontMatter.canonical_url || "https://developer.superqa.ai" + permalink
            }" />`;
          htmlContent = htmlContent.replace(
            /<\/head>/i,
            `  ${canonicalTag}\n</head>`
          );

          fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
        }

        return post.frontMatter.title;
      });
    },
  };
}

module.exports = {
  ...docsPluginExports,
  default: docsPluginEnhanced,
};
