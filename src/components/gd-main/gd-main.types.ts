import type { Item } from "../search-results/search-results.types";

export interface DataTypes {
  searchValue: string;
  loading: boolean;
  pagesCount: number;
  items: [] | Item[];
};
