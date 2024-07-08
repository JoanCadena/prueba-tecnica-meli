"use client";

import { Input } from "reactstrap";
import styles from "./ResultCard.module.scss";
import Image from "next/image";
import MeliLogo from "@/icons/meli_logo.png";

export const ResultCard = () => {
  return (
    <div className={styles.resultCard}>
      <section className={styles.imageContainer}>
        <Image alt="image" src={MeliLogo} height={48} />
      </section>
      <section className={styles.infoContainer}>
        <h3 className={styles.price}>price</h3>
        <p className={styles.author}>author</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At illo ab
          eveniet voluptatum.
        </p>
      </section>
    </div>
  );
};

export default ResultCard;
