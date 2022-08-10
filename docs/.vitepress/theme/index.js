// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

import FullLayout from './components/layout/full.vue'
import Header from './components/zh/header/index.vue'
import Footer from './components/zh/footer/index.vue'
import HomeLayout from './components/zh/home/index.vue'
console.log(location.pathname);
const isFull = location.pathname === '/' ? true : false
const { Layout, NotFound } = DefaultTheme
export default {
  Layout: isFull ? HomeLayout : Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    app.component('Header', Header)
    app.component('Footer', Footer)
    app.component('FullLayout', FullLayout)
    app.component('HomeLayout', HomeLayout)
  }
}