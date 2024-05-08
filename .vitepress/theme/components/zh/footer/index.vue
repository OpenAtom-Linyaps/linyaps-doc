<!--
SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.

SPDX-License-Identifier: LGPL-3.0-or-later
-->

<template>
  <div class="footer-container">
    <div class="block u-flex">
      <div class="flex-none logo-panel">
        <div class="logo"></div>
        <h2>打造操作系统新生态</h2>
      </div>
      <div class="flex-none link" style="width: 150px;">
        <h3>快速链接</h3>
        <a href="https://www.uniontech.com" target="_blank">统信官网</a>
        <a href="https://www.chinauos.com" target="_blank">UOS生态社区</a>
      </div>
      <div class="flex-none link" style="width: 150px;">
        <h3>关于我们</h3>
        <a href="https://www.uniontech.com/about" target="_blank">公司介绍</a>
        <a href="https://www.uniontech.com/partners" target="_blank">合作伙伴</a>
      </div>
      <div class="flex-grow link">
        <h3>联系我们</h3>
        <span>合作：cooperation@uniontech.com</span>
        <span>适配：operation@uniontech.com</span>
        <span>联系电话：400-8588-488（周一至周五 9:00-18:00）</span>
      </div>
      <div class="flex-none offical" style="width: 150px;">
        <h3>关注微信公众号</h3>
        <div class="qcode account"></div>
      </div>
      <div class="flex-none offical">
        <h3>技术服务</h3>
        <div class="qcode service"></div>
      </div>
    </div>
    <div class="copyright">
      <span>Copyright © 2022 统信软件技术有限公司</span>
      &nbsp;
      <a href="https://beian.miit.gov.cn/">京ICP备20003780号-4</a>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.footer-container {
  background-color: #061d3a;
  .block {
    margin: auto;
    width: 1200px;
    padding: 72px 0px 64px;
  }
  .logo-panel {
    width: 220px;
    .logo {
      width: 123px;
      height: 30px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(https://cdn-nu-common.uniontech.com/logo/distribution/Plymouth-white.png);
      margin-left: 10px;
    }
    h2 {
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      margin-top: 30px;
    }
  }
  .link {
    h3 {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 30px;
    }
    a {
      display: block;
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.45);
      margin-top: 14px;
    }
    span {
      display: block;
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.45);
      margin-top: 14px;
    }
  }
  .offical {
    h3 {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 30px;
    }
    .qcode {
      width: 108px;
      height: 108px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .account {
      background-image: url(https://cdn-nu-common.uniontech.com/logo/code/uniontech.jpg);
    }
    .service {
      background-image: url(https://cdn-nu-common.uniontech.com/logo/code/technical_support.jpg);
    }
  }

  .copyright {
    border-top: 1px solid #666666;
    margin: auto;
    width: 1200px;
    padding: 28px 0px;
    text-align: right;
    font-size: 14px;
    font-weight: 400;
    color: #d8d8d8;
  }
}
</style>
