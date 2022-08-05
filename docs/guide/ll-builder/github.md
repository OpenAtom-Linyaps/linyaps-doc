# 上架应用到商店

## 主要流程

- 创建一个玲珑工程，使用ll-builder在本地构建出玲珑应用。

- 向[https://github.com/linuxdeepin/linglong-hub](https://github.com/linuxdeepin/linglong-hub)项目提交pull request。

- 项目维护者审核内容通过后，触发构建流程，构建成功后内容将被提交到测试环境，github action可以获取构建日志及状态。

- 应用通过测试后将会上架到[玲珑网页商店](https://store.linglong.space)。
