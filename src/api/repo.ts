import type { Item } from "@/components/search-results/search-results.types";

export const repo = {
  async getByName(name: string, page: number): Promise<Item[]> {
    const baseUrl = 'https://data.jsdelivr.com';
    const query = `limit=10&page=${page}`;
    const response = await fetch(`${baseUrl}/v1/stats/packages/gh/twbs/${name}/versions?${query}`);
    const data = await response.json();
    return this.getEditedData(data);
  },

  getEditedData(data: any): Item[] {
    return data.map((item: any) => ({
      type: item.type,
      version: item.version,
      information: {
        bandwidth: item.bandwidth,
        hits: item.hits,
        links: item.links,
      }
    }))
  },
};