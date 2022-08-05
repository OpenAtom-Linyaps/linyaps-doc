# Install Linglong Environment

## Kernel version requirement

Use `uname -r` to check the kernel version.

```bash
uname -r
```

Output as below:

```text
5.10.101-amd64-desktop
```

Kernel version requirement >=4.19.

* [x86 architecture kernel 4.19 supports Linglong tutorial](https://github.com/jakeday/linux-surface/issues/443)

## Deb package installation tutorial

### deepin 20

Use apt to install the Linglong environment.

```bash
sudo apt install linglong-builder \ 
                 linglong-box \
                 linglong-dbus-proxy \
                 linglong-bin \
                 linglong-installer
```

### deepin 23

Deepin 23 has preinstalled the the Linglong environment.

## Deb download

### debian 11(bullseye)

[Click Here to download debian 11 (bullseye) Linglong deb package](https://github.com/linuxdeepin/linglong-hub/blob/master/linglong-deb/debian/debian_bullseye.tar.gz)

### ubuntu 22.04(jammy)

[Click Here to download ubuntu 22.04 (jammy) Linglong deb package](https://github.com/linuxdeepin/linglong-hub/blob/master/linglong-deb/ubuntu/ubuntu_jammy.tar.gz)

### Deb install

The debian 11 installation is as follows:

```bash
tar -zxvf debian_bullseye.tar.gz
sudo apt install ./*.deb
sudo reboot
```
