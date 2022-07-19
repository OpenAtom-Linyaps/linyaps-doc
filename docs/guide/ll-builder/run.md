# 运行编译后的玲珑应用

`ll-builder run`命令可以运行编译后的可执行程序。

查看`ll-builder run`命令的帮助信息：

```bash
ll-builder run --help
```

`ll-builder run`命令的帮助信息如下：

```text
Usage: ll-builder [options] run

Options:
  -v, --verbose  show detail log
  -h, --help     Displays this help.
  --exec <exec>  run exec than build script

Arguments:
  run            run project
```

`ll-builder run`命令根据配置文件读取该程序相关的运行环境信息，构造一个沙箱环境，并在沙箱中执行该程序而无需安装。

```bash
ll-builder run
```

为了便于调试，使用额外的`--exec /bin/bash`参数可替换进入沙箱后默认执行的程序，如：

```bash
ll-builder run --exec /bin/bash
```

使用该选项，`ll-builder`创建沙箱后将进入`bash`终端，可在沙箱内执行其他操作。