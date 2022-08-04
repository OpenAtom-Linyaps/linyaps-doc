# Run Linglong Apps

Use `ll-cli run` to run Linglong Apps.

View the help information of `ll-cli run` commands：

```bash
ll-cli run --help
```

Here is the output：

```text
Usage: ll-cli [options] run com.deepin.demo

Options:
  -h, --help                                         Displays help on
                                                     commandline options.
  --help-all                                         Displays help including Qt
                                                     specific options.
  --repo-point <--repo-point=flatpak>                app repo type to use
  --exec </bin/bash>                                 run exec
  --no-proxy                                         whether to use dbus proxy
                                                     in box
  --filter-name <--filter-name=com.deepin.linglong.A dbus name filter to use
  ppManager>
  --filter-path <--filter-path=/com/deepin/linglong/ dbus path filter to use
  PackageManager>
  --filter-interface <--filter-interface=com.deepin. dbus interface filter to
  linglong.PackageManager>                           use

Arguments:
  run                                                run application
  appId                                              application id
```

When the application is installed successfully, use `ll-cli run` to run it:

```bash
ll-cli run <org.deepin.calculator>
```

By default, executing the run command starts the highest version. To run a specified version, append the corresponding version number after `appid`:

```bash
ll-cli run <org.deepin.calculator/5.7.21.4>
```

By default, `ll-dbus-proxy` is used to intercept and forward `dbus` messages. If you do not want to use `ll-dbus-proxy`, use the `--no-proxy` parameter:

```bash
ll-cli run <org.deepin.calculator> --no-proxy
```

Use the `ll-cli run` command to enter the sandbox environment of a specified program:

```bash
ll-cli run <org.deepin.calculator> --exec /bin/bash
```

After entering, execute `shell` commands, such as `gdb`, `strace`, `ls`, `find`, etc.

Since Linglong applications run in the sandbox, they cannot be directly debugged in the conventional way. You need to run debugging tools in the sandbox, such as `gdb`:

```bash
gdb /opt/apps/org.deepin.calculator/files/bin/deepin-calculator
```

The path is the absolute path of the application in the sandbox.

For more debugging information of Linglong application `release` version, please refer to: [FAQ](../debug/faq.md).