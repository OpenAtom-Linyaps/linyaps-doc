# 构建配置文件简介

`linglong.yaml` 是玲珑项目工程的描述文件，记录构建所需的相关信息。如构建产物的名称、版本、源码地址、构建依赖等。

`linglong.yaml` 示例如下:

```yaml
package:
  id: org.deepin.reader
  version: 5.9.17
  kind: app
  description: |
    reader for deepin os.

runtime:
  id: org.deepin.runtime
  version: 20.0.0

depends:
  - id: libopenjp2/2.4.0
  - id: djvu
    version: 3.5.28

source:
  kind: git
  url: "http://gerrit.uniontech.com/deepin-reader"
  commit: a42702f164d85525f09211381c77d2085c9c1057
  patch: patches/fix-install-prefix.patch

build:
  kind: manual
  manual:
    configure: |
      mkdir build
      cd build
      qmake -r PREFIX=${PREFIX} ..
      make -j
      make test
      make -j install
```

## 工程目录结构

```bash
{project-root}
|__ linglong.yaml
|__ .linglong-target // build cache for project

{user-home}
|__ .cache/linglong-builder/repo
|__ .cache/linglong-builder/layers
```

### 字段定义

## package

```yaml
package:
  id: org.deepin.reader
  version: 5.9.17
  kind: app
  description: |
    reader for deepin os.
```

| name        | description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| id          | 构建产物的唯一名称。                                                       |
| version     | 构建产物的版本。                                                           |
| kind        | 构建产物的类型。可选类型：app、runtime、lib，依次代表应用、运行时、库。           |
| description | 构建产物的详细描述。                                 |

## runtime

应用运行时环境，同时也是构建依赖。 

```yaml
runtime:
  id: org.deepin.runtime
  version: 20.0.0
  # NOT IMPLEMENTATION NOW
  digest: 4d85525f09211381c77d2085c9c1057
```

同时也可写为以下形式:

```
runtime:
  id: org.deepin.Runtime/20.5.0
```

| name    | description                                                     |
| ------- | --------------------------------------------------------------- |
| id      | 运行时（runtime）的唯一名称。                                      |
| version | 运行时（runtime）版本。                                           |
| digest  | （暂未使用, 该字段可用来绑定唯一版本的运行时（runtime）。 |


## depends

描述应用的构建依赖与运行依赖。

```yaml
depends:
  - id: libopenjp2
    version: 2.4.0
  - id: libopenjp
    version: 2.1.0
    type: runtime
  - id: djvu
    version: 3.5.28
    # NOT IMPLEMENTATION NOW
    digest: 381c77d2085c9c10574d85525f09211
```

| name    | description                                                     |
| ------- | --------------------------------------------------------------- |
| id      | 依赖的唯一名称。                                                   |
| version | 依赖的版本。                                                      |
| type    | 依赖的类型，类型为runtime的依赖，将会和构建内容一起被提交。             |
| digest  | （暂未使用, 该字段可用来绑定唯一版本的依赖）                           |

## source

描述源码信息。

```yaml
source:
  kind: git
  url: "http://gerrit.uniontech.com/deepin-reader"
  version: master
  commit: a42702f164d85525f09211381c77d2085c9c1057
  patch: 
    - patches/fix-install-prefix-path.patch
    - patches/fix-lib-install-path.patch
```

| name    | description                                                     |
| ------- | --------------------------------------------------------------- |
| kind    | 源码类型，可选类型local、archive、git。                             |
| url     | 源码地址，类型为archive、git时填写。                                |
| version | 源码分支版本，类型为git时填写。                                      |
| commit  | 源码某次提交hash值，类型为git时填写。                                |
| patch   | 源码补丁路径。                                                    |

## build

描述构建规则。

```yaml
build:
  kind: manual
  manual:
    configure: |
      mkdir build
      cd build
      qmake -r PREFIX=${PREFIX} ..
    build: |
      make -j
      make test
    install: |
      make -j install
```

```yaml
build:
  kind: autotools
  manual: 
    configure: |
      ./bootstrap.sh 
```

| name      | description                                                     |
| -------   | --------------------------------------------------------------- |
| kind      | 构建类型，可选类型manual、autotools、cmake、qmake。                       |
| manual    | 构建规则，声明使用manual时，表示自定义规则，即对build、install、configure重写。|
| configure | 构建时configure规则。                                             |
| build     | 构建时build规则。                                                 |
| install   | 构建时install规则。                                               |


## variables

描述构建可以使用的变量，配合build构建使用。

