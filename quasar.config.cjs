module.exports = function () {
  return {
    // ... 其他配置
    css: ['app.scss'],
    build: {
      // ... 其他配置
      postcss: {
        plugins: ['tailwindcss', 'autoprefixer'],
      },
    },
  };
};
