export interface ItemSearchResponse {
  author: {
    name: string;
    lastname: string;
  };
  categories?: Array<string>;
  items: Array<Item>;
}

export interface ItemDetailResponse {
  author: {
    name: string;
    lastname: string;
  };
  item: Item;
}

export interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals?: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
  seller?: string;
  itemLink?: string;
}

export interface ItemsSearchState {
  error: string | null;
  payload: ItemSearchResponse | null;
  isLoading: boolean | null;
}

export interface ItemDetailState {
  error: string | null;
  payload: ItemDetailResponse | null;
  isLoading: boolean | null;
}
