"use client";

import styles from "./ResultCard.module.scss";
import Image from "next/image";
import { Item } from "@/interfaces/items";
import FreeShippingIcon from "@/icons/free_shipping_icon.png";

export const ResultCard = ({
  itemData,
  handleCardClick,
}: {
  itemData: Item;
  handleCardClick: () => void;
}) => {
  return (
    <div className={styles.resultCard} onClick={() => handleCardClick()}>
      <section className={styles.imageContainer}>
        <Image alt="image" src={itemData.picture} height={96} width={96} />
      </section>
      <section className={styles.infoContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 className={styles.price}>
            $ {Intl.NumberFormat("es-CO").format(itemData.price.amount)}
          </h3>
          <Image alt="image" src={FreeShippingIcon} height={16} width={16} />
        </div>
        <p className={styles.author}>{itemData.seller}</p>
        <p className={styles.title}>{itemData.title}</p>
      </section>
    </div>
  );
};

export default ResultCard;
