import React from "react";
import styles from "./FiltersSection.module.css";
import Input from "../../../design-system/Input";
import { useFiltersContext } from "../FiltersContext";
import { Listing } from "../../../types";

const FiltersSection = () => {
  const { sortBy, setSortBy, sortOrder, setSortOrder, query, setQuery } =
    useFiltersContext();
  return (
    <div className={styles.filtersSection}>
      <Input
        placeholder="Search"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div
        style={{
          padding: "12px",
          background: "white",
          border: "1px solid grey",
        }}
      >
        <select
          name="type"
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value !== ""
                ? (e.target.value as keyof Listing)
                : undefined
            )
          }
        >
          <option value={undefined}>filter by </option>
          <option value="id">id</option>
          <option value="title">title</option>
          <option value="description">description</option>
          <option value="type">type</option>
          <option value="rooms">rooms</option>
          <option value="bathrooms">bathrooms</option>
          <option value="floor">floor</option>
          <option value="plotSize">plotSize</option>
          <option value="price">price</option>
          <option value="agent">agent</option>
          <option value="shop">shop</option>
        </select>
      </div>
      <div
        style={{
          padding: "12px",
          background: "white",
          border: "1px solid grey",
        }}
      >
        <select
          name="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "ASC" | "DESC")}
        >
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersSection;
