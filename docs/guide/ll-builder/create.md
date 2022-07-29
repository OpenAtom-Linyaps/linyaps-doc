# 创建玲珑项目

`ll-builder create`命令用来创建玲珑项目。

查看`ll-builder create`命令的帮助信息：

```bash
ll-builder create --help
```

`ll-builder create`命令的帮助信息如下：

```text
Usage: ll-builder [options] create <org.deepin.demo>

Options:
  -v, --verbose  show detail log
  -h, --help     Displays help on commandline options.
  --help-all     Displays help including Qt specific options.

Arguments:
  create         create build template project
  name           project name
```

`ll-builder create`命令根据输入的项目名称在当前目录创建对应的文件夹，同时生成构建所需的`linglong.yaml`模板文件。示例如下：

```bash
ll-builder create <org.deepin.demo>
```

`ll-builder create org.deepin.demo`命令输出如下：

```text
org.deepin.demo/
└── linglong.yaml
```

`linglong.yaml`文件内容如下：

```yaml
#Package metadata.
package:
  id: org.deepin.demo #Unique name for this package.
  version: 0.0.0.1 #Package version.
  kind: app #Package type. Such as app, lib and runtime.
  description: This is a demo. #Shot description for this package.

#Base enviriment for build.
base:
  id: org.deepin.base #Unique name for base.
  version: 20.0.0 #Base version.

#Common enviriment for build and running.
#runtime:
#  id: org.deepin.runtime #Unique name for runtime.
#  version: 20.0.0 #Runtime version.

#Private library for build.
#depends:
#  - id: #Unique name of depends.
#    version: #Depends version.

#Package source info.
source:
  kind: archive #Source type. Such as git and archive.
  url: https://pools.uniontech.com/org.deepin.demo.tar.xz #Source url. It is used to fetch source code.
  version: 0.0.0.1 #Source version.
#  commit: #Git reference. If the kind is archive, we don't need this item.
#  patch: #Source pacth. This will applyed to the source.

#Build rules.
build:
  kind: #Build type. Such as manual...
  manual:
    configure:|
    echo "Building start." #Shell Command to build source.
```
