export default function (/* ctx */) {
  return {
    css: ['app.css'],
    build: {
      // 移除 vitePlugins 配置
      publicPath: '/porfolio/',  // 注意結尾的斜線很重要
    },
    framework: {
      iconSet: 'material-icons',
      plugins: [
        'Notify'
      ]
    },
    extras: ['material-icons'],
    boot: [
      // ... 其他 boot 文件
      'motion',
    ],
  };
}
