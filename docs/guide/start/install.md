# 安装玲珑环境

## 内核版本

使用 `uname -r` 查看内核版本。

```bash
uname -r
```

输出如下：

```text
5.10.101-amd64-desktop
```

内核版本要求>=4.19。

* x86架构4.19内核需要开启user namespace。

## deb包安装教程

### deepin v20

使用 apt 安装玲珑环境：

```bash
sudo apt install linglong-builder \ 
                 linglong-box \
                 linglong-dbus-proxy \
                 linglong-bin \
                 linglong-installer
```

### deepin v23

deepin v23 已预装玲珑环境。

### deb包下载

### debian 11(bullseye)

[点击下载debian 11(bullseye)玲珑deb包](https://github.com/linuxdeepin/linglong-hub/releases/download/1.3.3/debian_bullseye.tar.gz)

### ubuntu 22.04(jammy)

[点击下载ubuntu 22.04(jammy)玲珑deb包](https://github.com/linuxdeepin/linglong-hub/releases/download/1.3.3/ubuntu_jammy.tar.gz)

### deb包安装

debian 11 安装示例如下：

```bash
tar -zxvf debian_bullseye.tar.gz
sudo apt install ./*.deb
sudo reboot
```
