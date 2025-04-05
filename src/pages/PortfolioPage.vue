<template>
  <div class="portfolio-container">
    <h1 class="portfolio-title">作品集</h1>
    <div class="portfolio-grid">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="portfolio-item"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="index * 200"
      >
        <img :src="project.image" :alt="project.title" />
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: '專案一',
    description: '這是第一個專案的描述',
    image: '/path-to-image-1.jpg',
  },
  {
    title: '專案二',
    description: '這是第二個專案的描述',
    image: '/path-to-image-2.jpg',
  },
  // 可以繼續添加更多專案
];
</script>

<style scoped>
.portfolio-container {
  padding: 2rem;
}

.portfolio-title {
  text-align: center;
  margin-bottom: 3rem;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.portfolio-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.portfolio-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  margin: 0 0 0.5rem 0;
}

.project-info p {
  margin: 0;
  color: #666;
}
</style>
