<template>
  <v-app-bar
    app
    color="#cdcdcd"
    dark
    elevate-on-scroll
    fixed
    scroll-threshold="500"
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
  >
    <template #img="{ props }">
      <v-img
        gradient="to top right, rgba(25,25,25,0.5), rgba(205,205,205,0.75)"
        v-bind="props"
      ></v-img>
    </template>

    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="$emit('click:upload')">
      <v-icon>mdi-upload</v-icon>
    </v-btn>
    <v-btn icon @click="$emit('click:download')">
      <v-icon>mdi-download</v-icon>
    </v-btn>
    <v-btn icon @click="$emit('click:save')">
      <v-icon>mdi-content-save</v-icon>
    </v-btn>
    <v-btn icon @click="$emit('click:lock')">
      <v-icon>mdi-lock</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',

  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
