import ResultCard from "@/components/ResultCard/ResultCard";
import styles from "./itemsPage.module.scss";

export default function Page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  //   return <h1>Looking for items: {searchParams.search}</h1>;
  return (
    <section className={styles.resultsSection}>
      <ResultCard />
      <hr style={{ margin: 8, opacity: 0.25 }} />
      <ResultCard />
      <hr style={{ margin: 8, opacity: 0.25  }} />
      <ResultCard />
      <hr style={{ margin: 8, opacity: 0.25  }} />
      <ResultCard />
    </section>
  );
}
