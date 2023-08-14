<!--
SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.

SPDX-License-Identifier: LGPL-3.0-or-later
-->

<template>
  <Layout v-if="lay.isDefault" />
  <Home v-if="lay.isHome" />
  <EnHome v-if="lay.isEnHome" />
</template>
<script setup>
import Home from './zh/home/index.vue'
import EnHome from './en/home/index.vue'

import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { onMounted, computed } from 'vue'
const { Layout } = DefaultTheme

const route = useRoute()

const lay = computed(() => {
  let _lay = {
    isDefault: false,
    isHome: false,
    isEnHome: false
  }
  if (route.path === '/') {
    _lay.isHome = true
  } else if (route.path === '/en/') {
    _lay.isEnHome = true
  } else {
    _lay.isDefault = true
  }
  return _lay
})

// onMounted(() => {
//   if (route.path === '/en/') {
//     location.href = '/en/index.html'
//   }
// })
</script>
