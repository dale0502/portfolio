export default function (/* ctx */) {
  return {
    css: ['app.css'],
    build: {
      // 移除 vitePlugins 配置
      publicPath: '/portfolio/',  // 修正拼寫，改為 portfolio
      copyPublicFiles: true,
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
