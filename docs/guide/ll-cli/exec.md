# 进入运行中的玲珑容器内部

`ll-cli exec`命令可进入进入正在运行的容器内部。

查看`ll-cli exec`命令的帮助信息：

```bash
ll-cli exec --help
```

`ll-cli exec`命令的帮助信息如下：

```text
Usage: ll-cli [options] exec aebbe2f455cf443f89d5c92f36d154dd "bash"

Options:
  -h, --help        Displays this help.
  --default-config  default config json filepath
  -e, --env <env>   extra environment variables splited by comma
  -d, --path <pwd>  location to exec the new command

Arguments:
  exec              exec command in container
  containerId       container id
  cmd               command
```

使用`ll-cli exec`进入正在运行的容器内部：

```bash
ll-cli exec aebbe2f455cf443f89d5c92f36d154dd /bin/bash
```
