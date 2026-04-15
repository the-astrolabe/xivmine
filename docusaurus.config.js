// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XIVMine', // to be changed
  tagline: 'A FFXIV Savage and Extreme resource collection for old fights.', // to be changed
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://xivmine.pages.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'the-astrolabe', // Usually your GitHub org/user name.
  projectName: 'xivmine', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/the-astrolabe/xivmine/tree/production',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false
      },
      // Replace with your project's social card
      image: 'img/xivmine-social-card.png',
      navbar: {
        title: 'XIVMine',
        logo: {
          alt: 'XIVMine Logo',
          src: 'img/logo.webp',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Resources',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'savageSidebar',
                label: 'Savage Raids',
                to: '/savage-raids'
              },
              {
                type: 'docSidebar',
                sidebarId: 'trialSidebar',
                label: 'Extreme Trials',
                to: '/extreme-trials'
              }
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Info',
            items: [
              {
                label: 'About Us',
                href: '/about'
              },
              {
                label: 'FAQ',
                href: '/faq'
              }
            ]
          },
          {
            position: 'right',
            to: 'https://github.com/the-astrolabe/xivmine',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            position: 'right',
            to: 'https://discord.gg/eByG8hraBM',
            className: 'header-discord-link',
            'aria-label': 'Discord Server',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Savage Raids',
                to: '/savage-raids',
              },
              {
                label: 'Extreme Trials', 
                to: '/extreme-trials',
              }
            ],
          },
          {
            title: 'Info',
            items: [
              {
                label: 'About Us',
                href: '/about'
              },
              {
                label: 'FAQ',
                href: '/faq'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/eByG8hraBM',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/the-astrolabe/xivmine',
              }
            ],
          },
        ],
        copyright: `FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. | © SQUARE ENIX CO., LTD. All rights reserved. | All content © their respective authors.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
