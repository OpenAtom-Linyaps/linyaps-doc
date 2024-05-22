const { generateVersions } = require('./versions.js')
const { defaultVersion, versions } = generateVersions()

// 定义每个类别及其子项的映射
const categoryMappings = {
    "zh": {
        "item": "文档版本",
        "defaultVersion": defaultVersion,
        "link": "/start/whatis.md"
    },
    "en": {
        "item": "Doc Version",
        "defaultVersion": defaultVersion,
        "link": "/start/whatis.md"
    }
}

// 函数来生成特定语言和版本的导航栏
function generateNav(language) {
    lst = [];
    const items = [];
    // 检测 md 文件是否存在。
    versions.forEach(version => {
        const versionPrefix = version ? `${version}/` : '';
        const pathPrefix = language === 'zh'
            ? `/${versionPrefix}guide`
            : `/${versionPrefix}${language}/guide`;
        const defaultVersion = version ? `${version}` : categoryMappings[language]['defaultVersion'];
        items.push({
            text: defaultVersion,
            link: `${pathPrefix}${categoryMappings[language]['link']}`
        });
    });

    lst.push({
        text: categoryMappings[language]['item'],
        ariaLabel: "Version Menu",
        items: items
    });
    return lst;
}

module.exports = { generateNav };
