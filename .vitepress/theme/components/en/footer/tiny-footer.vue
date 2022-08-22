<template>
  <div class="footer-container">
    <div class="block">
      <div class="logo"></div>
      <div class="link">
        <h3>Links</h3>
        <div class="u-flex u-justify-start u-items-center">
          <a href="https://www.uniontech.com" target="_blank">UnionTech Software</a>
          <a href="https://www.chinauos.com" style="margin-left: 42px;" target="_blank">UOS Community</a>
        </div>
      </div>
      <div class="link">
        <h3>About Us</h3>
        <div class="u-flex u-justify-start u-items-center">
          <a href="https://www.uniontech.com/about" target="_blank">Company Profile</a>
          <a href="https://www.uniontech.com/partners" style="margin-left: 42px;" target="_blank">Partners</a>
        </div>
      </div>
      <div class="flex-grow link">
        <h3>Contact Us</h3>
        <span>Cooperation：cooperation@uniontech.com</span>
        <span>Adaption：operation@uniontech.com</span>
        <span>Tel：400-8588-488（Monday to Friday 9:00-18:00）</span>
      </div>
      <div class="offical u-flex u-justify-start u-items-center">
        <div style="margin-right: 15px;">
          <div class="qcode account"></div>
          <h3>Follow Us on WeChat</h3>
        </div>
        <div>
          <div class="qcode service"></div>
          <h3>Technical Support</h3>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span>Copyright © 2022 UnionTech Software. All Rights Reserved.</span>
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
    width: 115px;
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