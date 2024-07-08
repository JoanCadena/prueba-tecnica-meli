"use client";

import Image from "next/image";
import styles from "./itemDetails.module.scss";
import MeliLogo from "@/icons/meli_logo.png";
import { Button } from "reactstrap";
import { useItemDetail } from "@/hooks/useItemDetail";
import { Item } from "@/interfaces/items";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const itemId = params.id;
  const { getItem, itemDetailState } = useItemDetail();
  const [itemDetail, setItemDetail] = useState<Item>();

  const handleBuyClick = (itemURL: string) => {
    window.open(itemURL);
  };

  useEffect(() => {
    if (!itemDetailState.payload) {
      getItem(itemId);
    }
  }, []);

  useEffect(() => {
    if (itemDetailState.isLoading === false && itemDetailState.payload) {
      setItemDetail(itemDetailState?.payload?.item);
    }
  }, [itemDetailState.isLoading]);

  return (
    <div className={styles.pageContainer}>
      {itemDetail ? (
        <>
          <section className={styles.detailsSection}>
            <section className={styles.imageContainer}>
              <Image
                className={styles.image}
                alt="image"
                src={itemDetail?.picture || ""}
                width={420}
                height={420}
              />
            </section>
            <section className={styles.infoContainer}>
              <p style={{ fontSize: 14, textTransform: "capitalize" }}>
                {itemDetail?.condition} - {itemDetail?.sold_quantity} vendidos
              </p>
              <h5>{itemDetail?.title}</h5>
              <h1 style={{ marginBottom: 36 }}>
                ${" "}
                {Intl.NumberFormat("es-CO").format(
                  itemDetail?.price?.amount || 0
                )}
              </h1>
              <Button
                type="button"
                color="primary"
                style={{ width: "100%" }}
                onClick={() => handleBuyClick(itemDetail?.itemLink || "")}
              >
                Comprar
              </Button>
            </section>
          </section>
          <div className={styles.descriptionSection}>
            <h3>Descripción del producto</h3>
            <p style={{ marginBottom: 0, color: "grey" }}>
              {itemDetail?.description}
            </p>
          </div>
        </>
      ) : (
        <>
          {itemDetailState?.isLoading === false && !itemDetailState.payload ? (
            <div>Item Not Found</div>
          ) : (
            <div>Searching...</div>
          )}
        </>
      )}
    </div>
  );
}
