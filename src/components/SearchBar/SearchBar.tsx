"use client";

import { Input } from "reactstrap";
import styles from "./SearchBar.module.scss";
import Image from "next/image";
import MeliLogo from "@/icons/meli_logo.png";
import SearchIcon from "@/icons/search_icon.png";

export const SearchBar = () => {
  //   const [inputText, setInputText] = useState();

  return (
    <div className={styles.barContainer}>
      <Image alt="logo" src={MeliLogo} height={36} />
      <Input
        placeholder="Nunca dejes de buscar"
        className={styles.inputBar}
        onChange={undefined}
      />
      <section className={styles.iconContainer} onClick={undefined}>
        <Image alt="search_icon" src={SearchIcon} height={16} />
      </section>
    </div>
  );
};

export default SearchBar;
