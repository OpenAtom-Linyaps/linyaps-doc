// SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.
//
// SPDX-License-Identifier: LGPL-3.0-or-later

import { defineConfig, UserConfig } from "vitepress";
import { withI18n } from "vitepress-i18n";
import { sidebar } from "./sidebar";
import { getNav } from "./nav";
import versions from "./versions";
// https://vitepress.dev/reference/site-config

const latest = versions.default;
const config: UserConfig = {
  sitemap: { hostname: "https://linyaps.org.cn" },
  lastUpdated: true,
  metaChunk: true,
  // 排除无需渲染的文件，external下有文件会触发渲染错误
  srcExclude: ["**/external", "**/README.md"],
  // 忽略死链接
  // TODO 有关于manifests的死链接需要处理
  ignoreDeadLinks: [
    (url, source) => {
      // 1.10.x开始的版本只跳过README文件的死链接检查
      if (source.includes("1.10.x")) {
        if (
          source.includes("1.10.x/README.md") ||
          source.includes("1.10.x/README.zh_CN.md")
        ) {
          return true;
        }
        return false;
      }
      if (source.endsWith("README.md")) {
        console.log("ignoreDeadLinks", source);
        return true;
      }
      if (source.endsWith("README.zh_CN.md")) {
        console.log("ignoreDeadLinks", source);
        return true;
      }
      if (url.endsWith("/manifests")) {
        console.log("ignoreDeadLinks", source);
        return true;
      }
      return false;
    },
  ],
  // 缩短文件访问路径
  rewrites: {
    // 首页
    [`linyaps/${latest}/README.zh_CN.md`]: "index.md",
    [`linyaps/${latest}/README.md`]: "en/index.md",
    // 最新版本
    [`linyaps/${latest}/docs/pages/en/guide/:slug*`]: "en/guide/:slug*",
    [`linyaps/${latest}/docs/pages/guide/:slug*`]: "guide/:slug*",
    // 历史版本
    "linyaps/:version/docs/pages/en/guide/:slug*": "en/guide/:version/:slug*",
    "linyaps/:version/docs/pages/guide/:slug*": "guide/:version/:slug*",
  },
  themeConfig: {
    outline: {
      level: [2, 3],
    },
    // 侧边栏
    sidebar,
    // 搜索
    search: {
      provider: "local",
      options: {
        async _render(src, env, md) {
          const path: string = env.relativePath;
          console.log(path);
          // 旧版本文档不参与搜索，避免搜索列表重复
          if (!path.startsWith("linyaps/" + versions.default)) {
            return "";
          }
          const html = await md.renderAsync(src, env);
          return html;
        },
      },
    },
    // 右侧页面介绍

    // “编辑此页”的链接
    editLink: {
      pattern: (data: { filePath: string }) => {
        let filePath = data.filePath;
        filePath = filePath.slice(filePath.indexOf("pages"));
        if (filePath.startsWith("packages/")) {
          return `https://github.com/OpenAtom-Linyaps/linyaps/edit/master/docs/${filePath}`;
        } else {
          return `https://github.com/OpenAtom-Linyaps/linyaps/edit/master/docs/${filePath}`;
        }
      },
    },
  },
};

export default defineConfig(
  // 多语言翻译
  withI18n(config, {
    title: {
      en: "Linyaps",
      zhHans: "如意玲珑",
    },
    description: {
      en: "Next-Gen Universal Package Manager for Linux",
      zhHans: "Linux跨发行版独立包管理工具集",
    },
    locales: ["zhHans", "en"],
    rootLocale: "zhHans",
    themeConfig: {
      zhHans: {
        // 顶部导航栏
        nav: [{ text: "文档版本", items: getNav("zhHans") }],
      },
      en: {
        nav: [{ text: "Doc Version", items: getNav("en") }],
      },
    },
  })
);
