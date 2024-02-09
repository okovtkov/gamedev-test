import type { PropType } from 'vue'

export interface Item {
  type: string;
  version: string;
  information: {
    hits: {
      total: number;
      dates: {
        [key: string]: string;
      }
    };
    links: {
      self: string;
      files: string;
    };
    bandwidth: {
      total: number;
      dates: {
        [key: string]: string;
      }
    };
  };
}

export interface DataTypes {
  isModalOpen: boolean;
  currentItem: null | Item;
  headers: { title: string, value: string }[];
}

export const props = {
  items: {
    type: Array as PropType<Item[] | []>,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  }
};