```yaml
variables:
   conf_args: |
     --prefix=/usr
   extra_args: |
     --doc=enable
   jobs: |
     -j64

build:
  kind: manual
  manual:
    configure: |
      ./configure ${conf_args} ${extra_args}
```
| name      | description                                                     |
| -------   | --------------------------------------------------------------- |
| conf_args | 内置变量。                                                        |
| extra_args| 内置变量。                                         |
| jobs      | 内置变量。                                                    |


##  完整示例

### 构建应用

```yaml
package:
  id: org.deepin.reader
  version: 5.9.17
  kind: app
  description: |
    reader for deepin os.

runtime:
  id: org.deepin.runtime
  version: 20.0.0

depends:
  - id: libopenjp2
    version: 2.4.0
  - id: djvu
    version: 3.5.28

source:
  kind: git
  url: "http://gerrit.uniontech.com/deepin-reader"
  version: 5.9.9.2
  commit: a42702f164d85525f09211381c77d2085c9c1057
  patch: patches/fix-install-prefix.patch

build:
  kind: qmake
```

### 构建依赖库

```yaml
package:
  id: libopenjp2
  kind: lib
  version: 2.4.0

base:
  id: org.deepin.base
  version: 20.5.0

source:
  kind: git
  url: https://github.com/uclouvain/openjpeg
  version: 2.4.0
  commit: 37ac30ceff6640bbab502388c5e0fa0bff23f505

build:
  kind: cmake
```

### 构建运行时

```yaml
package:
  id: org.deepin.Runtime
  kind: runtime
  version: 20.5.0
  description: |
    runtime of deepin

base:
  id: org.deepin.base/20.5.0

depends:
  - id: qtbase/5.11.3.15
  - id: qttool/5.11.3
  - id: qtx11extras/5.11.3
  - id: qtsvg/5.11.3
  - id: qtxdg/3.5.0
  - id: qtmultimedia/5.11.3
  - id: "gsettings-qt/0.2"
  - id: dtkcommon/5.5.21
  - id: dtkcore/5.5.27
  - id: dtkgui/5.5.22
  - id: dtkwidget/5.5.40
  - id: "qt5platform-plugins/5.0.46"
  - id: qt5integration/5.5.19

build:
  kind: manual
  manual:
    configure: |
      echo skip configure
```

package 类型为runtime时，将提交所有依赖内容.

# 构建模板
## automake类型构建模板

`autotools.yaml` 提供了通用的`automake`类型构建模板, 模板文件如下:

```yaml
variables:
  build_dir: build_dir
  conf_args: |
    --prefix=${PREFIX} \
    --libdir=${PREFIX}/lib/${TRIPLET}
  extra_args: |
  dest_dir: |
  jobs: -j${JOBS}

build:
  kind: autotools
  manual:
    configure: |
      #autogon.sh, bootstrap.sh
      autoreconf -ivf
      ./configure ${conf_args} ${extra_args}
    build: |
      make ${jobs}
    install: |
      make ${jobs} DESTDIR=${dest_dir} install
```
使用方法：

```yaml
build:
  kind: autotools
```
## qmake构建模板

`qmake.yaml` 提供了通用的`qmake`构建模板, 模板文件如下:

```yaml
variables:
  build_dir: build_dir
  conf_args: |
    PREFIX=${PREFIX} \
    LIB_INSTALL_DIR=${PREFIX}/lib/${TRIPLET}
  extra_args: |
  dest_dir: |
  jobs: -j${JOBS}

build:
  kind: qmake
  manual :
    configure: |
      qmake -makefile ${conf_args} ${extra_args}
    build: |
      make ${jobs}
    install: |
      make ${jobs} DESTDIR=${dest_dir} install
```
使用方法：

```yaml
build:
  kind: qmake
```
## cmake构建模板

`cmake.yaml` 提供了通用的`cmake`构建模板, 模板文件如下:

```yaml
variables:
  build_dir: build_dir
  conf_args: |
    -DCMAKE_INSTALL_PREFIX=${PREFIX} \
    -DCMAKE_INSTALL_LIBDIR=${PREFIX}/lib/${TRIPLET}
  extra_args: |
  dest_dir: |
  jobs: -j${JOBS}

build:
  kind: cmake
  manual :
    configure: |
      cmake -B ${build_dir} ${conf_args} ${extra_args}
    build: |
      cmake --build ${build_dir} -- ${jobs}
    install: |
      env DESTDIR=${dest_dir} cmake --build ${build_dir} --target install
```

使用方法：

```yaml
build:
  kind: cmake
```