<template>
  <div class="full-container">
    <div class="full-header" :class="{ 'header-theme': scrollVal.headerTheme }">
      <slot name="header" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
    <div class="full-footer">
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
  headerTheme: false
})

const listenScroll = () => {
  window.addEventListener('scroll', () => {
    scrollVal.currentScrollTop = window.scrollY;
    if (window.scrollY > 20) {
      scrollVal.headerTheme = true
    } else {
      scrollVal.headerTheme = false
    }
  });
}

onMounted(() => {
  listenScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => { });
})
</script>
<style lang="scss">
.full-container {
  position: relative;
  width: 100%;
  .full-header {
    position: fixed;
    width: 100%;
    height: 72px;
    top: 0px;
    z-index: 1000;
  }
  .header-theme {
    background-color: rgba(255, 255, 255, 0.8);
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
  .full-footer {
    height: 347px;
  }
}
</style>