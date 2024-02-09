<template>
  <div class="items-table">
    <v-data-table
      :loading="loading"
      :items="items"
      :headers="headers"
      :items-per-page-options="[10]"
      @update:page="$emit('change-page', $event)"
    >
      <template #item="{ item }">
        <tr class="items-table__tr" @click="onOpenModal(item)">
          <td>{{ item.type }}</td>
          <td>{{ item.version }}</td>
        </tr>
      </template>
    </v-data-table>
    <v-dialog v-model="isModalOpen" width="auto">
      <v-card>
        <v-card-text>
          <div>hitsTotal: {{ currentItem?.information?.hits?.total }}</div>
          <div>bandwidthTotal: {{ currentItem?.information?.bandwidth?.total }}</div>
          <div>self: {{ currentItem?.information?.links?.self }}</div>
          <div>files: {{ currentItem?.information?.links?.files }}</div>
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
import { props } from './items-table.types';
import type { Item, DataTypes } from '../items-table/items-table.types';

export default {
  name: 'ItemsTable',
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
.items-table__tr:hover {
  background-color: lightblue;
  cursor: pointer;
}
</style>