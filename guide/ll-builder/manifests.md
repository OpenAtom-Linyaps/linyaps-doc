<!--
SPDX-FileCopyrightText: 2023 UnionTech Software Technology Co., Ltd.

SPDX-License-Identifier: LGPL-3.0-or-later
-->

# 构建配置文件简介

`linglong.yaml` 是玲珑项目工程的描述文件，记录构建所需的相关信息。如构建产物的名称、版本、源码地址、构建依赖等。

## 工程目录结构

```bash
{project-root}
├── linglong.yaml
└── .linglong-target

{user-home}
└── .cache
    └── linglong-builder
        ├── repo
        └── layers
```

## 字段定义

### 软件包元信息配置

```yaml
package:
  id: org.deepin.reader
  version: 5.9.17
  kind: app
  description: |
    reader for deepin os.
```

| name        | description                                                 |
| ----------- | ----------------------------------------------------------- |
| description | 构建产物的详细描述                                          |
| id          | 构建产物的唯一名称                                          |
| kind        | 构建产物的类型：app、runtime、lib，依次代表应用、运行时、库 |
| version     | 构建产物的版本                                              |

### 运行时（runtime）

应用运行依赖，同时也是构建依赖。

```yaml
runtime:
  id: org.deepin.runtime
  version: 20.0.0
  # NOT IMPLEMENTATION NOW
  digest: 4d85525f09211381c77d2085c9c1057
```

可简写为以下形式:

```text
runtime:
  id: org.deepin.Runtime/20.5.0
```

| name    | description                                             |
| ------- | ------------------------------------------------------- |
| id      | 运行时（runtime）的唯一名称                             |
| version | 运行时（runtime）版本                                   |
| digest  | （暂未使用, 该字段可用来绑定唯一版本的运行时） |

### 依赖项

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

| name    | description                                                 |
| ------- | ----------------------------------------------------------- |
| id      | 依赖的唯一名称                                              |
| type    | 依赖的类型，类型为 runtime 的依赖，将会和构建内容一起被提交;未设置type时, 该依赖仅参与构建|
| version | 依赖的版本                                                  |
| digest  | （暂未使用，该字段可用来绑定唯一版本的依赖）                |

ll-builder在项目构建时将从远程存储库拉取dpends下包含的依赖到本地。若远程存储库不存在该依赖或其无法满足要求, 
可新增source与build内容, ll-builder将优先构建包含source与build类型的依赖并应用到项目构建中。

```yaml
depends: 
  - id: icu
    version: 63.1.0
    source:
      kind: git
      url: "https://github.com/linuxdeepin/deepin-reader.git"
      version: master
      commit: 3c651bcc40748fc5d02d9134fcaee14fda44ab62
    build:
      kind: autotools
```

### 源码

描述源码信息。

```yaml
source:
  kind: git
  url: "https://github.com/linuxdeepin/deepin-reader.git"
  version: master
  commit: 3c651bcc40748fc5d02d9134fcaee14fda44ab62
  patch: 
    - patches/fix-install-prefix-path.patch
    - patches/fix-lib-install-path.patch
```

| name    | description                             |
| ------- | --------------------------------------- |
| kind    | 源码类型，可选类型 local、archive、git  |
| url     | 源码地址，类型为 archive、git 时填写    |
| version | 源码分支版本，类型为 git 时填写         |
| commit  | 源码某次提交 hash 值，类型为 git 时填写 |
| patch   | 源码补丁路径                            |

### 构建规则

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

| name      | description                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| build     | 构建时build规则                                                                  |
| configure | 构建时configure规则                                                              |
| install   | 构建时install规则                                                                |
| kind      | 构建类型，可选类型 manual、autotools、cmake、qmake                               |
| manual    | 构建规则，声明使用 manual 时，表示自定义规则，即对build、install、configure 重写 |

### 变量

描述构建可以使用的变量，配合build构建使用。

```yaml
variables:
  build_dir: |
  dest_dir: |
  conf_args: |
    --prefix=${PREFIX}
    --libdir=lib/${TRIPLET}
  extra_args: |
    --doc=enable
  jobs: |
    -j64

build:
  kind: manual
  manual:
    configure: |
      ./configure ${conf_args} ${extra_args}
    build: |
      make ${jobs}
    install: |
      make DESTDIR=${dest_dir} install
```

| name       | description                                                                               |
| ---------- | ----------------------------------------------------------------------------------------- |
| build_dir  | 内置变量之一，variables字段下自定义赋值，build字段下使用                                  |
| dest_dir   | 同build_dir                                                                               |
| conf_args  | 同build_dir                                                                               |
| extra_args | 同build_dir                                                                               |
| jobs       | 同build_dir                                                                               |
| PREFIX     | 环境变量之一，可在variable、build字段下使用；提供构建时的安装路径                       |
| TRIPLET    | 环境变量之一，可在variable、build字段下使用；提供包含架构信息的三元组，如x86_64-linux-gnu |

## 完整示例

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
  url: "https://github.com/linuxdeepin/deepin-reader.git"
  version: master
  commit: 3c651bcc40748fc5d02d9134fcaee14fda44ab62

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

package 类型为runtime时，将提交所有依赖内容。

## 构建工具模板

### automake类型构建模板

`autotools.yaml` 提供了通用的 `automake` 类型构建模板, 模板文件如下:

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

### qmake构建模板

`qmake.yaml` 提供了通用的 `qmake` 构建模板, 模板文件如下:

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

### cmake构建模板

`cmake.yaml` 提供了通用的 `cmake` 构建模板, 模板文件如下:

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

## runtime 20.5.0 包含依赖项

