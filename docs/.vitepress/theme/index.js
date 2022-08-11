// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

import FullLayout from './components/layout/full.vue'
import Header from './components/zh/header/index.vue'
import Footer from './components/zh/footer/index.vue'
import HomeLayout from './components/zh/home/index.vue'

import EnHeader from './components/en/header/index.vue'
import EnFooter from './components/en/footer/index.vue'
import EnHomeLayout from './components/en/home/index.vue'

const { Layout, NotFound } = DefaultTheme
let langLayout = null
if (location.pathname === '/') {
  langLayout = HomeLayout
} else if (location.pathname.startsWith("/en/index.html")) {
  langLayout = EnHomeLayout
} else {
  langLayout = Layout
}

export default {
  Layout: langLayout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    app.component('FullLayout', FullLayout)
    app.component('Header', Header)
    app.component('Footer', Footer)
    app.component('HomeLayout', HomeLayout)
    app.component('EnHeader', EnHeader)
    app.component('EnFooter', EnFooter)
    app.component('EnHomeLayout', EnHomeLayout)
  }
}