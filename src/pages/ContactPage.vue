<template>
  <q-page class="contact-page q-pa-md">
    <div class="text-center">
      <!-- <div class="text-h3 q-mb-xl text-weight-light">聯絡我</div> -->

      <div class="contact-container q-mx-auto">
        <q-slide-transition appear>
          <div class="contact-info q-gutter-y-lg">
            <q-fade-transition appear>
              <div class="contact-item q-py-sm">
                <q-icon name="person" size="md" class="q-mr-md" />
                <span>{{ state.name }}</span>
              </div>
            </q-fade-transition>

            <q-fade-transition appear>
              <div class="contact-item q-py-sm">
                <q-icon name="email" size="md" class="q-mr-md" />
                <span>{{ state.email }}</span>
              </div>
            </q-fade-transition>

            <q-fade-transition appear>
              <div class="contact-item q-py-sm">
                <q-icon name="message" size="md" class="q-mr-md" />
                <span>{{ state.message }}</span>
              </div>
            </q-fade-transition>
          </div>
        </q-slide-transition>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface State {
  name: string;
  email: string;
  message: string;
}

const state: State = reactive({
  name: 'Dale',
  email: 'dale@gmail.com',
  message: 'Hello, I want to contact you',
});
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 100px;
}

.contact-container {
  max-width: 600px;
  width: 100%;
  padding: 2rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  margin-left: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.1rem;
}

.contact-item:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
