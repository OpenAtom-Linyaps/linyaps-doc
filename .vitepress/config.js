
async function config() {
    return {
        base: '/',
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
                            { text: "安装", link: "/guide/start/install" },
                        ],
                    },
                    {
                        collapsible: true,
                        text: "命令行工具",
                        items: [
                            { text: "简介", link: "/guide/ll-cli/introduction" },
                            { text: "列出已安装的应用", link: "/guide/ll-cli/list" },
                            { text: "从远程仓库查询应用", link: "/guide/ll-cli/query" },
                            { text: "安装应用", link: "/guide/ll-cli/install" },
                            { text: "运行应用", link: "/guide/ll-cli/run" },
                            { text: "卸载应用", link: "/guide/ll-cli/uninstall" },
                            { text: "更新应用", link: "/guide/ll-cli/update" },
                            { text: "查看运行中的应用", link: "/guide/ll-cli/ps" },
                            { text: "进入运行中的容器内部", link: "/guide/ll-cli/exec" },
                            { text: "强制退出正在运行的应用", link: "/guide/ll-cli/kill" },
                        ]
                    },
                    {
                        collapsible: true,
                        text: "构建工具",
                        items: [
                            { text: "简介", link: "/guide/ll-builder/introduction" },
                            { text: "创建项目", link: "/guide/ll-builder/create" },
                            { text: "构建应用", link: "/guide/ll-builder/build" },
                            { text: "运行编译后的应用", link: "/guide/ll-builder/run" },
                            { text: "导出uab格式应用", link: "/guide/ll-builder/export" },
                            { text: "配置文件", link: "/guide/ll-builder/manifests" },
                            { text: "github构建示例", link: "/guide/ll-builder/github" }
                        ]
                    },
                    {
                        collapsible: true,
                        text: "调试应用",
                        items: [
                            { text: "IDE中调试应用", link: "/guide/debug/debug" },
                            { text: "常见构建问题", link: "/guide/debug/ll-builder-faq" },
                            { text: "常见运行问题", link: "/guide/debug/faq" },
                        ]
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
                                { text: "开始", link: "/guide/start/install" },
                                { text: "命令行工具", link: "/guide/ll-cli/introduction" },
                                { text: "构建工具", link: "/guide/ll-builder/introduction" },
                                { text: "调试", link: "/guide/debug/debug" },
                                { text: "常见问题", link: "/guide/debug/faq" },
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
                                { text: "Getting Start", link: "/en/getting-started/why" },
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
            socialLinks: [{ icon: "github", link: "https://github.com/linuxdeepin" }]
        }
    }
}

module.exports = config()
