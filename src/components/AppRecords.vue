<template>
  <v-card elevation="0">
    <v-card-title>
      <span>Records</span>
    </v-card-title>

    <v-card-text>
      <v-data-iterator :items="items" :search="search">
        <template v-slot:header>
          <v-toolbar flat class="mb-1">
            <v-text-field
              v-model="search"
              clearable
              dense
              flat
              label="Search"
              hide-details
              outlined
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-toolbar>
        </template>

        <template #default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card>
                <v-card-title>
                  {{ item.name }}
                </v-card-title>

                <v-divider />

                <v-list dense>
                  <v-list-item
                    v-for="(value, key, i) in item"
                    :key="i"
                    three-line
                  >
                    <v-list-item-content>
                      <v-list-item-title class="d-inline">
                        {{ key }}:
                      </v-list-item-title>
                      <v-list-item-subtitle class="d-inline">
                        {{ value }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AppRecords',

  props: {
    records: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    search: '',
  }),

  computed: {
    items() {
      try {
        return JSON.parse(this.records)
      } catch {
        return JSON.parse(this.records)
      }
    }
  },
}
</script>
