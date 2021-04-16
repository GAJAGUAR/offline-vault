<template>
  <v-app>
    <index />
  </v-app>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'App',

  components: { Index },
}
</script>

<style>
html {
  overflow-y: auto;
}
</style>
