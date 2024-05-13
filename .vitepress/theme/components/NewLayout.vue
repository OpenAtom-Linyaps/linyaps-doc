<!--
SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.

SPDX-License-Identifier: LGPL-3.0-or-later
-->

<template>
  <Layout v-if="lay.isDefault">
    <template #doc-before>
      <div class="tip custom-block">
        <p class="custom-block-title">TIP</p>
        <p>{{tips}}</p>
      </div>
      <br/>
    </template>
  </Layout>
  <Home v-if="lay.isHome" />
  <EnHome v-if="lay.isEnHome" />
</template>
<script setup>
import Home from './zh/home/index.vue'
import EnHome from './en/home/index.vue'

import { generateVersions } from '../versions.js';

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

const tips = computed(() => {
  const { defaultVersion } = generateVersions()
  let pathParts = route.path.split('/')
  let versionPart = pathParts.find(part => /^\d+\.\d+\.\d+$/.test(part))
  let _tips = ""

  if (route.path.includes('/en/')) {
    _tips = "This document is applicable to version "

    if (versionPart === undefined) {
      _tips = _tips + defaultVersion
    } else {
      _tips = _tips + versionPart
    }

    _tips = _tips + ", Please use the command ll-cli --version to check your LingLong program version."
  } else {
    _tips = "此文档适用于 "

    if (versionPart === undefined) {
      _tips = _tips + defaultVersion
    } else {
      _tips = _tips + versionPart
    }

    _tips = _tips + ", 请使用 ll-cli --version 检查您的玲珑程序版本。"
  }

  return _tips
})

// console.log(tips)

// onMounted(() => {
//   if (route.path === '/en/') {
//     location.href = '/en/index.html'
//   }
// })
</script>
