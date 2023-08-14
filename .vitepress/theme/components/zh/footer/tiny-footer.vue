<!--
SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.

SPDX-License-Identifier: LGPL-3.0-or-later
-->

<template>
  <div class="footer-container">
    <div class="block">
      <div class="logo"></div>
      <div class="link">
        <h3>快速链接</h3>
        <div class="u-flex u-justify-start u-items-center">
          <a href="https://www.uniontech.com" target="_blank">统信官网</a>
          <a href="https://www.chinauos.com" style="margin-left: 42px;" target="_blank">UOS生态社区</a>
        </div>
      </div>
      <div class="link">
        <h3>关于我们</h3>
        <div class="u-flex u-justify-start u-items-center">
          <a href="https://www.uniontech.com/about" target="_blank">公司介绍</a>
          <a href="https://www.uniontech.com/partners" style="margin-left: 42px;" target="_blank">合作伙伴</a>
        </div>
      </div>
      <div class="flex-grow link">
        <h3>联系我们</h3>
        <span>合作：cooperation@uniontech.com</span>
        <span>适配：operation@uniontech.com</span>
        <span>联系电话：400-8588-488（周一至周五 9:00-18:00）</span>
      </div>
      <div class="offical u-flex u-justify-start u-items-center">
        <div>
          <div class="qcode account"></div>
          <h3 style="margin-left: -2px;">关注微信公众号</h3>
        </div>
        <div>
          <div class="qcode service"></div>
          <h3 style="margin-left: 22px;">技术服务</h3>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span>Copyright © 2022 统信软件技术有限公司</span>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.footer-container {
  background-color: #061d3a;
  .block {
    padding: 20px 15px;
  }
  .logo {
    width: 123px;
    height: 30px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(https://cdn-nu-common.uniontech.com/logo/distribution/Plymouth-white.png);
  }
  .link {
    margin-top: 40px;
    margin-bottom: 15px;
    h3 {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.85);
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
    margin-top: 40px;
    h3 {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.85);
    }
    .qcode {
      width: 108px;
      height: 108px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin-right: 15px;
      margin-bottom: 5px;
    }
    .account {
      background-image: url(https://cdn-nu-common.uniontech.com/logo/code/uniontech.jpg);
    }
    .service {
      background-image: url(https://cdn-nu-common.uniontech.com/logo/code/technical_support.jpg);
    }
  }

  .copyright {
    margin: auto;
    padding: 28px 0px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #d8d8d8;
  }
}
</style>