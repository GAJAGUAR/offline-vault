<template>
  <v-overlay :value="isActive">
    <v-card>
      <v-card-title>Choose a backup file</v-card-title>

      <v-card-text>
        <input
          id="file-reader"
          name="file-reader"
          type="file"
          @change="getTextFromFile"
        />
        <v-btn block color="blue-grey" class="white--text" @click="loadFile">
          Upload
          <v-icon right dark> mdi-cloud-upload </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: 'AppFileUploader',

  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },

  data: () => ({
    file: null,
    label: 'File with raw data',
  }),

  methods: {
    getTextFromFile(ev) {
      const file = ev.target.files[0]
      const reader = new FileReader()

      if (!file || file.type !== 'text/plain') return

      reader.readAsText(file, 'utf-8')
      reader.onload = (e) => this.$emit('load', e.target.result)
      reader.onerror = (e) => console.error(e)
    },
    loadFile() {
      const input = document.getElementById('file-reader')
      input.click()
    },
  },
}
</script>

<style scoped>
#file-reader {
  display: none;
}
</style>
