<template>
  <div :class="{'header-wrap': expand}">
    <div class="nav-wrap u-flex u-items-center u-justify-between">
      <div class="logo"></div>
      <div>
        <!-- 语言切换 -->
        <div v-if="!expand" class="lang">
          <span @click="switchLang('/')" class="zh">中</span>
          <i>/</i>
          <span class="en">EN</span>
        </div>
        <div v-if="!expand" @click="emits('change',true)" class="expand">
          <svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M64 250.688V176h896v74.688H64zm0 298.624v-74.624h896v74.624H64zM960 848v-74.688H64V848h896z"></path>
          </svg>
        </div>
        <div v-if="expand" @click="emits('change',false)" class="close">
          <svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="m256.32 315.136 58.88-58.88L512 453.248l196.864-196.864 58.88 58.88L570.752 512l196.864 196.864-58.88 58.88L512 570.752 315.136 767.616l-58.88-58.88L453.248 512z"></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="nav">
      <a class="selected" href="/">Home</a>
      <a href="https://store.linglong.dev/" target="_blank">Linglong Store</a>
      <a href="javascript:void(0);" @click="jump('/en/guide/start/install.html')">User Manual</a>
    </div>
  </div>
</template>
<script setup>
import { reactive } from '@vue/reactivity'
import { onBeforeUnmount, onMounted, ref } from '@vue/runtime-core'

const props = defineProps({
  expand: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits({
  change: (expand) => {
    return true
  },
})

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

onMounted(() => {
  listenScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => { })
})
const jump = (url) => {
  location.href = url
}
const switchLang = (url) => {
  location.href = url
}
</script>

<style lang="scss" scoped>
.header-wrap {
  background-color: #ffffff;
  .nav {
    height: 183px;
  }
}
.nav-wrap {
  width: 100%;
  height: 100%;
  padding: 9px 18px;
  .logo {
    width: 32px;
    height: 32px;
    background: url(/asset/logo.svg) no-repeat 100% / cover;
  }
  .lang {
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    vertical-align: middle;
    .zh {
      color: rgba($color: #ffffff, $alpha: 0.5);
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
      color: #025bff !important;
      cursor: pointer;
      &:hover {
        color: #025bff;
      }
    }
  }
  .icon {
    background: url(/asset/home/tiny/menu.svg) no-repeat 100% / cover;
  }
  .expand {
    margin-left: 40px;
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 16px;
    color: #ffffff;
  }
  .close {
    width: 16px;
    height: 16px;
    color: #c9c9c9;
  }
}
.nav {
  height: 0px;
  overflow: hidden;
  transition: height 0.2s ease;
  a {
    display: block;
    font-size: 16px;
    padding: 18px;
    font-weight: 500;
    color: #0a1943;
    border-bottom: 1px solid #f0f0f0;
  }
}
</style>