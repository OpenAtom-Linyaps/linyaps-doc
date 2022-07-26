## 初始化玲珑工程

```text
ll-builder create org.deepin.calculator
```
## 编辑linglong.yaml

### 填写软件包元信息

```text
package:
  id: org.deepin.calculator
  name: deepin-calculao
  version: 5.9.17
  kind: app
  description: |
    calculator for deepin os.
```
### 填写运行时信息

```text
runtime:
  id: org.deepin.runtime
  version: 20.0.0
```
### 填写源码信息

使用git源码

```text
source:
  kind: git
  url: "https://github.com/linuxdeepin/deepin-calculator.git"
  commit: 7b5fdf8d133c356317636bb4b4a76fc73ef288c6
```
### 填写依赖

```text
depends:
  - id: "dde-qt-dbus-factory"
    version: 5.5.12
  - id: googletest
    version: 1.8.1
  - id: icu
    version: 63.1
    type: runtime
  - id: xcb-util
    type: runtime
```
### 选择构建模板

源码为cmake工程，填写build 类型为cmake（模板内容见cmake.yaml）。

```text
build:
  kind: cmake
```
### 覆盖模板内容

如果通用模板内容无法满足构建需求，可以在linglong.yaml文件覆盖指定内容, 未在linglong.yaml 重新声明的变量或命令将会继续沿用。

覆盖变量extra_args：

```text
variables:
  extra_args: |
   -DVERSION=1.1.1 \
   -DPREFIX=/usr
```
覆盖构建命令build：
```text
build:
  kind: cmake
  manual :
    build: |
      cd ${build_dir} && make -j8
 
```
### 完整linglong.yaml

```text
package:
  id: org.deepin.calculator
  name: deepin-calculator
  version: 5.7.21
  kind: app
  description: |
    calculator for deepin os
variables:
  extra_args: |
    -DVERSION=${VERSION} \
    -DAPP_VERSION=5.7.21
runtime:
  id: org.deepin.Runtime
  version: 20.5.0
depends:
  - id: "dde-qt-dbus-factory"
    version: 5.5.12
  - id: googletest
    version: 1.8.1
  - id: icu
    version: 63.1
    type: runtime
  - id: xcb-util
    type: runtime
source:
  kind: git
  url: "https://github.com/linuxdeepin/deepin-calculator.git"
  commit: 7b5fdf8d133c356317636bb4b4a76fc73ef288c6
build:
  kind: cmake
```
## 开始构建

在玲珑工程根目录下执行build子命令：

```text
ll-builder build
```
## 导出构建内容

在玲珑工程根目录下执行export子命令，检出构建内容，同时生成bundle文件。

```text
ll-builder export
```
## 仓库推送

```text
ll-builder push org.deepin.calculator_1.1.1_x86_64.uab
```
 
