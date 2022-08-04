# Run the compiled Linglong application

The `ll-builder run` command can run the compiled executable program.

See help for the `ll-builder run` command:

```bash
ll-builder run --help
```

The help information for the `ll-builder run` command is as follows:

```text
Usage: ll-builder [options] run

Options:
   -v, --verbose show detail log
   -h, --help Displays this help.
   --exec <exec> run exec than build script

Arguments:
   run run project
```

The `ll-builder run` command reads the operating environment information related to the program according to the configuration file, constructs a sandbox environment, and executes the program in the sandbox without installation.

```bash
ll-builder run
```

`ll-builder run` runs successfully and the output is as follows:

![org.deepin.demo.png](./images/org.deepin.demo.png)

To facilitate debugging, use an additional `--exec /bin/bash` parameter to replace the default execution program after entering the sandbox, such as:

```bash
ll-builder run --exec /bin/bash
```

With this option, `ll-builder` will enter the `bash` terminal after creating the sandbox, and can perform other operations inside the sandbox.
