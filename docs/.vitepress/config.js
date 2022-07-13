module.exports = {
  locales: {
    "/": {
      lang: "zh-CN",
      title: "玲珑",
      description: "独立包格式",
    },
    "/en/": {
      lang: "en-US",
      title: "linglong",
      description: "hermetic package format",
    },
  },
  themeConfig: {
    logo: "/assert/logo.svg",
    siteTitle: false,
    sidebar: {
      "/guide/": [
        {
          collapsible: true,
          text: "开始",
          items: [
            { text: "什么是玲珑", link: "/guide/getting-started-why.md" },
            { text: "安装", link: "/guide/getting-started-install.md" },
          ],
        },
        {
          collapsible: true,
          text: "命令行工具",
          items: [{ text: "运行", link: "/guide/ll-cli-run.md" }],
          // TODO：add cli doc to here
        },
        {
          collapsible: true,
          text: "构建工具",
          items: [{ text: "创建项目", link: "/guide/ll-builder-create.md" }],
          // TODO：add builder doc to here
        },
        {
          collapsible: true,
          text: "其他",
          items: [{ text: "常见问题", link: "/guide/faq.md" }],
          // TODO：add builder doc to here
        },
      ],
    },
    locales: {
      "/": {
        nav: [
          {
            text: "商店",
            ariaLabel: "store",
            link: "https://linglong-store.iceyer.net/",
          },
          {
            text: "文档",
            ariaLabel: "doc",
            items: [
              { text: "开始", link: "/guide/getting-started-why.md" },
              { text: "命令行工具", link: "/guide/ll-cli-run.md" },
              { text: "构建工具", link: "/guide/ll-builder-create.md" },
              { text: "常见问题", link: "/guide/faq.md" },
            ],
          },
          {
            text: "Languages",
            ariaLabel: "Language Menu",
            items: [
              { text: "简体中文", link: "/" },
              { text: "English", link: "/en/" },
            ],
          },
        ],
      },
      "/en/": {
        nav: [
          {
            text: "Store",
            ariaLabel: "store",
            link: "https://linglong-store.iceyer.net/",
          },
          {
            text: "Docs",
            ariaLabel: "doc",
            collapsible: true,
            collapsed: true,
            items: [
              { text: "Getting Start", link: "/en/getting-started/why.md" },
              { text: "ll-cli", link: "/en/ll-cli/" },
              { text: "ll-builder", link: "/en/ll-builder/" },
            ],
          },
          {
            text: "Languages",
            ariaLabel: "Language Menu",
            items: [
              { text: "简体中文", link: "/" },
              { text: "English", link: "/en/" },
            ],
          },
        ],
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/linuxdeepin" }],
    footer: {
      message: "Released under the GPLv3 License.",
      //   copyright: "Copyright © 2019-present Iceyer",
    },
  },
};

// function sidebarGuide() {
//   return [
//     {
//       text: 'Introduction',
//       collapsible: true,
//       items: [
//         { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
//         { text: 'Getting Started', link: '/guide/getting-started' },
//         { text: 'Configuration', link: '/guide/configuration' },
//         { text: 'Deploying', link: '/guide/deploying' }
//       ]
//     },
//     {
//       text: 'Writing',
//       collapsible: true,
//       items: [
//         { text: 'Markdown', link: '/guide/markdown' },
//         { text: 'Asset Handling', link: '/guide/asset-handling' },
//         { text: 'Frontmatter', link: '/guide/frontmatter' },
//         { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
//         { text: 'API Reference', link: '/guide/api' }
//       ]
//     },
//     {
//       text: 'Theme',
//       collapsible: true,
//       items: [
//         { text: 'Introduction', link: '/guide/theme-introduction' },
//         { text: 'Nav', link: '/guide/theme-nav' },
//         { text: 'Sidebar', link: '/guide/theme-sidebar' },
//         { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
//         { text: 'Edit Link', link: '/guide/theme-edit-link' },
//         { text: 'Last Updated', link: '/guide/theme-last-updated' },
//         { text: 'Layout', link: '/guide/theme-layout' },
//         { text: 'Home Page', link: '/guide/theme-home-page' },
//         { text: 'Team Page', link: '/guide/theme-team-page' },
//         { text: 'Footer', link: '/guide/theme-footer' },
//         { text: 'Search', link: '/guide/theme-search' },
//         { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
//       ]
//     },
//     {
//       text: 'Migrations',
//       collapsible: true,
//       items: [
//         {
//           text: 'Migration from VuePress',
//           link: '/guide/migration-from-vuepress'
//         },
//         {
//           text: 'Migration from VitePress 0.x',
//           link: '/guide/migration-from-vitepress-0'
//         }
//       ]
//     }
//   ]
// }
