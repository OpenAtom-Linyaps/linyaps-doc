
import DefaultTheme from 'vitepress/theme'
import './custom.scss'

import Layout from './components/layout/flow.vue'

const { NotFound } = DefaultTheme

export default {
  Layout,
  NotFound
  // }
}

// .vitepress/theme/index.js
/* import DefaultTheme from 'vitepress/theme'
import './custom.scss'

import FullLayout from './components/layout/full.vue'
import Header from './components/zh/header/index.vue'
import Footer from './components/zh/footer/index.vue'
import HomeLayout from './components/zh/home/index.vue'

import EnHeader from './components/en/header/index.vue'
import EnFooter from './components/en/footer/index.vue'
import EnHomeLayout from './components/en/home/index.vue'

const { Layout, NotFound } = DefaultTheme
let langLayout = Layout
if (typeof location === 'object') {
  if (location.pathname === '/') {
    langLayout = HomeLayout
  }
  if (location.pathname.startsWith("/en/index.html")) {
    langLayout = EnHomeLayout
  }
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
} */