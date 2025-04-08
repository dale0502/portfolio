<template>
  <q-page class="home-page">
    <!-- 背景动画层 -->
    <div class="cyber-background">
      <div class="grid"></div>
    </div>

    <div class="content-wrapper">
      <!-- 左侧介绍 -->
      <div class="intro-section" v-scroll-reveal="{ delay: 200, origin: 'left' }">
        <div class="greeting">Software Developer</div>
        <h1 class="name">Hello I'm Dale</h1>
        <div class="description">
          財務體系出身, 三年的後端開發經驗，目前專注於 Golang 開發，其餘時間使用 Laravel 及
          Python，喜愛研究及思考如何簡化過多複雜流程。空閒時間都在撰寫各種SideProject
          前後端獨立開發。
        </div>
        <div class="cyber-line"></div>
        <div class="social-links">
          <q-btn flat round color="white" icon="fab fa-github" />
          <q-btn flat round color="white" icon="fab fa-linkedin" />
          <q-btn flat round color="white" icon="fab fa-twitter" />
        </div>
      </div>

      <!-- 右侧技能区域 -->
      <div class="skills-section" v-scroll-reveal="{ delay: 400, origin: 'right' }">
        <h2 class="section-title">專業技能</h2>
        <div class="skills-container">
          <div
            v-for="(category, index) in skillCategories"
            :key="index"
            class="skill-category"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="category-title">
              <q-icon :name="category.icon" class="q-mr-sm" />
              {{ category.name }}
            </div>
            <div class="skills-grid">
              <div v-for="skill in category.skills" :key="skill" class="skill-item">
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const skillCategories = [
  {
    name: '前端開發',
    icon: 'code',
    skills: ['Vue.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    name: '後端開發',
    icon: 'storage',
    skills: ['Node.js', 'Express', 'MariaDB', 'RESTful API'],
  },
  {
    name: '開發工具/平台',
    icon: 'build',
    skills: ['Git', 'Docker', 'Linux', 'AWS'],
  },
];
</script>

<style lang="scss" scoped>
// 修改主要颜色变量
$primary-color: #00ff9d;
$primary-color-dark: #00cc7d;
$bg-color: #111111;
$text-color: #ffffff;
$grid-color: rgba(0, 255, 157, 0.1);
$card-bg: #1a1a1a;
$card-border: #333333;

.home-page {
  background: $bg-color;
  min-height: 100vh;
  overflow: hidden;
}

.cyber-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.2;

  .grid {
    background-image:
      linear-gradient($grid-color 1px, transparent 1px),
      linear-gradient(90deg, $grid-color 1px, transparent 1px);
    background-size: 30px 30px;
    width: 100%;
    height: 100%;
    animation: gridMove 20s linear infinite;
  }
}

.content-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  min-height: 100vh;
  padding: 0 12rem;
  gap: 6rem;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
}

.intro-section {
  flex: 1;
  padding-right: 2rem;
  animation: slideInLeft 1s ease-out;

  .greeting {
    color: $primary-color;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .name {
    font-size: 4rem;
    font-weight: bold;
    color: $text-color;
    margin: 0;
  }

  .cyber-line {
    height: 2px;
    background: linear-gradient(90deg, $primary-color, transparent);
    width: 200px;
    margin: 2rem 0;
  }

  .social-links {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
  }

  .download-btn {
    margin-top: 2rem;
    background: linear-gradient(45deg, $primary-color, $primary-color-dark);
  }

  .description {
    color: rgba($text-color, 0.8);
    font-size: 1.1rem;
    line-height: 1.8;
    margin-top: 1.5rem;
    max-width: 600px;
  }
}

.skills-section {
  flex: 1;
  padding-left: 2rem;
  animation: slideInRight 1s ease-out;
  background: $card-bg;
  border: 1px solid $card-border;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.section-title {
  font-size: 2rem;
  color: $text-color;
  margin-bottom: 2rem;
  font-weight: 600;
}

.skills-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-category {
  .category-title {
    color: $text-color;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-item {
  background: $primary-color;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  color: #111111;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    transform: translateY(-2px);
    background: $primary-color-dark;
    color: #111111;
    box-shadow: 0 0 15px rgba($primary-color, 0.3);
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes gridMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(30px);
  }
}

// 响应式设计
@media (max-width: 1400px) {
  .content-wrapper {
    padding: 0 8rem;
    gap: 4rem;
  }
}

@media (max-width: 1200px) {
  .content-wrapper {
    padding: 0 4rem;
    gap: 3rem;
  }
}

@media (max-width: 1024px) {
  .content-wrapper {
    flex-direction: column;
    padding: 2rem;
    gap: 4rem;
  }

  .intro-section,
  .skills-section {
    padding: 0;
    text-align: center;
  }

  .intro-section {
    .name {
      font-size: 3rem;
    }

    .cyber-line {
      margin: 2rem auto;
    }

    .social-links {
      justify-content: center;
    }

    .description {
      margin: 1.5rem auto;
      text-align: left;
    }
  }

  .skills-section {
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 0;
  }

  .section-title {
    color: white;
  }

  .skill-category {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 1.5rem;
    border-radius: 16px;

    .category-title {
      color: #00ff9d;
    }
  }

  .skill-item {
    background: $primary-color;
    border: none;
    color: #111111;

    &:hover {
      background: $primary-color-dark;
      color: #111111;
      box-shadow: 0 0 15px rgba($primary-color, 0.3);
    }
  }
}
</style>
