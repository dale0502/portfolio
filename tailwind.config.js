/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // 重要：確保 Tailwind 可以覆蓋 Quasar 的樣式
  important: true,
};
