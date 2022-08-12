# Run compiled App

Use `ll-builder run` to run the compiled executable program.

View the help information of `ll-builder run` command:

```bash
ll-builder run --help
```

Here is the outputs:

```text
Usage: ll-builder [options] run

Options:
   -v, --verbose show detail log
   -h, --help Displays this help.
   --exec <exec> run exec than build script

Arguments:
   run run project
```

The `ll-builder run` command reads the operating environment information related to the program according to the configuration file, constructs a container, and executes the program in the container without installation.

```bash
ll-builder run
```

If `ll-builder run` runs successfully, the output is as follows:

![org.deepin.demo.png](./images/org.deepin.demo.png)

To facilitate debugging, use an additional `--exec /bin/bash` parameter to replace the default execution program after entering the container, such as:

```bash
ll-builder run --exec /bin/bash
```

With this option, `ll-builder` will enter the `bash` terminal after creating the container, and can perform other operations inside the container.
