"use client";

import ResultCard from "@/components/ResultCard/ResultCard";
import { useItemsSearch } from "@/hooks/useItemsSearch";
import { Item } from "@/interfaces/items";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./itemsPage.module.scss";

export default function Page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const query = searchParams.search;
  const { getItems, itemsSearchState, resetItemsSearchState } =
    useItemsSearch();
  const [resultItems, setResultItems] = useState<Item[]>([]);
  const router = useRouter();

  const handleItemClick = (itemId: string) => {
    router.push(`/items/${itemId}`);
  };

  useEffect(() => {
    if (!itemsSearchState.payload) {
      getItems(query);
    } else {
      resetItemsSearchState();
      getItems(query);
    }
  }, [query]);

  useEffect(() => {
    if (itemsSearchState.isLoading === false && itemsSearchState.payload) {
      setResultItems(itemsSearchState?.payload?.items);
    }
  }, [itemsSearchState.isLoading, query]);

  return (
    <section className={styles.resultsSection}>
      {resultItems.length > 0 ? (
        resultItems.slice(0, 4).map((item) => (
          <>
            <ResultCard
              key={item.id}
              itemData={item}
              handleCardClick={() => handleItemClick(item.id)}
            />
            <hr style={{ margin: 8, opacity: 0.25 }} />
          </>
        ))
      ) : (
        <>
          {itemsSearchState?.payload ? (
            <div>No Items Found</div>
          ) : (
            <div>Searching...</div>
          )}
        </>
      )}
    </section>
  );
}
