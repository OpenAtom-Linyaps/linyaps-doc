# Update Linglong Apps

Use `ll-cli update` to update Linglong applications.

View the help information of `ll-cli update` commands:

```bash
ll-cli update --help
```

Here is the output：

```text
Usage: ll-cli [options] update com.deepin.demo

Options:
  -h, --help                      Displays help on commandline options.
  --help-all                      Displays help including Qt specific options.
  --channel <--channel=linglong>  the channnel of app
  --module <--module=runtime>     the module of app

Arguments:
  update                          update an application
  appId                           application id
```

Use `ll-cli update` to update local packages to latest versions in the remote repository, such as:

```bash
ll-cli update <org.deepin.calculator>
```

Here is the output of `ll-cli update org.deepin.calculator`:

```text
update org.deepin.calculator , please wait a few minutes...
org.deepin.calculator is updating...
message: update org.deepin.calculator success, version:5.7.16 --> 5.7.21.4
```

Update to the specified version:

```bash
ll-cli update <org.deepin.calculator/5.7.21.4>
```
