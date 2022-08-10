<template>
  <div class="container">
    <div class="header" :class="{ 'header-hide': scrollVal.pos === 1,'header-theme': scrollVal.headerTheme }">
      <slot name="header" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<script setup>
import { reactive } from "@vue/reactivity";
import { onBeforeUnmount, onMounted, watch } from "@vue/runtime-core";

const scrollVal = reactive({
  // 当前滚动位置
  currentScrollTop: 0,
  // 滚动方向 -1：向上滚动  0：默认参数值, 未滚动  1：向下滚动
  pos: 0,
  headerTheme: false,
  endScrollTop: 0
})

const listenScroll = () => {
  window.addEventListener('scroll', () => {
    scrollVal.currentScrollTop = window.scrollY;
    if (window.scrollY >= 610) {
      scrollVal.headerTheme = true
    }else{
      scrollVal.headerTheme = false
    }
  });
}

onMounted(() => {
  listenScroll()
})

watch(() => scrollVal.currentScrollTop, (nVal, oVal) => {
  setTimeout(() => {
    if (nVal > oVal) {
      scrollVal.pos = 1
    }
    if (nVal < oVal) {
      scrollVal.pos = -1
    }
    if (nVal === window.scrollY) {
      scrollVal.endScrollTop = nVal
    }
  }, 20)
  if (scrollVal.endScrollTop === oVal) {
    console.log(oVal);
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => { });
})
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  .header {
    position: fixed;
    width: 100%;
    height: 72px;
    top: 0px;
    transition: transform 0.3s ease;
    transform: translateY(0px);
  }
  .header-theme {
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    :deep(.nav) {
      a {
        color: #333;
      }

      .selected {
        color: #025bff;
      }
    }
    :deep(.lang) {
      .zh {
        color: #333;
      }
      i {
        color: rgba($color: #333, $alpha: 0.5);
      }
      .en {
        color: #333;
      }
    }
  }
  .header-hide {
    transform: translateY(-72px);
  }
  .footer {
    height: 347px;
    background: red;
  }
}
</style>