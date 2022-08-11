<template>
  <FullLayout>
    <template #header>
      <Header />
    </template>
    <template #content>
      <div class="banner u-flex u-items-center u-justify-center">
        <div class="w-center u-flex u-items-center u-justify-between">
          <div class="enter">
            <h1>玲珑，为兼容与安全而生</h1>
            <p class="describe">
              玲珑是一种新型的独立管理工具集，致力于治理Linux系统下传统软件包格式复杂、交叉的依赖关系导致的各种兼容性问题，以及过于松散的权限管控导致的安全风险。
            </p>
            <div class="link-wrap">
              <div class="link quick">10分钟快速构建</div>
              <div class="link plain ml-15">runtime清单</div>
              <div class="link plain ml-15">社区讨论</div>
            </div>
          </div>
          <div class="shield"></div>
        </div>
      </div>
      <!-- block1 (玲珑意味着什么？) -->
      <div class="mean-block ">
        <div class="w-center block">
          <div class="title" style="width: 320px;">
            <span>玲珑意味着什么？</span>
          </div>
          <div class="u-flex u-items-center u-justify-between">
            <div class="to to-user">
              <h2>对用户来说</h2>
              <h3><i class="selected"></i>更稳定</h3>
              <p>大大减少了系统升级应用起不来，体验了一款新的应用导致系统损坏等情况。</p>
              <h3><i class="selected"></i>更安全</h3>
              <p>拒绝应用未授权读取用户数据，不小心安装了恶意应用也不会入侵系统。</p>
              <h3><i class="selected"></i>更易用</h3>
              <p>无需安装双击即可运行，删除文件即可卸载应用。</p>
            </div>
            <div class="to to-dev">
              <h2>对用户来说</h2>
              <h3><i class="selected"></i>更独立</h3>
              <p>应用与系统相互隔离，无需过多关注系统环境变化，支持多发行版内容也变得容易。</p>
              <h3><i class="selected"></i>更兼容</h3>
              <p>避免依赖地狱，多版本共存，应用兼容性更易保证。</p>
              <h3><i class="selected"></i>更易用</h3>
              <p>在线分发与离线分发均支持，可加入发行版生态，也可在自己的渠道进行分发。</p>
            </div>
          </div>
        </div>
      </div>
      <!-- block2 (玲珑的五大特性) -->
      <div class="feature-block">
        <div class="w-center block">
          <div class="title" style="width: 320px;">
            <span>玲珑的五大特性</span>
          </div>
          <div class="u-flex u-items-center u-justify-between">
            <div class="card">
              <i class="f-icon f1"></i>
              <h3>启动速度快</h3>
              <p>deepin 正式集成玲珑，提供美观便捷的图形化管理</p>
            </div>
            <div class="card">
              <i class="f-icon f2"></i>
              <h3>发行版已集成</h3>
              <p>提供机制供发行版针对runtime进行深度优化，减小体积提升</p>
            </div>
            <div class="card">
              <i class="f-icon f3"></i>
              <h3>兼容性强</h3>
              <p>独立的runtime使得应用与系统隔离，增强兼容性</p>
            </div>
          </div>
          <div class="u-flex u-items-center u-justify-start" style="margin-top: 24px;">
            <div class="card">
              <i class="f-icon f4"></i>
              <h3>安全性高</h3>
              <p>容器化技术与权限控制机制，提升安全性</p>
            </div>
            <div class="card" style="margin-left: 24px;">
              <i class="f-icon f5"></i>
              <h3>易于分发</h3>
              <p>在线与离线分发均支持，无需安装即可运行</p>
            </div>
          </div>
        </div>
      </div>
      <!-- block3 (玲珑不断丰富的生态) -->
      <div class="app-block">
        <div class="w-center block">
          <div class="title" style="width: 360px;">
            <span>玲珑不断丰富的生态</span>
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
            <a href="http://10.0.33.45:28803" target="_blank">进入玲珑商店 -></a>
          </div>
        </div>
      </div>
      <!-- block4 (体验离线bundle格式) -->
      <div class="bundle-block">
        <div class="w-center block">
          <div class="title">
            <span>体验离线bundle格式</span>
            <p class="sub">可在deepin、Ubuntu和Debian上体验离线bundle格式，无需安装即可运行，更多发行版持续支持中…</p>
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
      <Footer />
    </template>
  </FullLayout>
</template>
<script setup>
import { ref } from "@vue/reactivity";

const apps = ref([
  { key: 1, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 2, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 3, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 4, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 5, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 6, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 7, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 8, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 9, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 10, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 11, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 12, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 13, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 14, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' },
  { key: 15, icon: 'url(https://api-dev.linglong.space/icon/deepin-screen-recorder.svg)', text: '拍照' }
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
      margin-bottom: 40px;
    }
    h3 {
      font-size: 20px;
      font-weight: 500;
      color: #000000;
      margin-top: 30px;
      margin-bottom: 15px;
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
    }
  }
  .to-user {
    // background-image: url(/asset/home/user-bg.svg);
  }
  .to-dev {
    // background-image: url(/asset/home/dev-bg.svg);
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