<template>
  <section class="gd-main">
    <gd-toolbar @search="onSearch" />
    <search-results
      :items="items"
      :loading="loading"
      @change-page="onChangePage"
    />
    <gd-footer />
  </section>
</template>

<script lang="ts">
import GdToolbar from '../gd-toolbar/gd-toolbar.vue';
import SearchResults from '../search-results/search-results.vue';
import GdFooter from '../gd-footer/gd-footer.vue';
import type { DataTypes } from './gd-main.types';
import type { Item } from '../search-results/search-results.types';
import { api } from '../../api';

export default {
  name: 'GdMain',
  components: { GdToolbar, SearchResults, GdFooter },

  data(): DataTypes {
    return {
      searchValue: '',
      loading: false,
      pagesCount: 0,
      items: [],
    };
  },

  methods: {
    async onChangePage(page: number) {
      if (page + 1 === this.pagesCount || page === this.pagesCount) {
        try {
          this.loading = true;
          this.pagesCount += 1;
          const newItems: Item[] = await this.getItems(this.pagesCount);
          this.items = [...this.items, ...newItems];
        } catch(error) {
          this.pagesCount -= 1;
          throw error;
        } finally {
          this.loading = false;
        }
      }
    },

    async onSearch(value: string) {
      if (!value) return;
      this.searchValue = value;
      const data = await Promise.all([this.getItems(1), this.getItems(2), this.getItems(3)]);
      this.pagesCount = 3;
      this.items = data.flat();
    },

    async getItems(page: number): Promise<Item[]> {
      const data = await api.repo.getByName(this.searchValue, page);
      return data;
    },
  },
}
</script>

<style>
.gd-main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>