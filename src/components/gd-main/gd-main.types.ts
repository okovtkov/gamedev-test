import type { Item } from "../items-table/items-table.types";

export interface DataTypes {
  searchValue: string;
  loading: boolean;
  pagesCount: number;
  items: [] | Item[];
};
