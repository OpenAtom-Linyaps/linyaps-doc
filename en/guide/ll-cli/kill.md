# Force Quit Running App

Use `ll-cli kill` to force quit running Linglong apps.

View the help information of `ll-cli kill` command：

```bash
ll-cli kill --help
```

Here is the outputs：

```text
Usage: ll-cli [options] kill container-id

Options:
  -h, --help        Displays this help.
  --default-config  default config json filepath

Arguments:
  kill              kill container with id
  container-id      container id
```

Example of Use `ll-cli kill` to force quit running Linglong app:

```bash
ll-cli kill <9c41c0af2bad4617aea8485f5aaeb93a>
```

Here is its output:

```text
kill app:org.deepin.calculator/5.7.21.4/x86_64 success
```
