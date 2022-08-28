<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script>
import AppHeader from './components/shared/AppHeader'
import AppFooter from './components/shared/AppFooter'
export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style></style>