| id                     | version   |
| ---------------------- | --------- |
| qtbase                 | 5.11.3.15 |
| qt3d                   | 5.11.3    |
| qtcharts               | 5.11.3    |
| qtconnectivity         | 5.11.3    |
| qtgamepad              | 5.11.3    |
| qtsensors              | 5.11.3    |
| qtspeech               | 5.11.3    |
| qtvirtualkeyboard      | 5.11.3    |
| qtserialport           | 5.11.3    |
| qtnetworkauth          | 5.11.3    |
| qttools                | 5.11.3    |
| qtx11extras            | 5.11.3    |
| qtdeclarative          | 5.11.3    |
| qtsvg                  | 5.11.3    |
| qtscript               | 5.11.3    |
| qtgraphicaleffects     | 5.11.3    |
| qtquickcontrols        | 5.11.3    |
| qtquickcontrols2       | 5.11.3    |
| qtxmlpatterns          | 5.11.3    |
| qtwayland              | 5.15.1.7  |
| qtmultimedia           | 5.11.3    |
| qtwebchannel           | 5.11.3    |
| qtwebsockets           | 5.11.3    |
| qtimageformats         | 5.11.3    |
| qtlocation             | 5.11.3    |
| dtkcommon              | 5.5.3     |
| dtkcore                | 5.5.26    |
| dtkgui                 | 5.5.22    |
| dtkwidget              | 5.5.39    |
| dtkdeclarative         | 5.0.1     |
| qtxdg                  | 3.3.1.1   |
| qt5integration         | 5.1.17    |
| double-conversion      | 3.1.0.2   |
| deepin-shortcut-viewer | 5.0.5     |
| fcitx-qt5              | 1.2.6.4   |
| gsettings-qt           | 0.2       |
| qt5platform-plugins    | 5.0.58    |

## 其他可用依赖

| id                   | version    |
| -------------------- | ---------- |
| aria2                | 1.34.0     |
| bzip2                | 1.0.6      |
| cdparanoia           | 3.10.2     |
| dde-control-center   | 5.5.23     |
| dde-dock             | 5.5.15     |
| disomaster           | 5.0.7      |
| djvulibre            | 3.5.27.1   |
| ffmpeg               | 4.1.8      |
| ffmpegthumbnailer    | 2.1.1      |
| freeimage            | 3.18.0     |
| gio-qt               | 0.0.11     |
| gst-plugins-good1.0  | 1.14.5     |
| gstreamer1.0         | 1.14.6     |
| ilmbase              | 2.2.1      |
| image-editor         | 1.0.9      |
| jxrlib               | 1.1.1      |
| karchive             | 5.54.0     |
| kcodecs              | 5.54.0     |
| kconfig              | 5.54.0     |
| kcoreaddons          | 5.54.0     |
| kcrash               | 5.54.0     |
| kdbusaddons          | 5.54.0     |
| kglobalaccel         | 5.54.0     |
| ki18n                | 5.54.0     |
| kservice             | 5.54.0     |
| ksyntax-highlighting | 5.54.0     |
| kwayland             | 5.57.0     |
| kwindowsystem        | 5.54.0     |
| leveldb              | 1.20       |
| libarchive           | 3.3.3      |
| libchardet           | 1.0.4      |
| libdbusmenu-qt       | 0.9.3      |
| libdmr               | 5.9.13     |
| libdv                | 1.0.0      |
| libepoxy             | 1.5.3      |
| libevent             | 2.1.8      |
| libraw               | 0.19.2     |
| libvisual            | 0.4.0      |
| libxrandr            | 1.5.1      |
| libxtst              | 5.5.15     |
| libzip               | 1.5.1.8    |
| minizip              | 1.1.1      |
| mpv                  | 0.29.1.37  |
| opencv               | 3.2.0      |
| openexr              | 2.2.1.4    |
| procps               | 3.3.15     |
| qtdbusextended       | 0.0.3      |
| qtmpris              | 0.1.0.1    |
| sqlite3              | 3.27.2.3   |
| taglib               | 1.11.1     |
| uchardet             | 0.0.6      |
| udisks2-qt5          | 5.0.3      |
| vlc                  | 3.0.11     |
| xcb-util             | 0.3.8.1    |
| icu                  | 63.1       |
| dde-qt-dbus-factory  | 5.5.12     |
| gst-plugins-base1.0  | 1.14.4.2   |
| libdvdnav            | 6.0.0      |
| libdvdread           | 6.0.0      |
| libical3             | 3.0.4      |
| libva                | 2.4.0      |
| libxcursor           | 1.1.15     |
| orc                  | 0.4.28     |
| poppler              | 0.71.0.2   |
| kmod                 | 26.1       |
| pciutils             | 3.5.2.4    |
| xz-utils             | 5.2.4.1    |
| libxslt              | 1.1.32.3   |
| v4l-utils            | 1.20.0     |
| portaudio19          | 19.6.0     |
| gst-plugins-bad1.0   | 1.14.4.2   |
| gst-plugins-ugly1.0  | 1.14.4.2   |
| nettle               | 3.4.1.2    |
| aom                  | 1.0.0.1    |
| codec2               | 0.8.1      |
| libdc1394            | 2.2.5      |
| libmysofa            | 0.6        |
| x264                 | 0.155.2917 |
| x265                 | 2.9        |
| xavs2                | 1.4.1      |
| cunit                | 2.1        |
| lapack               | 3.8.0.1    |
| openblas             | 0.3.5      |
| crystalhd            | 0.0.1      |
| davs2                | 1.7.1      |
| elfutils             | 0.176.2    |
