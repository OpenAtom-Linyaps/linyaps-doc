// SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.
//
// SPDX-License-Identifier: LGPL-3.0-or-later

const { sidebar } = require('./theme/sidebar.js')
const { generateNav } = require('./theme/nav.js');

module.exports = {
    head: [
        [
            "script",
            {
                async: true,
                src: "https://www.googletagmanager.com/gtag/js?id=G-JBPRYNBJZ7",
            },
        ],
        [
            "script",
            {},
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-JBPRYNBJZ7');
            `,
        ],
    ],
    ignoreDeadLinks: true,
    locales: {
        root: {
            lang: "zh-CN",
            title: "玲珑",
            description: "独立包格式",
            themeConfig: {
                nav: generateNav('zh')
            }
        },
        en: {
            lang: "en-US",
            title: "linglong",
            description: "hermetic package format",
            themeConfig: {
                nav: generateNav('en')
            }
        },
    },
    themeConfig: {
        logo: "/asset/logo.svg",
        siteTitle: false,
        sidebar: sidebar,
        locales: {
            "/": {
                nav: [
                    {
                        text: "商店",
                        ariaLabel: "store",
                        link: "https://store.linglong.dev",
                    },
                    {
                        text: "文档",
                        ariaLabel: "doc",
                        items: [
                            { text: "开始", link: "/guide/start/whatis.md" },
                            {
                                text: "命令行工具",
                                link: "/guide/ll-cli/introduction.md",
                            },
                            {
                                text: "构建工具",
                                link: "/guide/ll-builder/introduction.md",
                            },
                            { text: "调试", link: "/guide/debug/debug.md" },
                            {
                                text: "常见运行问题",
                                link: "/guide/debug/faq.md",
                            },
                        ],
                    },
                    {
                        text: "语言",
                        ariaLabel: "Language Menu",
                        items: [
                            {
                                text: "简体中文",
                                link: "/guide/start/whatis.md",
                            },
                            {
                                text: "English",
                                link: "/en/guide/start/whatis.md",
                            },
                        ],
                    },
                ],
            },
            "/en/": {
                nav: [
                    {
                        text: "Store",
                        ariaLabel: "store",
                        link: "https://store.linglong.dev",
                    },
                    {
                        text: "Docs",
                        ariaLabel: "doc",
                        collapsible: true,
                        items: [
                            {
                                text: "Getting Start",
                                link: "/en/guide/start/whatis.md",
                            },
                            {
                                text: "Command Line Tools",
                                link: "/en/guide/ll-cli/introduction.md",
                            },
                            {
                                text: "Build Tools",
                                link: "/en/guide/ll-builder/introduction.md",
                            },
                            { text: "Debug", link: "/en/guide/debug/debug.md" },
                            { text: "Run FAQ", link: "/en/guide/debug/faq.md" },
                        ],
                    },
                    {
                        text: "Languages",
                        ariaLabel: "Language Menu",
                        items: [
                            {
                                text: "简体中文",
                                link: "/guide/start/whatis.md",
                            },
                            {
                                text: "English",
                                link: "/en/guide/start/whatis.md",
                            },
                        ],
                    },
                ],
            }
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/linuxdeepin" },
        ],
        footer: {
            // message: "Released under the GPLv3 License.",
            //   copyright: "Copyright © 2019-present Iceyer",
        },
    },
};
