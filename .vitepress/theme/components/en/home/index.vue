<!--
SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.

SPDX-License-Identifier: LGPL-3.0-or-later
-->

<template>
  <FullLayout class="full-layout">
    <template #header>
      <EnHeader />
    </template>
    <template #content>
      <div class="banner u-flex u-items-center u-justify-center">
        <div class="w-center u-flex u-items-center u-justify-between">
          <div class="enter">
            <h1>Linglong is born for better compatibility and security.</h1>
            <p class="describe">
              Linglong is a new independent package management toolset, dedicated to solve various compatibility
              problems caused by complex package formats and cross dependencies under Linux, as well as to reducing the
              security risks caused by decentralized control of permissions.
            </p>
            <div class="link-wrap">
              <a href="/en/guide/ll-builder/introduction.html" class="link quick">Quick build in 10 mins</a>
              <a href="/en/guide/ll-builder/manifests.html#runtime-20-5-0-includes-dependencies" class="link plain ml-15">Runtime list</a>
              <a href="https://bbs.deepin.org/module/detail/230" target="_blank" class="link plain ml-15">Discussions</a>
            </div>
          </div>
          <div class="shield"></div>
        </div>
      </div>
      <!-- block1 (玲珑意味着什么？) -->
      <div class="mean-block ">
        <div class="w-center block">
          <div class="title" style="width: 320px;">
            <span>Advantages</span>
          </div>
          <div class="u-flex u-items-center u-justify-between">
            <div class="to to-user">
              <h2>For Users</h2>
              <h3><i class="selected"></i>Stable</h3>
              <p>Greatly reduce the issues such as app running failed after system updates, and system crashes after
                installing a new app.</p>
              <h3><i class="selected"></i>Safe</h3>
              <p>Prevent unauthorized apps from reading user data, so even if malicious apps are accidentally installed,
                your system cannot be invaded.</p>
              <h3><i class="selected"></i>Easy to use</h3>
              <p>Double-click to run without installation, and simply delete the files to remove apps.</p>
            </div>
            <div class="to to-dev">
              <h2>For Developers</h2>
              <h3><i class="selected"></i>Independent</h3>
              <p>Apps and systems are isolated from each other, so system changes have little effect on apps, and it is
                easier to support more distributions.</p>
              <h3><i class="selected"></i>Compatible</h3>
              <p>Dependency conflict can be avoided and multiple versions can coexist, making app compatibility better.
              </p>
              <h3><i class="selected"></i>Easy to distribute</h3>
              <p>Both online distribution and offline distribution are supported. You can distribute Linglong apps in
                the ecosystem of Linux distributions or in your own channels.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- block2 (玲珑的五大特性) -->
      <div class="feature-block">
        <div class="w-center block">
          <div class="title" style="width: 320px;">
            <span>Features</span>
          </div>
          <div class="u-flex u-items-center u-justify-between">
            <div class="card">
              <i class="f-icon f1"></i>
              <h3>System Intergrated</h3>
              <p>Linglong has been integrated into deepin with a beautiful and convenient graphical user
                interface.</p>
            </div>
            <div class="card">
              <i class="f-icon f2"></i>
              <h3>Quick Start</h3>
              <p>Mechanisms are offered for deep optimization of runtime in distributions, so as to reduce the
                size.</p>
            </div>
            <div class="card">
              <i class="f-icon f3"></i>
              <h3>Strong Compatibility</h3>
              <p>Independent runtime isolates applications from the system and enhances compatibility.</p>
            </div>
          </div>
          <div class="u-flex u-items-center u-justify-start" style="margin-top: 24px;">
            <div class="card">
              <i class="f-icon f4"></i>
              <h3>High Security</h3>
              <p>The container technology and permission control mechanism enhance security.</p>
            </div>
            <div class="card" style="margin-left: 24px;">
              <i class="f-icon f5"></i>
              <h3>Easy to Distribute</h3>
              <p>Both online and offline distribution are supported and Linglong apps can run without installation.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- block3 (玲珑不断丰富的生态) -->
      <div class="app-block">
        <div class="w-center block">
          <div class="title" style="width: 410px;">
            <span>Enriching Ecosystem</span>
          </div>
          <div class="u-flex u-items-center u-justify-center">
            <ul class="app-list">
              <li v-for="app of apps" :key="app.key">
                <div class="card u-flex u-items-center u-justify-start">
                  <i :style="{backgroundImage:app.icon}"></i>
                  <span>{{app.text}}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="go-stroe">
            <a href="https://store.linglong.dev" target="_blank">Go to Linglong Store -></a>
          </div>
        </div>
      </div>
      <!-- block4 (体验离线bundle格式) -->
      <div class="bundle-block">
        <div class="w-center block">
          <div class="title">
            <span>Run Bundle Packages Offline without Installation</span>
            <p class="sub">Available on deepin, Ubuntu, and Debian at present. More distributions will be supported…</p>
          </div>
          <div class="u-flex u-items-center u-justify-between">
            <div class="card" v-for="bundle of bundles" :key="bundle.appId">
              <i class="app" :style="{backgroundImage:bundle.icon}"></i>
              <div class="app-name u-truncate">{{bundle.name}}</div>
              <a :href="bundle.downloadUrl">
                <i class="down"></i>
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <EnFooter />
    </template>
  </FullLayout>
  <TinyLayout class="tiny-layout" />
