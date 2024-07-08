"use client";

import Image from "next/image";
import styles from "./itemDetails.module.scss";
import MeliLogo from "@/icons/meli_logo.png";
import { Button } from "reactstrap";

export default function Page({ params }: { params: { id: string } }) {
  //   return <h1>Details for item: {params.id}</h1>;
  return (
    <div className={styles.pageContainer}>
      <section className={styles.detailsSection}>
        <section className={styles.imageContainer}>
          <Image className={styles.image} alt="image" src={MeliLogo} />
        </section>
        <section className={styles.infoContainer}>
          <p style={{ fontSize: 14 }}>Nuevo - xxx vendidos</p>
          <h5>Titulo super grande grandote</h5>
          <h1 style={{ marginBottom: 36 }}>price</h1>
          <Button
            type="button"
            color="primary"
            style={{ width: "100%" }}
            onClick={() => undefined}
          >
            Comprar
          </Button>
        </section>
      </section>
      <div className={styles.descriptionSection}>
        <h3>Descripción del producto</h3>
        <p style={{ marginBottom: 0, color: "grey" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quaerat
          facere consectetur dolor vitae perferendis veritatis unde, rem
          doloremque animi esse consequatur perspiciatis ab voluptates omnis
          iure laudantium nisi alias.
        </p>
      </div>
    </div>
  );
}
