# 构建配置文件简介

`linglong.yaml` 是项目构建配置的描述。 `linglong.yaml`支持在容器环境中重复构建。

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

## project layout

```bash
{project-root}
|__ linglong.yaml
|__ .linglong-target // build cache for project

{user-home}
|__ .cache/linglong-builder/repo
|__ .cache/linglong-builder/layers
```

### Definition

## package

```
package:
  id: org.deepin.reader
  version: 5.9.17
  kind: app
  description: |
    reader for deepin os.
```

| name        | description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| id          | app/runtime id, this COULD NOT be Ref ID (like: {xxx}/{version}/{arch}) |
| version     | build version                                                           |
| kind        | type of this project                                                    |
| description | description for project, could be empty                                 |

## runtime

The runtime app run, auto bind the build dependencies. 

```
runtime:
  id: org.deepin.runtime
  version: 20.0.0
  # NOT IMPLEMENTATION NOW
  digest: 4d85525f09211381c77d2085c9c1057
```

Most of id could be an ref id like:

```
runtime:
  id: org.deepin.runtime/20.0.0
```

| name    | description                                                     |
| ------- | --------------------------------------------------------------- |
| id      | id of runtime                                                   |
| version | version to build base                                           |
| digest  | NO IMPLEMENTATION, this will lock to an unique build of runtime |


## depends

A depends is how the app build itself, and it's depends.

```
depends:
  - id: libopenjp2
    version: 2.4.0
  - id: djvu
    version: 3.5.28
    # NOT IMPLEMENTATION NOW
    digest: 381c77d2085c9c10574d85525f09211
```

## Example

### Build application

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
  kind: manual
  manual:
    configure: |
      echo "/runtime/lib" >> /etc/ld.so.conf.d/runtime.conf
      ldconfig
      mkdir build
      cd build
      qmake -r PREFIX=${PREFIX} ..
      make -j
      make test
      make -j install
      echo "LD_LIBRARY_PATH=/opt/apps/org.deepin.reader/files/lib/deepin-reader:${LD_LIBRARY_PATH}" > /opt/apps/org.deepin.reader/files/deepin-reader.sh
      echo "/opt/apps/org.deepin.reader/files/bin/deepin-reader" >> /opt/apps/org.deepin.reader/files/deepin-reader.sh
      chmod +x /opt/apps/org.deepin.reader/files/deepin-reader.sh

```

### Build a library

```yaml
package:
  id: libopenjp2
  kind: lib
  version: 2.4.0

base:
  id: org.deepin.base
  version: 20.0.0

source:
  kind: git
  url: https://github.com/uclouvain/openjpeg
  version: 2.4.0
  commit: 37ac30ceff6640bbab502388c5e0fa0bff23f505

build:
  kind: manual
  manual:
    configure: |
      mkdir build
      cd build
      cmake .. -DCMAKE_INSTALL_PREFIX=${PREFIX}
      make -j
      make install -j
```

### Build runtime

```yaml
package:
  id: org.deepin.runtime
  kind: runtime
  version: 20.0.0
  description: |
    runtime of deepin

base:
  id: org.deepin.base/20.0.0

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

The runtime type will commit all file of depends to repo.

## automake构建模板

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
