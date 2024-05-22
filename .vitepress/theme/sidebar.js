const fs = require('fs');
const path = require('path');

const { generateVersions } = require('./versions.js')
const { versions } = generateVersions()

const langs = ['zh', 'en']

 // 所有版本和语言的指南结构
let sidebar = {};

// 定义每个类别及其子项的映射
const categoryMappings = {
    "zh": {
        "开始": {
            "概述": "/start/whatis.md",
            "安装":  "/start/install.md",
            "简单示例":  "/start/how_to_use.md",
        },
        "ll-cli": {
            "简介": "/ll-cli/introduction.md",
            "列出已安装的应用": "/ll-cli/list.md",
            "从远程仓库查询应用": "/ll-cli/query.md",
            "安装应用": "/ll-cli/install.md",
            "运行应用": "/ll-cli/run.md",
            "卸载应用": "/ll-cli/uninstall.md",
            "更新应用": "/ll-cli/update.md",
            "查看运行中的应用": "/ll-cli/ps.md",
            "进入容器内部": "/ll-cli/exec.md",
            "强制退出应用": "/ll-cli/kill.md"
        },
        "ll-builder": {
            "简介": "/ll-builder/introduction.md",
            "创建项目": "/ll-builder/create.md",
            "构建应用": "/ll-builder/build.md",
            "运行应用": "/ll-builder/run.md",
            "转换 appimage": "/ll-builder/convert.md",
            "导出 layer 文件": "/ll-builder/export.md",
            "配置文件": "/ll-builder/manifests.md",
            "上架应用到商店": "/ll-builder/github.md"
        },
        "ll-pica": {
            "简介": "/ll-pica/introduction.md",
            "初始化配置": "/ll-pica/init.md",
            "转换应用": "/ll-pica/convert.md",
            "添加依赖": "/ll-pica/adep.md",
            "转换配置文件简介": "/ll-pica/manifests.md",
        },
        "调试应用": {
            "IDE中调试应用": "/debug/debug.md",
            "常见构建问题": "/debug/ll-builder-faq.md",
            "常见运行问题": "/debug/faq.md",
            "常见转换问题": "/debug/ll-pica-faq.md",
        }
    },
    "en": {
        "Getting Started": {
            "summary": "/start/whatis.md",
            "Install": "/start/install.md",
            "Simple example":  "/start/how_to_use.md",
        },
        "ll-cli": {
            "Introduction": "/ll-cli/introduction.md",
            "List Installed Apps": "/ll-cli/list.md",
            "Query Apps From Remote": "/ll-cli/query.md",
            "Install App": "/ll-cli/install.md",
            "Run App": "/ll-cli/run.md",
            "Uninstall App": "/ll-cli/uninstall.md",
            "Update App": "/ll-cli/update.md",
            "View Running Apps": "/ll-cli/ps.md",
            "Attach To Container": "/ll-cli/exec.md",
            "Force Quit App": "/ll-cli/kill.md",
        },
        "ll-builder": {
            "Introduction": "/ll-builder/introduction.md",
            "Create Project": "/ll-builder/create.md",
            "Build App": "/ll-builder/build.md",
            "Run Compiled App": "/ll-builder/run.md",
            "Convert AppImage": "/ll-builder/convert.md",
            "Export Layer File": "/ll-builder/export.md",
            "Manifests": "/ll-builder/manifests.md",
            "App To Store": "/ll-builder/github.md"
        },
        "ll-pica": {
            "ll-pica Introduction": "/ll-pica/introduction.md",
            "Initialization configuration": "/ll-pica/init.md",
            "Conversion application": "/ll-pica/convert.md",
            "Add dependency": "/ll-pica/adep.md",
            "Manifests": "/ll-pica/manifests.md",
        },
        "Debug App": {
            "Debug App In IDE": "/debug/debug.md",
            "Build FAQ": "/debug/ll-builder-faq.md",
            "Run FAQ": "/debug/faq.md",
            "Convert FAQ": "/debug/ll-pica-faq.md",
        }
    }
};

// 函数来生成特定语言和版本的指南结构
function generateSideba(pathPrefix, language) {
    lst = [];

    for (const category in categoryMappings[language]) {
        const items = [];
        Object.entries(categoryMappings[language][category]).forEach(([itemName, link]) => {
            // 检测 md 文件是否存在。
            const fullFilePath = path.join(path.dirname(path.dirname(__dirname)), `${pathPrefix}${link}`);
            if (fs.existsSync(fullFilePath)) {
                items.push({
                    text: itemName,
                    link: `${pathPrefix}${link}`
                });
            }
        });

        lst.push({
            collapsible: true,
            text: category,
            items: items
        });
    }
    return lst;
}


versions.forEach(version => {
    langs.forEach(language => {
        const versionPrefix = version ? `${version}/` : '';
        const pathPrefix = language === 'zh'
            ? `/${versionPrefix}guide`
            : `/${versionPrefix}${language}/guide`;

        sidebar[pathPrefix] = generateSideba(pathPrefix, language);
    });

});

exports.sidebar = sidebar
