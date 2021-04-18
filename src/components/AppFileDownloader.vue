<template>
  <a id="file-downloader"></a>
</template>

<script>
export default {
  name: 'AppFileDownloader',

  props: {
    data: {
      type: undefined,
      required: true,
    },
  },
}
</script>

<style scoped>
a {
  display: none;
}
</style>
