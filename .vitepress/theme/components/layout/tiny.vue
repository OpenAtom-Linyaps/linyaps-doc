<template>
  <div class="full-container">
    <div class="tiny-header" :class="{ 'tiny-header-theme': scrollVal.headerTheme }">
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
import { onBeforeUnmount, onMounted } from "@vue/runtime-core";

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
<style lang="scss" scoped>
</style>