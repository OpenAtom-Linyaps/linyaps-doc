import DefaultTheme from 'vitepress/theme'

import NewLayout from './components/NewLayout.vue'

import './custom.scss'

export default {
    ...DefaultTheme,
    Layout: NewLayout
}
