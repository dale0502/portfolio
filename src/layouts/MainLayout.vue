<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <!-- <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer"> </q-btn> -->

      <q-toolbar>
        <nav class="nav-links">
          <router-link
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            class="nav-link"
            :exact="route.path === '/'"
          >
            <span class="desktop-label">{{ route.label }}</span>
            <q-icon :name="route.icon" class="mobile-icon" />
          </router-link>
        </nav>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const routes = [
  { path: '/', label: '首頁', icon: 'home' },
  { path: '/about', label: '關於我', icon: 'person' },
  { path: '/portfolio', label: '作品集', icon: 'work' },
  { path: '/contact', label: '聯絡我', icon: 'mail' },
];
</script>

<style scoped>
.nav-links {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 0 auto;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.mobile-icon {
  display: none;
  font-size: 1.5rem;
}

.desktop-label {
  display: block;
}

@media (max-width: 600px) {
  .nav-links {
    gap: 1rem;
  }

  .mobile-icon {
    display: block;
  }

  .desktop-label {
    display: none;
  }

  .nav-link {
    padding: 0.5rem;
  }
}
</style>
