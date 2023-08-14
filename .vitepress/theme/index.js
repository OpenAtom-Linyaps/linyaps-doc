// SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.
//
// SPDX-License-Identifier: LGPL-3.0-or-later

import DefaultTheme from 'vitepress/theme'

import NewLayout from './components/NewLayout.vue'

import './custom.scss'

export default {
    ...DefaultTheme,
    Layout: NewLayout
}
