# Create Linglong project

The `ll-builder create` command is used to create Linglong projects.

See help for the `ll-builder create` command:

```bash
ll-builder create --help
```

The help information for the `ll-builder create` command is as follows:

```text
Usage: ll-builder [options] create <org.deepin.demo>

Options:
  -v, --verbose show detail log
  -h, --help Displays help on commandline options.
  --help-all Displays help including Qt specific options.

Arguments:
  create create build template project
  name project name
```

The `ll-builder create` command creates a corresponding folder in the current directory according to the input project name, and generates the `linglong.yaml` template file required for the build. An example is as follows:

```bash
ll-builder create <org.deepin.demo>
```

The output of the `ll-builder create org.deepin.demo` command is as follows:

```text
org.deepin.demo/
└── linglong.yaml
```

## Edit linglong.yaml

### Package meta information

```yaml
package:
  id: org.deepin.demo
  name: deepin-demo
  version: 0.0.1
  kind: app
  description: |
    simple qt demo.
```

### runtime information

```yaml
runtime:
  id: org.deepin.Runtime
  version: 20.5.0
```

### Dependency information

```yaml
depends:
  - id: icu
    version: 63.1
    type: runtime
```

### Source information

Use git source code

```yaml
source:
  kind: git
  url: "https://github.com/linuxdeepin/linglong-builder-demo.git"
  commit: 24f78c8463d87ba12b0ac393ec56218240315a9
```

### Select build template

The source code is a qmake project, and the build type is qmake (see qmake.yaml for the template content).

```yaml
build:
  kind: qmake
```

### complete linglong.yaml

The contents of the `linglong.yaml` file are as follows:

```yaml
package:
  id: org.deepin.demo
  name: deepin-demo
  version: 0.0.1
  kind: app
  description: |
    simple qt demo.

runtime:
  id: org.deepin.Runtime
  version: 20.5.0

depends:
  - id: icu
    version: 63.1
    type: runtime

source:
  kind: git
  url: "https://github.com/linuxdeepin/linglong-builder-demo.git"
  commit: a3b89c3aa34c1aff8d7f823f0f4a87d5da8d4dc0

build:
  kind: qmake
```