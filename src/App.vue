<template>
  <div>
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import { AppHeader } from './components'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style lang="scss">
body {
  min-height: 100vh;
  box-sizing: border-box;

  & > #app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(44, 62, 80);

    & > div {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }
}
</style>
