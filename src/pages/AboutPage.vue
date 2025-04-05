<template>
  <q-page class="q-pa-md">
    <!-- 使用 Quasar 的動畫組件 -->
    <q-slide-transition appear>
      <div class="text-h3 q-mb-md">關於我</div>
    </q-slide-transition>

    <div class="row q-col-gutter-md">
      <!-- 技能卡片 -->
      <div class="col-12 col-md-6">
        <q-slide-transition appear>
          <q-card class="q-pa-md">
            <div class="text-h6 q-mb-md"><q-icon name="code" class="q-mr-sm" />技能專長</div>
            <q-list>
              <q-slide-transition appear group>
                <q-item v-for="(skill, index) in skills" :key="skill" class="skill-item">
                  <q-item-section avatar>
                    <q-avatar color="primary" text-color="white">
                      {{ index + 1 }}
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ skill.name }}</q-item-label>
                    <q-item-label caption>
                      <q-rating v-model="skill.level" max="5" size="1em" color="yellow" readonly />
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-slide-transition>
            </q-list>
          </q-card>
        </q-slide-transition>
      </div>

      <!-- 個人簡介卡片 -->
      <div class="col-12 col-md-6">
        <q-slide-transition appear>
          <q-card class="q-pa-md">
            <div class="text-h6 q-mb-md"><q-icon name="person" class="q-mr-sm" />個人簡介</div>
            <p class="text-body1">
              我是一名全端工程師，擅長前後端開發。熱愛學習新技術，並且喜歡解決複雜的技術問題。
            </p>
            <div class="text-h6 q-mt-lg q-mb-md">
              <q-icon name="work" class="q-mr-sm" />工作經驗
            </div>
            <q-timeline color="primary">
              <q-timeline-entry
                v-for="exp in experience"
                :key="exp.year"
                :title="exp.title"
                :subtitle="exp.year"
              >
                {{ exp.description }}
              </q-timeline-entry>
            </q-timeline>
          </q-card>
        </q-slide-transition>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const skills = [
  { name: 'Vue.js / React', level: 5 },
  { name: 'TypeScript', level: 4 },
  { name: 'Node.js', level: 4 },
  { name: 'Python', level: 4 },
  { name: 'Docker', level: 3 },
  { name: 'AWS', level: 3 },
];

const experience = [
  {
    year: '2022 - 現在',
    title: '資深全端工程師',
    description: '負責開發和維護企業級應用程序，帶領團隊完成多個重要項目。',
  },
  {
    year: '2020 - 2022',
    title: '全端工程師',
    description: '參與開發多個 Web 應用程序，使用現代化技術棧進行開發。',
  },
  {
    year: '2018 - 2020',
    title: '前端工程師',
    description: '專注於前端開發，建立響應式和用戶友好的網站界面。',
  },
];
</script>

<style scoped>
.skill-item {
  transition: transform 0.2s;
}
.skill-item:hover {
  transform: translateX(10px);
}
</style>
