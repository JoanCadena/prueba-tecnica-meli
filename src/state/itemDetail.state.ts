import { atom } from "jotai";
import { ItemDetailState } from "@/interfaces/items";

const INITIAL_ITEM_DETAIL_STATE: ItemDetailState = {
  error: null,
  isLoading: null,
  payload: null,
};

const itemDetailStateAtom = atom(INITIAL_ITEM_DETAIL_STATE);

export { itemDetailStateAtom, INITIAL_ITEM_DETAIL_STATE };
