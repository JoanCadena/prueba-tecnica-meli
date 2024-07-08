"use client";

import { Input } from "reactstrap";
import styles from "./ResultCard.module.scss";
import Image from "next/image";
import { Item } from "@/interfaces/items";

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
        <h3 className={styles.price}>
          $ {Intl.NumberFormat("es-CO").format(itemData.price.amount)}
        </h3>
        <p className={styles.author}>{itemData.seller}</p>
        <p className={styles.title}>{itemData.title}</p>
      </section>
    </div>
  );
};

export default ResultCard;
