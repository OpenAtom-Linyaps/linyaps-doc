# Query Apps From Remote

Use `ll-cli query` to query the info of Linglong apps in remote repositories.

View the help information of `ll-cli query` commands：

```bash
ll-cli query --help
```

Here is the output：

```text
Usage: ll-cli [options] query com.deepin.demo

Options:
  -h, --help                           Displays help on commandline options.
  --help-all                           Displays help including Qt specific
                                       options.
  --repo-point <--repo-point=flatpak>  app repo type to use
  --force                              query from server directly, not from
                                       cache

Arguments:
  query                                query app info
  appId                                application id
```

Use `ll-cli query` to query app info in remote repositories:

```bash
ll-cli query <calculator>
```

Add `--force` to force query app info in remote repositories:

```bash
ll-cli query <calculator> --force
```
This command returns the info of all apps whose `appid` (appid is the app unique identifier) contains the keyword "calculator", including the complete `appid`, application name, version, CPU architecture and descriptions.

The output of `ll-cli query calculator --force` is as below：

```text
appId                           name                            version         arch        channel         module      description
org.deepin.calculator           deepin-calculator               5.5.23          x86_64      linglong        runtime     Calculator for UOS
org.deepin.calculator           deepin-calculator               5.7.1           x86_64      linglong        runtime     Calculator for UOS

```

