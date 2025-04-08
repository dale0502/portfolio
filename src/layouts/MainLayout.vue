<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header bg-dark">
      <q-toolbar class="container">
        <div class="logo">Dale<span class="text-primary">.</span></div>

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
  { path: '/', label: 'Home', icon: 'home' },
  { path: '/about', label: 'About', icon: 'person' },
  { path: '/works', label: 'Works', icon: 'work' },
  { path: '/contact', label: 'Contact', icon: 'mail' },
];
</script>

<style lang="scss" scoped>
.header {
  background: #111111 !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;

  .text-primary {
    color: #00ff9d;
  }
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 0 auto;
}

.nav-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s;

  &:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.router-link-active {
    color: #00ff9d;
  }
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

:deep(.q-page-container) {
  background-color: #121212;
  min-height: 100vh;
}
</style>
