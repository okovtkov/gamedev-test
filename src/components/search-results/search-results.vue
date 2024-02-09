<template>
  <div class="search-results">
    <v-data-table
      :loading="loading"
      :items="items"
      :headers="headers"
      :items-per-page-options="[10]"
      @update:page="$emit('change-page', $event)"
    >
      <template #item="{ item }">
        <tr class="search-results__tr" @click="onOpenModal(item)">
          <td>{{ item.type }}</td>
          <td>{{ item.version }}</td>
        </tr>
      </template>
    </v-data-table>
    <v-dialog v-model="isModalOpen" width="auto">
      <v-card>
        <v-card-text v-if="currentItem">
          <div>hitsTotal: {{ currentItem.information.hits.total }}</div>
          <div>bandwidthTotal: {{ currentItem.information.bandwidth.total }}</div>
          <div>self: {{ currentItem.information.links.self }}</div>
          <div>files: {{ currentItem.information.links.files }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="isModalOpen = false">
            Close Dialog
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { props } from './search-results.types';
import type { Item, DataTypes } from '../search-results/search-results.types';

export default {
  name: 'SearchResults',
  components: {},
  props,
  data(): DataTypes {
    return {
      isModalOpen: false,
      currentItem: null,
      headers: [
        { title: 'Type', value: 'type' },
        { title: 'Version', value: 'version' },
      ],
    };
  },
  methods: {
    onOpenModal(item: Item) {
      this.currentItem = item;
      this.isModalOpen = true;
    },
  }
}
</script>

<style>
.search-results__tr:hover {
  background-color: lightblue;
  cursor: pointer;
}
</style>