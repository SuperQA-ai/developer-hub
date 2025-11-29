import path from 'path';
import { themes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const BASE_URL = process.env.BASE_URL || '/';
function hideIndexFromSidebarItems(items) {
  const result = items.filter((item) => {
    return !(item.type === 'doc' && item.id === 'index');
  });
  return result;
}

const config: Config = {
  title: 'SuperQA Developer Hub',
  tagline:
    'The AI-powered test automation platform. Build, automate, and scale your testing with SuperQA.',
  url: 'https://developer.superqa.ai',
  baseUrl: BASE_URL,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',
  favicon: 'img/favicon.ico',
  customFields: {
    SEGMENT_API_KEY: process.env.SEGMENT_API_KEY,
  },

  //Mermaid Diagram Functionality
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'superqa', // Usually your GitHub org/user name.
  projectName: 'developer-hub', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  future: {
    v4: true,
    experimental_faster: false, // Disabled to avoid rspack panic issues
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        sitemap: {
          // changefreq: 'weekly',
          // priority: 0.5,
          // ignorePatterns: [
          // ],
          // filename: 'sitemap.xml',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // we could also use scss here
        },
        googleTagManager: {
          containerId: 'GTM-MJB7HPB',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'og:image',
        content: 'https://developer.superqa.ai/img/social-card.png',
      },
    ],
    //src: "/img/logo_dlp.svg",
    navbar: {
      title: 'SuperQA Developer Hub',
      logo: {
        alt: 'SuperQA Developer Hub',
        src: '/img/superqa-logo-official.png',
      },
      items: [
        {
          position: 'right',
          type: 'dropdown',
          label: 'Documentation',
          to: 'docs',
          items: [
            // --- Core Documentation ---
            { to: '/docs/platform/overview', label: 'Platform Overview' },
            { to: '/docs/integrations', label: 'Integrations' },
          ],
        },
        {
          label: 'Roadmap',
          position: 'right',
          href: '/roadmap',
        },
        {
          label: 'Release Notes',
          position: 'right',
          href: '/release-notes',
        },

        {
          position: 'right',
          html: '<span class="tool" hover-tooltip="Sign into SuperQA Platform (app.superqa.ai)" tooltip-position="bottom"><button class="button  button--nav">Sign in</button></span>',
          href: 'https://app.superqa.ai/auth/#/signin/?utm_source=website&utm_medium=superqa-developer-hub&utm_campaign=docs&utm_content=sign-in',
        },
        {
          position: 'right',
          html: '<span  class="tool" hover-tooltip="Sign up for SuperQA Platform (app.superqa.ai)" tooltip-position="bottom"><button class=" button button--cta">Sign up</button></span>',
          href: 'https://app.superqa.ai/auth/#/signup/&?utm_source=website&utm_medium=superqa-developer-hub&utm_campaign=docs&utm_content=get-started',
        },
      ],
    },
    footer: {
      // style: "dark",
      links: [
        {
          title: 'SuperQA Platform',
          items: [
            {
              label: 'Overview',
              to: 'https://superqa.ai',
            },
            {
              label: 'Test Automation',
              to: 'https://superqa.ai/test-automation',
            },
            {
              label: 'AI-Powered Testing',
              to: 'https://superqa.ai/ai-testing',
            },
            {
              label: 'Browser Automation',
              to: 'https://superqa.ai/browser-automation',
            },
            {
              label: 'CI/CD Integration',
              to: 'https://superqa.ai/integrations',
            },
            {
              label: 'Jenkins Plugin',
              to: 'https://superqa.ai/jenkins-plugin',
            },
            {
              label: 'API Testing',
              to: 'https://superqa.ai/api-testing',
            },
            {
              label: 'Reporting & Analytics',
              to: 'https://superqa.ai/reporting',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Sign up',
              to: 'https://app.superqa.ai/auth/#/signup/&?utm_source=website&utm_medium=superqa-developer-hub&utm_campaign=docs&utm_content=get-started',
            },
            {
              label: 'API Reference',
              to: 'https://app.superqa.ai/api/docs',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/superqa',
            },
            {
              label: 'Release Notes',
              href: '/release-notes',
            },
            {
              label: 'Roadmap',
              href: '/roadmap',
            },
            {
              label: 'Blog',
              to: 'https://superqa.ai/blog',
            },
            {
              label: 'Support',
              to: 'https://superqa.ai/support',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Use',
              to: 'legal/terms-of-use',
            },
            {
              label: 'Privacy Policy',
              to: 'https://superqa.ai/legal/privacy',
            },
            {
              label: 'Accessibility',
              to: 'legal/accessibility',
            },
            {
              html: "<a href='javascript:void(0)' class='footer__link-item' onclick='window.OneTrust && window.OneTrust.ToggleInfoDisplay()'>Cookie Management</a>",
              // href: "javascript: alert(33)",
            },
            {
              label: 'Do not sell or share my personal information',
              to: 'https://superqa.ai/legal/privacy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SuperQA Inc.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.vsDark,
      additionalLanguages: ['yaml', 'json', 'bash', 'python', 'git', 'java', 'powershell'],
    },
    colorMode: {
      defaultMode: 'light',
      // disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    utmCookie: {
      prefix: 'utm_',
    },
    rss: {
      rssPath: 'release-notes/rss.xml',
      rssTitle: 'SuperQA Release Notes',
      copyright: 'SuperQA Inc.',
      rssDescription: 'SuperQA Release Notes',
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    'docusaurus-plugin-sass',
    [
      path.resolve(__dirname, './plugins/docs-rss-plugin'),
      {
        id: 'release-notes',
        path: 'release-notes',
        routeBasePath: 'release-notes',
        exclude: ['**/shared/**', '**/static/**', '**/content/**'],
        sidebarPath: require.resolve('./sidebars-release-notes.js'),
        editUrl: 'https://github.com/superqa/developer-hub/tree/main',
        async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          const sidebarItemsWithoutIndex = hideIndexFromSidebarItems(sidebarItems);
          return sidebarItemsWithoutIndex;
        },
      },
    ],
    // redirect plugin start
    [
      path.resolve(__dirname, './plugins/docsEnhanced-plugin'),
      {
        id: 'docs1',
        path: 'docs',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/superqa/developer-hub/tree/main', // /tree/main/packages/create-docusaurus/templates/shared/
        // include: ["tutorials/**/*.{md, mdx}", "docs/**/*.{md, mdx}"],
        exclude: ['**/shared/**', '**/static/**', '**/content/**'],
        routeBasePath: 'docs', //CHANGE HERE
        showLastUpdateTime: false,
        remarkPlugins: [
          [
            remarkMath,
            {
              strict: false,
            },
          ],
        ],
        rehypePlugins: [
          [
            rehypeKatex,
            {
              strict: false,
            },
          ],
        ],
      },
    ],

    [
      path.resolve(__dirname, './plugins/docsEnhanced-plugin'),
      {
        id: 'roadmap',
        path: 'roadmap',
        sidebarPath: false,
        editUrl: 'https://github.com/superqa/developer-hub/tree/main', // /tree/main/packages/create-docusaurus/templates/shared/
        // include: ["tutorials/**/*.{md, mdx}", "docs/**/*.{md, mdx}"],
        exclude: ['**/shared/**', '**/static/**'],
        routeBasePath: 'roadmap', //CHANGE HERE
        showLastUpdateTime: true,
      },
    ],

    path.join(__dirname, '/plugins/utmcookie-plugin'),
    path.join(__dirname, '/plugins/focusOnAnchor-plugin'),
  ],
  clientModules: [
    path.join(__dirname, '/client-modules/searchBar'),
    path.join(__dirname, '/client-modules/iframeEmbed'),
    // path.join(__dirname, '/client-modules/chatbot'),
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
