import { atom } from "jotai";
import { ItemsSearchState } from "@/interfaces/items";

const INITIAL_ITEMS_SEARCH_STATE: ItemsSearchState = {
  error: null,
  isLoading: null,
  payload: null,
};

const itemsSearchStateAtom = atom(INITIAL_ITEMS_SEARCH_STATE);

export { itemsSearchStateAtom, INITIAL_ITEMS_SEARCH_STATE };
