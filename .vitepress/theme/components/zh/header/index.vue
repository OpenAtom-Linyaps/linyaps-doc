<template>
  <div class="nav-wrap u-flex u-items-center u-justify-between" :class="{ 'header-theme': scrollVal.headerTheme }">
    <div class="logo"></div>
    <div class="nav-bar u-flex u-items-center u-justify-between">
      <!-- 导航 -->
      <div class="nav u-flex u-item-center u-justify-start">
        <a class="selected" href="/">首页</a>
        <a href="http://10.0.33.45:28803/" target="_blank">玲珑商店</a>
        <a href="javascript:void(0);" @click="jump('/guide/start/install.html')">使用手册</a>
        <i class="active"></i>
      </div>
      <!-- 语言切换 -->
      <div class="lang">
        <span class="zh">中</span>
        <i>/</i>
        <span @click="switchLang('/en/index.html')" class="en">EN</span>
      </div>
    </div>
    <!-- 布局占位 -->
    <div style="width: 48px; height: 48px"></div>
  </div>
</template>
<script setup>
import { reactive } from '@vue/reactivity'
import { onBeforeUnmount, onMounted } from '@vue/runtime-core'

const scrollVal = reactive({
  // 当前滚动位置
  currentScrollTop: 0,
  headerTheme: false
})

const listenScroll = () => {
  window.addEventListener('scroll', () => {
    scrollVal.currentScrollTop = window.scrollY
    if (window.scrollY > 20) {
      scrollVal.headerTheme = true
    } else {
      scrollVal.headerTheme = false
    }
  })
}

const jump = (url) => {
  location.href = url
}
onMounted(() => {
  listenScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => {})
})
const switchLang = (url) => {
  location.href = url
}
</script>

<style lang="scss" scoped>
.header-theme {
  .nav {
    a {
      color: #333 !important;
    }

    .selected {
      color: #025bff;
    }
  }

  .lang {
    .zh {
      color: #333 !important;
    }

    i {
      color: rgba($color: #333, $alpha: 0.5) !important;
    }

    .en {
      color: #333 !important;
    }
  }
}

.nav-wrap {
  width: 100%;
  height: 100%;
  padding: 0px 60px;
  .logo {
    width: 48px;
    height: 48px;
    background: url(/asset/logo.svg) no-repeat 100% / cover;
  }
}
.nav-bar {
  width: 1200px;
  .nav {
    position: relative;
    height: 72px;
    line-height: 72px;
    a {
      display: block;
      outline: none;
      text-decoration: none;
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      padding: 0px 16px;
      cursor: pointer;
      &:hover {
        color: #025bff;
      }
    }
    .selected {
      color: #025bff;
    }
    .active {
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 64px;
      height: 4px;
      background-color: #025bff;
    }
  }
  .lang {
    font-size: 16px;
    font-weight: 400;
    .zh {
      color: #025bff !important;
      cursor: pointer;
      &:hover {
        color: #025bff;
      }
    }
    i {
      display: inline-block;
      color: #ffffff;
      padding: 0px 8px;
    }
    .en {
      color: rgba($color: #ffffff, $alpha: 0.5);
      cursor: pointer;
      &:hover {
        color: #025bff;
      }
    }
  }
}
</style>