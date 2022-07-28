# 安装玲珑环境

## 内核版本

使用 `uname -r` 查看内核版本

```bash
uname -r
```

输出如下：

```text
5.10.101-amd64-desktop
```

x86架构内核版本要求>=5.10

## 仓库安装

### deepin v20

使用 apt 安装玲珑环境

```bash
sudo apt install linglong-builder \ 
                 linglong-box \
                 linglong-dbus-proxy \
                 linglong-bin \
                 linglong-installer
```

### deepin v23

deepin v23 已预装玲珑环境。

## 二进制下载

### debian 11(bullseye)

[https://github.com/linuxdeepin/linglong-hub/blob/master/linglong-deb/debian/debian_bullseye.tar.gz](https://github.com/linuxdeepin/linglong-hub/blob/master/linglong-deb/debian/debian_bullseye.tar.gz)

### ubuntu 22.04(jammy)

[https://github.com/linuxdeepin/linglong-hub/blob/master/linglong-deb/debian/debian_bullseye.tar.gz](https://github.com/linuxdeepin/linglong-hub/blob/master/linglong-deb/debian/debian_bullseye.tar.gz)

### 二进制安装

debian 11 安装示例如下：

```bash
tar -zxvf debian_bullseye.tar.gz
sudo apt install ./*.deb
```
