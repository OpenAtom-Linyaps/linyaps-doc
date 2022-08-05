# Push UAB to Remote Repositories

Use `ll-builder push` command to push Linglong packages to Linglong remote repositories.

View the help information of `ll-builder push` commands:

```bash
ll-builder push --help
```

Here is the outputs：

```text
Usage: ll-builder [options] push <filePath>

Options:
  -v, --verbose  show detail log
  -h, --help     Displays this help.
  --force        force push true or false

Arguments:
  push           push build result to repo
  filePath       bundle file path
```

The `ll-builder push` command reads the content of the `bundle` format package according to the file path, and transfers the software data and `bundle` format package to the server.

```bash
ll-builder push <org.deepin.demo-1.0.0_x86_64.uab>
```