</template>
<script setup>
import { ref } from "@vue/reactivity";
import FullLayout from '../../layout/full.vue'
import EnHeader from '../header/index.vue'
import EnFooter from '../footer/index.vue'
import TinyLayout from './tiny.vue'

const apps = ref([
  { key: 1, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/com.deepin.gomoku.svg)', text: 'deepin-gomoku' },
  { key: 2, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/com.deepin.lianliankan.svg)', text: 'deepin-lianliankan' },
  { key: 3, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/dde-calendar.svg)', text: 'dde-calendar' },
  { key: 4, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/deepin-calculator.svg)', text: 'deepin-calculator' },
  { key: 5, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/deepin-editor.svg)', text: 'deepin-editor' },
  { key: 6, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/deepin-reader.svg)', text: 'deepin-reader' },
  { key: 7, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/deepin-compressor.svg)', text: 'deepin-compressor' },
  { key: 8, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/org.deepin.browser.svg)', text: 'deepin-browser' },
  { key: 9, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/deepin-mail.svg)', text: 'deepin-mail' },
  { key: 10, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/deepin-album.svg)', text: 'deepin-album' },
  { key: 11, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/deepin-draw.svg)', text: 'deepin-draw' },
  { key: 12, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/deepin-image-viewer.svg)', text: 'deepin-image-viewer' },
  { key: 13, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/deepin-camera.svg)', text: 'deepin-camera' },
  { key: 14, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/deepin-music.svg)', text: 'deepin-music' },
  { key: 15, icon: 'url(https://mirror-repo-linglong.deepin.com/icon/deepin-movie.svg)', text: 'deepin-movie' }
])
const bundles = [{
  appId: "com.163.music",
  arch: "x86_64",
  description: "网易云音乐是一款专注于发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能，在线音乐服务主打歌单、社交、大牌推荐和音乐指纹，以歌单、DJ节目、社交、地理位置为核心要素，主打发现和分享。",
  icon: "url(https://store.chinauos.com/api/public/blob/1dda7a14-738e-4ce4-b81a-6d6ba0d3c3f6)",
  id: 0,
  name: "netease-cloud-music",
  version: "1.2.1.1",
  downloadUrl: "https://mirror-repo-linglong.deepin.com/bundle/com.163.music_1.2.1.1_x86_64.uab"
}, {
  appId: "cn.wps.wps-office",
  arch: "x86_64",
  "description": "WPS Office 2019 for Linux 办公软件，是一款兼容、开放、高效、安全并极具中文本土化优势的办公软件。支持国内外主流软硬件系统，其专业的图文混排功能、强有力的计算引擎和强大的数据处理功能、丰富的动画效果设置、公文处理等，可以充分满足国内外用户在Linux体系下高效办公的要求。\nWPS Office 2019 for Linux在文字排版、表格计算、演示动画三大核心功能上做到底层兼容，可以直接创建、读取、编辑、保存如doc、xls、ppt、pps等格式的文档、国际标准OOXML文档（如docx、xlsx、pptx、ppsx等格式的文档）。\n客服热线：400-822-9012\nQQ群：858835097\n微信客服：搜索 \"WPS客户服务\"",
  icon: "url(https://store.chinauos.com/api/public/blob/ec4435df-037e-40cf-8417-67993b89dd0e)",
  name: "WPS2019 Community",
  version: "11.1.0.11664",
  downloadUrl: "https://mirror-repo-linglong.deepin.com/bundle/cn.wps.wps-office_11.1.0.11664_x86-64.uab"
}, {
  appId: "com.baidu.baidunetdisk",
  arch: "x86_64",
  description: "百度网盘为百度旗下的一款云存储产品，用户可以轻松将自己的文件上传到网盘上，并可跨终端随时随地查看和分享。",
  icon: "url(https://store.chinauos.com/api/public/blob/5bb10bee-53de-4ed0-ac65-8374c8c3e8f4)",
  name: "baidunetdisk",
  version: "4.3.0",
  downloadUrl: "https://mirror-repo-linglong.deepin.com/bundle/com.baidu.baidunetdisk_4.3.0_x86_64.uab"
}, {
  appId: "com.xunlei.download",
  arch: "x86_64",
  description: "十八年技术沉淀，专注下载传输，成就用户信赖的必备工具”，迅雷团队首次推出 linux 界面版本，为国产芯片和国产操作系统助力，为用户提供极速，流畅，便捷的下载服务。\n\n【支持国芯、支持国产操作系统】\n\n       支持多种芯片，适配龙芯，适配国产操作系统。\n\n【一样下载体验】\n\n       一样强大而稳定的下载内核，简洁的操作界面，一样的下载速度，一样的下载信息呈现。\n\n【简约的界面交互】 　　\n\n       简约设计，精致的简约体验；linux 迅雷界面尺寸更加小巧，小屏幕也能适应。　\n\n【强大的软件框架】\n\n       linux 迅雷使用基于 “Electron” 的软件框架，使界面响应将更加流畅，文字显示效果更加清晰细腻。\n\n",
  icon: "url(https://store.chinauos.com/api/public/blob/5266244f-5df0-4512-ac0e-b980eba060f6)",
  name: "xunlei",
  version: "1.0.0.2",
  downloadUrl: "https://mirror-repo-linglong.deepin.com/bundle/com.xunlei.download_1.0.0.2_x86_64.uab"
}]
const jump = (url) => {
  location.href = url
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1200px) {
  .full-layout {
    display: none;
  }
  .tiny-layout {
    display: block;
  }
}
.w-center {
  width: 1200px;
  margin: auto;
}
.block {
  padding: 80px 0px;
  .title {
    margin: auto;
    line-height: 1;
    font-size: 40px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 60px;
    text-align: center;
    .sub {
      margin-top: 24px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
    }
  }
}
.banner {
  width: 100%;
  height: 640px;
  background: #025bff url(/asset/home/banner.jpg) no-repeat 50% / cover;
  .enter {
    color: #ffffff;
    width: 476px;
    h1 {
      font-size: 42px;
      font-weight: 500;
      margin-bottom: 24px;
      line-height: 1;
    }
    .describe {
      width: 458px;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
    }
  }
  .shield {
    width: 480px;
    height: 500px;
    // background: transparent url(/asset/home/shield.png) no-repeat 100% / cover;
  }
  .link-wrap {
    margin-top: 80px;
    .link {
      display: inline-block;
      color: #ffffff;
      outline: none;
      text-decoration: none;
      border: 1px solid #c5c5c5;
      border-radius: 8px;
      padding: 9px 15px;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      cursor: pointer;
    }
    .quick {
      background-color: #025bff;
      border: 1px solid #025bff;
      &:hover {
        background-color: #3179ff;
      }
    }
    .plain {
      &:hover {
        color: #000000;
        background-color: #ffffff;
      }
    }
    .ml-15 {
      margin-left: 15px;
    }
  }
}
.mean-block {
  height: 676px;
  background-color: #ffffff;
  .to {
    width: 588px;
    height: 415px;
    background-color: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 40px 20px;
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 290px 304px;
    border-radius: 8px;
    h2 {
      font-size: 26px;
      font-weight: 500;
      color: #000000;
      margin-bottom: 35px;
    }
    h3 {
      font-size: 20px;
      font-weight: 500;
      color: #000000;
      margin-top: 30px;
      margin-bottom: 10px;
      .selected {
        vertical-align: middle;
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(/asset/home/selected.svg) no-repeat 50% / cover;
        margin-right: 4px;
      }
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
      padding-left: 25px;
      line-height: 1.2;
    }
  }
  .to-user {
    background-image: url(/asset/home/user-bg.png);
  }
  .to-dev {
    background-image: url(/asset/home/dev-bg.png);
  }
}
.feature-block {
  height: 752px;
  background: #eef1f7 url(/asset/home/feature-bg.jpg) no-repeat 100% / cover;
  .card {
    padding: 30px;
    width: 384px;
    height: 225px;
    background-color: #ffffff;
    border-radius: 8px;
    .f-icon {
      display: block;
      width: 48px;
      height: 48px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .f1 {
      background-image: url(/asset/home/f1.png);
    }
    .f2 {
      background-image: url(/asset/home/f2.png);
    }
    .f3 {
      background-image: url(/asset/home/f3.png);
    }
    .f4 {
      background-image: url(/asset/home/f4.png);
    }
    .f5 {
      background-image: url(/asset/home/f5.png);
    }
    h3 {
      font-size: 20px;
      font-weight: 500;
      line-height: 1;
      color: #000000;
      margin: 24px 0px 8px;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
    }
  }
}
.app-block {
  height: 638px;
  background-color: #ffffff;
  .app-list {
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    li {
      position: relative;
      text-align: center;
      color: #606266;
      height: 112px;
      font-size: 16px;
      transition: background-color 0.3s;
      .card {
        width: 220px;
        height: 88px;
        padding: 16px;
        border: 1px solid #ececec;
        border-radius: 8px;
        i {
          display: block;
          width: 56px;
          height: 56px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
        span {
          font-size: 16px;
          font-weight: 500;
          margin-left: 8px;
        }
      }
      &:nth-child(5n + 2) {
        .card {
          margin-left: 5px;
        }
      }
      &:nth-child(5n + 3) {
        .card {
          margin-left: 10px;
        }
      }
      &:nth-child(5n + 4) {
        .card {
          margin-left: 15px;
        }
      }
      &:nth-child(5n) {
        .card {
          margin-left: auto;
          text-align: right;
        }
      }
    }
  }
  .go-stroe {
    text-align: center;
    padding-top: 16px;
    a {
      outline: none;
      text-decoration: none;
      color: #003296;
      font-size: 16px;
      font-weight: 500;
      &:hover {
        color: rgba(0, 50, 150, 0.7);
      }
    }
  }
}
.bundle-block {
  height: 580px;
  background-color: #fafafc;
  .card {
    background: #ffffff;
    border-radius: 8px;
    width: 280px;
    height: 280px;
    padding: 40px 15px;
    text-align: center;
    &:hover {
      box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.1);
    }
    i.app {
      margin: auto;
      display: block;
      width: 64px;
      height: 64px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .app-name {
      font-size: 18px;
      font-weight: 500;
      color: #0a1943;
      margin-top: 24px;
      margin-bottom: 45px;
    }
    a {
      display: block;
      width: 120px;
      height: 40px;
      line-height: 40px;
      margin: auto;
      font-size: 16px;
      font-weight: 400;
      border: 1px solid rgba(0, 50, 150, 0.5);
      border: 1px solid #003296;
      color: #003296;
      border-radius: 8px;
      &:hover {
        color: rgba(0, 50, 150, 0.7);
      }
      .down {
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 3px;
        width: 16px;
        height: 16px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url(/asset/home/download.svg);
      }
    }
  }
}
</style>
