<template>
  <v-overlay :value="isActive">
    <v-card>
      <v-card-title>Enter passphrase to lock</v-card-title>

      <v-card-text>
        <v-form id="locker" @submit.prevent="$emit('submit')">
          <v-text-field
            hide-details="auto"
            label="Passphrase"
            outlined
            type="password"
            :value="value"
            @input="update"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn
          block
          color="blue-grey"
          class="white--text"
          form="locker"
          type="submit"
        >
          Lock
          <v-icon right dark>mdi-lock</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: 'AppLocker',

  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },

  methods: {
    update(value) {
      this.$emit('input', value)
    },
  },
}
</script>
