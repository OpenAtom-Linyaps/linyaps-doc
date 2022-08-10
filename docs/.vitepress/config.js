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
    logo: "/asset/logo.svg",
    siteTitle: false,
    sidebar: {
      "/guide/": [
        {
          collapsible: true,
          text: "开始",
          items: [
            // { text: "玲珑是什么", link: "/guide/start/whatis.md" },
            { text: "安装", link: "/guide/start/install.md" },
          ],
        },
        {
          collapsible: true,
          text: "命令行工具",
          items: [
            { text: "简介", link: "/guide/ll-cli/introduction.md" },
            { text: "列出已安装的应用", link: "/guide/ll-cli/list.md" },
            { text: "从远程仓库查询应用", link: "/guide/ll-cli/query.md" },
            { text: "安装应用", link: "/guide/ll-cli/install.md" },
            { text: "运行应用", link: "/guide/ll-cli/run.md" },
            { text: "卸载应用", link: "/guide/ll-cli/uninstall.md" },
            { text: "更新应用", link: "/guide/ll-cli/update.md" },
            { text: "查看运行中的应用", link: "/guide/ll-cli/ps.md" },
            { text: "进入运行中的容器内部", link: "/guide/ll-cli/exec.md" },
            { text: "强制退出正在运行的应用", link: "/guide/ll-cli/kill.md" },
          ],
          // TODO：add cli doc to here
        },
        {
          collapsible: true,
          text: "构建工具",
          items: [
            { text: "简介", link: "/guide/ll-builder/introduction.md" },
            { text: "创建项目", link: "/guide/ll-builder/create.md" },
            { text: "构建应用", link: "/guide/ll-builder/build.md" },
            { text: "运行编译后的应用", link: "/guide/ll-builder/run.md" },
            { text: "导出uab格式应用", link: "/guide/ll-builder/export.md" },
            { text: "配置文件", link: "/guide/ll-builder/manifests.md" },
            // { text: "推送uab到远程仓库", link: "/guide/ll-builder/push.md" },
            // { text: "本地demo示例", link: "/guide/ll-builder/demo.md" },
            { text: "github构建示例", link: "/guide/ll-builder/github.md" }
          ],
          // TODO：add builder doc to here
        },
        {
          collapsible: true,
          text: "调试应用",
          items: [
            { text: "IDE中调试应用", link: "/guide/debug/debug.md" },
            { text: "常见构建问题", link: "/guide/debug/ll-builder-faq.md" },
            { text: "常见运行问题", link: "/guide/debug/faq.md" },
          ],
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
            link: "http://10.0.33.45:28803",
          },
          {
            text: "文档",
            ariaLabel: "doc",
            items: [
              { text: "开始", link: "/guide/start/install.md" },
              { text: "命令行工具", link: "/guide/ll-cli/introduction.md" },
              { text: "构建工具", link: "/guide/ll-builder/introduction.md" },
              { text: "调试", link: "/guide/debug/debug.md" },
              { text: "常见问题", link: "/guide/debug/faq.md" },
            ],
          },
          {
            text: "语言",
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
            link: "http://10.0.33.45:28803",
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
      // message: "Released under the GPLv3 License.",
      //   copyright: "Copyright © 2019-present Iceyer",
    },
  },
};

// function sidebar/guide() {
//   return [
//     {
//       text: 'Introduction',
//       collapsible: true,
//       items: [
//         { text: 'What is VitePress?', link: '//guide/what-is-vitepress' },
//         { text: 'Getting Started', link: '//guide/getting-started' },
//         { text: 'Configuration', link: '//guide/configuration' },
//         { text: 'Deploying', link: '//guide/deploying' }
//       ]
//     },
//     {
//       text: 'Writing',
//       collapsible: true,
//       items: [
//         { text: 'Markdown', link: '//guide/markdown' },
//         { text: 'Asset Handling', link: '//guide/asset-handling' },
//         { text: 'Frontmatter', link: '//guide/frontmatter' },
//         { text: 'Using Vue in Markdown', link: '//guide/using-vue' },
//         { text: 'API Reference', link: '//guide/api' }
//       ]
//     },
//     {
//       text: 'Theme',
//       collapsible: true,
//       items: [
//         { text: 'Introduction', link: '//guide/theme-introduction' },
//         { text: 'Nav', link: '//guide/theme-nav' },
//         { text: 'Sidebar', link: '//guide/theme-sidebar' },
//         { text: 'Prev Next Link', link: '//guide/theme-prev-next-link' },
//         { text: 'Edit Link', link: '//guide/theme-edit-link' },
//         { text: 'Last Updated', link: '//guide/theme-last-updated' },
//         { text: 'Layout', link: '//guide/theme-layout' },
//         { text: 'Home Page', link: '//guide/theme-home-page' },
//         { text: 'Team Page', link: '//guide/theme-team-page' },
//         { text: 'Footer', link: '//guide/theme-footer' },
//         { text: 'Search', link: '//guide/theme-search' },
//         { text: 'Carbon Ads', link: '//guide/theme-carbon-ads' }
//       ]
//     },
//     {
//       text: 'Migrations',
//       collapsible: true,
//       items: [
//         {
//           text: 'Migration from VuePress',
//           link: '//guide/migration-from-vuepress'
//         },
//         {
//           text: 'Migration from VitePress 0.x',
//           link: '//guide/migration-from-vitepress-0'
//         }
//       ]
//     }
//   ]
// }
