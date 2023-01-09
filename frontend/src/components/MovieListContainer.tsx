import { useState } from "react";
import MovieList from "./MovieList";
import { FilterDropdown } from "./FilterDropdown";
import {
  capitalize,
  filterDefault,
  filterColumnOptions,
  filterOrderOptions,
} from "../constants";

export enum FilterLabel {
  Column = "Sort By:",
  Order = "Order:",
}

export type ConfigInterface = {
  column: string;
  desc: string;
  limit: number;
};

export default function MovieListContainer(props: any) {
  const [filter, setFilter] = useState<ConfigInterface>(filterDefault);

  function handleColumnDropdownClick(event: React.MouseEvent, column: string) {
    event.preventDefault();
    setFilter({ ...filter, column: column });
  }

  function handleOrderDropdownClick(event: React.MouseEvent, desc: string) {
    event.preventDefault();
    setFilter({ ...filter, desc: desc });
  }

  return (
    <>
      <div className="filters-container">
        <FilterDropdown
          options={filterColumnOptions}
          handler={handleColumnDropdownClick}
          label={`${FilterLabel.Column} ${capitalize(filter.column)}`}
        />
        <FilterDropdown
          options={filterOrderOptions}
          handler={handleOrderDropdownClick}
          label={`${FilterLabel.Order} ${
            filter.desc === "true" ? "High -> Low" : "Low -> High"
          }`}
        />
      </div>

      <MovieList filter={filter} page={props.params.page} />
    </>
  );
}
