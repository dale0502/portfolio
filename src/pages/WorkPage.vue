<template>
  <div class="portfolio-container">
    <div class="portfolio-grid">
      <div v-for="(project, projectIndex) in projects" :key="projectIndex" class="portfolio-item">
        <div class="project-number">{{ String(projectIndex + 1).padStart(2, '0') }}</div>
        <div class="project-content">
          <h2 class="project-title">{{ project.title }}</h2>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
          <div class="project-links">
            <a :href="project.demoLink" target="_blank" class="project-link">
              <span class="icon">查看網站 ↗</span>
            </a>
          </div>
        </div>
        <div class="project-image-container" :class="{ 'app-image': project.isApp }">
          <div class="project-image">
            <img :src="project.images[currentImageIndexes[projectIndex]]" :alt="project.title" />
          </div>
          <div class="navigation-buttons">
            <button
              @click="prevImage(projectIndex)"
              class="nav-button"
              :disabled="currentImageIndexes[projectIndex] === 0"
            >
              ←
            </button>
            <button
              @click="nextImage(projectIndex)"
              class="nav-button"
              :disabled="currentImageIndexes[projectIndex] === project.images.length - 1"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const projects = [
  {
    title: '調和永續官方網站',
    description:
      '調和永續官方網站，客製化後台系統，使用 Vue.js 開發，採用 Tailwind.css、Qausar 進行樣式設計。',
    images: ['/images/project1.png', '/images/project2.png', '/images/project3.png'],
    technologies: ['Vue.js', 'Tailwind.css', 'Qausar', 'TypeScript'],
    demoLink: 'http://35.229.157.232:30082/',
    githubLink: '#',
    isApp: false,
  },
  {
    title: '酒吧地圖APP',
    description:
      '酒吧地圖APP主要是設計給熱愛喝酒的人，可以快速查看附近的酒吧，及收集踩點過的酒吧，使用 Flutter 開發設計，目前尚在Beta測試階段。',
    images: ['/images/bar1.png', '/images/bar2.png', '/images/bar3.png', '/images/bar4.png'],
    technologies: ['Flutter', 'Google Sheet API', 'Google Map API', 'Firebase Auth'],
    demoLink: '#',
    githubLink: '#',
    isApp: true,
  },
];

// 為每個專案創建一個當前圖片索引
const currentImageIndexes = ref(projects.map(() => 0));

const nextImage = (projectIndex: number) => {
  if (currentImageIndexes.value[projectIndex] < projects[projectIndex].images.length - 1) {
    currentImageIndexes.value[projectIndex]++;
  }
};

const prevImage = (projectIndex: number) => {
  if (currentImageIndexes.value[projectIndex] > 0) {
    currentImageIndexes.value[projectIndex]--;
  }
};
</script>

<style scoped>
.portfolio-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.portfolio-grid {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.portfolio-item {
  display: grid;
  grid-template-columns: 0.2fr 1fr 1fr;
  gap: 3rem;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.project-number {
  font-size: 4rem;
  font-family: monospace;
  color: #00ff9d;
  opacity: 0.8;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-title {
  font-size: 2.5rem;
  color: #e6f1ff;
  margin: 0;
  margin-bottom: 0.5rem;
}

.project-description {
  color: #e6f1ff;
  line-height: 1.8;
  font-size: 1.25rem;
  margin: 0.5rem 0;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.project-tech {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.tech-tag {
  color: #111111;
  font-family: monospace;
  background-color: #00ff9d;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
}

.tech-tag:hover {
  background-color: #00cc7d;
  transform: translateY(-1px);
  box-shadow: 0 0 15px rgba(0, 255, 157, 0.3);
}

.project-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.project-link {
  color: #ccd6f6;
  transition: color 0.3s ease;
  opacity: 0.8;
}

.project-link:hover {
  color: #00ff9d;
  opacity: 1;
}

.project-link .icon {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.project-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
}

.app-image {
  aspect-ratio: 9/16;
  max-width: 300px;
  max-height: 500px;
  margin-left: auto;
}

.project-image {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(0, 255, 157, 0.1);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.navigation-buttons {
  position: absolute;
  bottom: -3rem;
  right: 0;
  display: flex;
  gap: 1rem;
}

.nav-button {
  background-color: rgba(0, 255, 157, 0.1);
  border: none;
  color: #00ff9d;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.nav-button:hover:not(:disabled) {
  background-color: rgba(0, 255, 157, 0.2);
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .portfolio-item {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-content {
    gap: 1rem;
  }

  .project-description {
    margin: 1rem 0;
  }

  .app-image {
    max-width: 100%;
    aspect-ratio: 3/4;
    max-height: 400px;
    margin: 0 auto;
  }

  .navigation-buttons {
    bottom: -2rem;
  }
}
</style>
