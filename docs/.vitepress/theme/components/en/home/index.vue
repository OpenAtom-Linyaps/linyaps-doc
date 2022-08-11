<template>
  <FullLayout>
    <template #header>
      <EnHeader />
    </template>
    <template #content>
      <div class="banner u-flex u-items-center u-justify-center">
        <div class="w-center u-flex u-items-center u-justify-between">
          <div class="enter">
            <h1>Linglong is born for better compatibility and security.</h1>
            <p class="describe">
              Linglong is a new independent package management toolset, dedicated to solving various compatibility problems caused by complex package formats and cross dependencies under Linux, as well as to reducing the security risks caused by decentralized control of permissions.
            </p>
            <div class="link-wrap">
              <div class="link quick">Quick Built in 10 mins</div>
              <div class="link plain ml-15">Runtime List</div>
              <div class="link plain ml-15">Discussions</div>
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
              <p>Greatly reduce the issues such as app running failed after system updates, and system crashes after installing a new app.</p>
              <h3><i class="selected"></i>Safe</h3>
              <p>Prevent unauthorized apps from reading user data, so even if malicious apps are accidentally installed, your system cannot be invaded.</p>
              <h3><i class="selected"></i>Easy to use</h3>
              <p>Double-click to run without installation, and simply delete the files to remove apps.</p>
            </div>
            <div class="to to-dev">
              <h2>For Developers</h2>
              <h3><i class="selected"></i>Independent</h3>
              <p>Apps and systems are isolated from each other, so system changes have little effect on apps, and it is easier to support more distributions.</p>
              <h3><i class="selected"></i>Compatible</h3>
              <p>Dependency hell can be avoided and multiple versions can coexist, making app compatibility better.</p>
              <h3><i class="selected"></i>Easy to distribute</h3>
              <p>Both online distribution and offline distribution are supported. You can distribute Linglong apps in the ecosystem of Linux distributions or in your own channels.</p>
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
              <h3>Quick Start</h3>
              <p>Mechanisms are offered for deep optimization of runtime in distributions, so as to reduce the size.</p>
            </div>
            <div class="card">
              <i class="f-icon f2"></i>
              <h3>System Intergrated</h3>
              <p>Linglong has been integrated into deepin with a beautiful and convenient graphical user interface.</p>
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
            <a href="http://10.0.33.45:28803" target="_blank">Go to Linglong Store -></a>
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
              <a href="">
                <i class="down"></i>
                下载体验
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
</template>
<script setup>
import { ref } from "@vue/reactivity";

const apps = ref([
  { key: 1, icon: 'url(https://repo-dev.linglong.space/icon/com.deepin.gomoku.svg)', text: '五子棋' },
  { key: 2, icon: 'url(https://repo-dev.linglong.space/icon/com.deepin.lianliankan.svg)', text: '连连看' },
  { key: 3, icon: 'url(https://repo-dev.linglong.space/icon/dde-calendar.svg)', text: '日历' },
  { key: 4, icon: 'url(https://repo-dev.linglong.space/icon/deepin-calculator.svg)', text: '计算器' },
  { key: 5, icon: 'url(https://repo-dev.linglong.space/icon/deepin-editor.svg)', text: '文本编辑器' },
  { key: 6, icon: 'url(https://repo-dev.linglong.space/icon/deepin-reader.svg)', text: '文档查看器' },
  { key: 7, icon: 'url(https://repo-dev.linglong.space/icon/deepin-compressor.svg)', text: '归档管理器' },
  { key: 8, icon: 'url(https://repo-dev.linglong.space/icon/org.deepin.browser.svg)', text: '浏览器' },
  { key: 9, icon: 'url(https://repo-dev.linglong.space/icon/deepin-mail.svg)', text: '邮箱' },
  { key: 10, icon: 'url(https://repo-dev.linglong.space/icon/deepin-album.svg)', text: '相册' },
  { key: 11, icon: 'url(https://repo-dev.linglong.space/icon/deepin-draw.svg)', text: '画板' },
  { key: 12, icon: 'url(https://repo-dev.linglong.space/icon/deepin-image-viewer.svg)', text: '看图' },
  { key: 13, icon: 'url(https://repo-dev.linglong.space/icon/deepin-camera.svg)', text: '相机' },
  { key: 14, icon: 'url(https://repo-dev.linglong.space/icon/deepin-music.svg)', text: '音乐' },
  { key: 15, icon: 'url(https://repo-dev.linglong.space/icon/deepin-movie.svg)', text: '影院' }
])
const bundles = [{
  appId: "org.dde.calendar",
  arch: "x86_64",
  description: "calendar for deepin os.\n",
  icon: "url(https://api-dev.linglong.space/icon/dde-calendar.svg)",
  id: 0,
  name: "dde-calendar",
  version: "5.9.1-u139"
}, {
  appId: "org.videolan.vlc",
  arch: "x86_64",
  description: "VLC是一款自由、开源的跨平台多媒体播放器及框架，它支持大多数的音频与视频解码器及文件格式，还可以播放大多数多媒体文件，以及DVD、音频CD、VCD及各类流媒体协议。",
  icon: "url(https://store.chinauos.com/api/public/blob/5ec3dd31-5606-4714-8f32-137e250d4ed8)",
  id: 0,
  name: "vlc",
  version: "3.0.16.1",
}, {
  appId: "org.deepin.screen-recorder",
  arch: "x86_64",
  description: "screen recorder for deepin os.\n",
  icon: "url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)",
  id: 0,
  name: "deepin-screen-recorder",
  version: "6.0.1-u030",
}, {
  appId: "org.deepin.reader",
  arch: "x86_64",
  description: "reader for deepin os.\n",
  icon: "url(https://api-dev.linglong.space/icon/deepin-reader.svg)",
  id: 0,
  name: "deepin-reader",
  version: "5.10.13-u007"
}]
</script>

<style lang="scss" scoped>
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
  background: #025bff url(/asset/home/banner.png) no-repeat 50% / cover;
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
    background: transparent url(/asset/home/shield.png) no-repeat 100% / cover;
  }
  .link-wrap {
    margin-top: 80px;
    .link {
      display: inline-block;
      border: 1px solid #c5c5c5;
      border-radius: 2px;
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
    border-radius: 4px;
    padding: 40px 20px;
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 290px 304px;
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
  background: #eef1f7 url(/asset/home/feature-bg.png) no-repeat 100% / cover;
  .card {
    padding: 30px;
    width: 384px;
    height: 225px;
    background-color: #ffffff;
    border-radius: 4px;
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
    border-radius: 4px;
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
        border-radius: 4px;
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
      color: rgba(0, 50, 150, 0.5);
      font-size: 16px;
      font-weight: 500;
      &:hover {
        color: #003296;
      }
    }
  }
}
.bundle-block {
  height: 580px;
  background-color: #fafafc;
  .card {
    background: #ffffff;
    border-radius: 4px;
    width: 282px;
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
      border-radius: 2px;
      color: rgba(0, 50, 150, 0.5);
      &:hover {
        color: #003296;
        border: 1px solid #003296;
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