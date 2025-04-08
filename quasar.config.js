export default function (/* ctx */) {
  return {
    css: ['app.css'],
    build: {
      // 移除 vitePlugins 配置
      publicPath: '/porfolio',  // 修改為正確的倉庫名稱
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
