"use client";

import { Input } from "reactstrap";
import styles from "./SearchBar.module.scss";
import Image from "next/image";
import MeliLogo from "@/icons/meli_logo.png";
import SearchIcon from "@/icons/search_icon.png";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useItemsSearch } from "@/hooks/useItemsSearch";

export const SearchBar = () => {
  const [searchvalue, setSearchValue] = useState("");
  const { resetItemsSearchState } = useItemsSearch();
  const router = useRouter();

  return (
    <div className={styles.barContainer}>
      <Image
        alt="logo"
        src={MeliLogo}
        height={36}
        onClick={() => {
          setSearchValue("");
          resetItemsSearchState();
          router.push("/");
        }}
        style={{ cursor: "pointer" }}
      />
      <Input
        placeholder="Nunca dejes de buscar"
        className={styles.inputBar}
        onChange={(e: ChangeEvent) => {
          const target = e.target as HTMLTextAreaElement;
          setSearchValue(target.value);
        }}
        value={searchvalue}
        onKeyDown={(e) => {
          const target = e.target as HTMLTextAreaElement;
          if (e.key === "Enter" && target.value !== "") {
            router.push(`items?search=${target.value}`);
          }
        }}
      />
      <section
        className={styles.iconContainer}
        onClick={() => {
          if (searchvalue !== "") {
            router.push(`items?search=${searchvalue}`);
          }
        }}
      >
        <Image alt="search_icon" src={SearchIcon} height={16} />
      </section>
    </div>
  );
};

export default SearchBar;
