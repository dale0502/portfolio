export default function (/* ctx */) {
  return {
    css: ['app.css'],
    build: {
      // 移除 vitePlugins 配置
    },
    framework: {
      iconSet: 'material-icons',
    },
    extras: ['material-icons'],
    boot: [
      // ... 其他 boot 文件
      'motion',
    ],
  };
}
