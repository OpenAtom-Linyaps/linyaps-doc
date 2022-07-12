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
    siteTitle: false,
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
            link: "http://doc-dev.linglong.space/",
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
            link: "http://doc-dev.linglong.space/",
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
    socialLinks: [
      { icon: "github", link: "https://github.com/linuxdeepin" },
      // { icon: 'twitter', link: '...' },
      // { icon: 'discord', link: '...' }
    ],
    footer: {
      message: "Released under the GPLv3 License.",
      //   copyright: "Copyright © 2019-present Iceyer",
    },
  },
};
