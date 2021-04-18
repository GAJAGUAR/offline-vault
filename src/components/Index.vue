<template>
  <div>
    <app-bar
      :title="title"
      @click:upload="showFileUploader"
      @click:download="downloadBackup"
      @click:save="saveOnStorage"
      @click:lock="lock"
    />

    <v-main>
      <v-container fluid>
        <app-file-downloader :data="vault" />
        <app-file-uploader
          :is-active="isFileUploaderVisible"
          @load="getData($event)"
        />
        <app-unlocker
          :is-active="isUnlockerVisible"
          v-model="passphrase"
          @submit="unlock"
        />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from './AppBar.vue'
import AppFileDownloader from './AppFileDownloader.vue'
import AppFileUploader from './AppFileUploader.vue'
import AppUnlocker from './AppUnlocker.vue'
import { decrypt, encrypt } from '../modules/Crypto'
import downloadFrom from '../modules/Downloader'

export default {
  name: 'App',

  components: {
    AppBar,
    AppFileDownloader,
    AppFileUploader,
    AppUnlocker,
  },

  data: () => ({
    isEncrypted: false,
    isFileUploaderVisible: false,
    isUnlockerVisible: false,
    passphrase: '',
    title: 'Offline Vault',
    vault: '',
  }),

  mounted() {
    if (localStorage.getItem('vault')) {
      this.vault = localStorage.getItem('vault')
      this.showUnlocker()
    } else {
      this.showFileUploader()
    }
  },

  methods: {
    decrypt() {
      this.vault = decrypt(this.vault, this.passphrase)
      this.isEncrypted = false
    },
    downloadBackup() {
      let data = ''
      if (this.isEncrypted) {
        data = this.vault
      } else {
        data = encrypt(this.vault, this.passphrase)
      }
      downloadFrom('file-downloader', data)
    },
    encrypt() {
      this.vault = encrypt(this.vault, this.passphrase)
      this.isEncrypted = true
    },
    getData(event) {
      this.vault = event
      this.hideFileUploader()
      this.showUnlocker()
    },
    hideFileUploader() {
      this.isFileUploaderVisible = false
    },
    hideUnlocker() {
      this.isUnlockerVisible = false
    },
    lock() {
      this.encrypt()
      this.showUnlocker()
    },
    saveOnStorage() {
      let data = ''
      if (this.isEncrypted) {
        data = String(this.vault)
      } else {
        data = encrypt(this.vault, this.passphrase)
      }
      localStorage.setItem('vault', data)
    },
    showFileUploader() {
      this.isFileUploaderVisible = true
    },
    showUnlocker() {
      this.isUnlockerVisible = true
    },
    unlock() {
      this.hideUnlocker()
      this.decrypt()
    },
  },
}
</script>
