<template>
  <FullLayout>
    <template #header>
      <Header />
    </template>
    <template #content>
      <div class="banner">
        <div class="w-center enter">
          <!-- <h1>玲珑，为兼容与安全而生</h1>
          <p class="describe">
            玲珑是一种新型的独立管理工具集，致力于治理Linux系统下传统软件包格式复杂、交叉的依赖关系导致的各种兼容性问题，以及过于松散的权限管控导致的安全风险。
          </p>
          <div class="link-wrap">
            <div class="link">10分钟快速构建</div>
            <div class="link">runtime清单</div>
            <div class="link">社区讨论</div>
          </div> -->
        </div>
      </div>
      <div class="mean-block"></div>
      <div class="feature-block"></div>
    </template>
    <template #footer>
      <Footer />
    </template>
  </FullLayout>
  <h1>uuuu</h1>
</template>
<script>

export default {
  name: 'HomeLayout',
  data() {
    return {
      test: 344
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.w-center {
  width: 1200px;
  margin: auto;
}
.banner {
  width: 100%;
  height: 640px;
  background: url(/asset/home/banner.png) no-repeat 50% / cover;
  .enter {
    // margin-top: 100px;
  }
  .link-wrap {

  }
}
.mean-block {
  height: 665px;
  background-color: #ffffff;
}
.feature-block {
  height: 739px;
  background-color: yellow;
}
</style>