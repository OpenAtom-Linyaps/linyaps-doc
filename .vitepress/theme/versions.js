export function generateVersions() {
    const versions = ['']; // 保留空用来判断默认路由
    return {
      defaultVersion: '1.5.0',  // 默认显示版本号
      versions: versions
    };
}