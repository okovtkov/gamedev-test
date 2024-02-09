<template>
  <v-toolbar class="toolbar bg-cyan" dense floating>
    <v-text-field
      placeholder="bootstrap"
      hide-details
      density="compact"
      @keydown.enter="$emit('search', value)"
      @update:model-value="value = $event"
    />
    <v-btn class="toolbar__search-btn" icon="mdi-magnify" @click="$emit('search', value)" />
  </v-toolbar>
</template>

<script lang="ts">
export default {
  name: 'GdToolbar',
  data() {
    return {
      value: '',
    };
  },
}
</script>

<style>
.toolbar {
  padding-left: 10px;
}

.toolbar__search-btn {
  margin-left: 10px;
}
</style>