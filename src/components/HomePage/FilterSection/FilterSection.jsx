import React from "react";
import { TrendingUp, Filter, Hash, Plus } from "lucide-react";
import SelectorFilter from "./SelectorFilter";
import Categories from "./Categories";
function FilterSection(props) {
  const listCategories=props.listCategories;
  return (
    <div className="filter-container">
      <span className="title-filter">
        <Filter className="icon-btn-size" /> Bộ lọc
      </span>
      <SelectorFilter/>
      <Categories listCategories={listCategories}/>
    </div>
  );
}
export default FilterSection;
