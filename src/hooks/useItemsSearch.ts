import {
  itemsSearchStateAtom,
  INITIAL_ITEMS_SEARCH_STATE,
} from "@/state/itemsSearch.state";
import { ItemSearchResponse } from "@/interfaces/items";
import { useAtomValue, useSetAtom } from "jotai";

export const useItemsSearch = () => {
  const itemsSearchState = useAtomValue(itemsSearchStateAtom);
  const setItemsSearchState = useSetAtom(itemsSearchStateAtom);

  const getItems = async (query: string) => {
    try {
      setItemsSearchState({
        ...itemsSearchState,
        isLoading: true,
      });

      const payload = await fetch(`api/items?search=${query}`).then((res) =>
        res.json()
      );

      setItemsSearchState({
        ...INITIAL_ITEMS_SEARCH_STATE,
        isLoading: false,
        payload: payload.mappedResponse as unknown as ItemSearchResponse,
      });
    } catch (e: any) {
      setItemsSearchState({
        ...INITIAL_ITEMS_SEARCH_STATE,
        isLoading: false,
        error: e,
      });
    }
  };

  const resetItemsSearchState = () => {
    setItemsSearchState(INITIAL_ITEMS_SEARCH_STATE);
  };

  return {
    itemsSearchState,
    getItems,
    resetItemsSearchState,
  };
};
