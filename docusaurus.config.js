// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HUAWEI HiCar',
  tagline: 'is so cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hicar.cool',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en','zh-CN'],
  },

  scripts: [
    {src: 'https://hm.baidu.com/hm.js?8e09897518f8bb3092c89749c21192b4',  async: true}
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '全部消息',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HUAWEI HiCar',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教程',
          },
          //{to: '/box', label: '周边', position: 'left'},
          {to: '/blog', label: '最新消息', position: 'left'},
          {
            href: 'https://developer.huawei.com/consumer/cn/HiCar',
            label: 'HiCar官网',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '教程',
                to: '/docs/intro',
              },
              //{
              //  label: '周边',
              //  to: '/box',
              //},
              {
                label: '最新消息',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: '支持的车型',
                href: 'https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/available-models-0000001226230373',
              },
              {
                label: '支持的手机',
                href: 'https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/available-phones-0000001227954439',
              },
              {
                label: '支持的应用',
                href: 'https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/available-apps-0000001180830678',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                html: `
                    <img src="https://hicar.cool/img/wechatcode.png" alt="微信公众号" width="270"  />
                  `,
              },
          
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HiCar情报站, Inc. Build with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
