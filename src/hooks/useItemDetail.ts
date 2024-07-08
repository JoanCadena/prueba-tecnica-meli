import {
  itemDetailStateAtom,
  INITIAL_ITEM_DETAIL_STATE,
} from "@/state/itemDetail.state";
import { ItemDetailResponse } from "@/interfaces/items";
import { useAtomValue, useSetAtom } from "jotai";

export const useItemDetail = () => {
  const itemDetailState = useAtomValue(itemDetailStateAtom);
  const setItemDetailState = useSetAtom(itemDetailStateAtom);

  const getItem = async (itemId: string) => {
    try {
      setItemDetailState({
        ...itemDetailState,
        isLoading: true,
      });

      const payload = await fetch(`/api/items/${itemId}`).then((res) =>
        res.json()
      );

      setItemDetailState({
        ...INITIAL_ITEM_DETAIL_STATE,
        isLoading: false,
        payload: payload.mappedResponse as unknown as ItemDetailResponse,
      });
    } catch (e: any) {
      setItemDetailState({
        ...INITIAL_ITEM_DETAIL_STATE,
        isLoading: false,
        error: e,
      });
    }
  };

  const resetItemDetailState = () => {
    setItemDetailState(INITIAL_ITEM_DETAIL_STATE);
  };

  return {
    itemDetailState,
    getItem,
    resetItemDetailState,
  };
};
