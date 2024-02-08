<template>
  <v-app>
    <v-toolbar class="toolbar bg-cyan" dense floating>
      <v-text-field hide-details density="compact" />
      <v-btn class="search-btn" icon="mdi-magnify" />
    </v-toolbar>
    <v-data-table :items="items" />
    <v-footer app border>
      Directed by
      <a class="gh-link" href="https://github.com/okovtkov">Oleg Kovtkov</a>
    </v-footer>
    <v-dialog v-model="dialog" width="auto">
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">
            Close Dialog
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
export default {
  name: 'App',
  components: {},

  data() {
    return {
      dialog: false,
      items: [
        {
          name: 'African Elephant',
          species: 'Loxodonta africana',
          diet: 'Herbivore',
          habitat: 'Savanna, Forests',
        },
      ],
    };
  },
}
</script>

<style>
.toolbar {
  padding-left: 10px;
}

.search-btn {
  margin-left: 10px;
}

.gh-link {
  margin-left: 6px;
  color: rgb(0, 188, 212);
  text-decoration: none;
}
</style>
