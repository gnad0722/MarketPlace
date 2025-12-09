import React from "react";
import PriceSorter from "./PriceSorter";
import PriceRangeSelect from "./PriceRangeSelect";
import BrandFilter from "./BrandFilter";
import PopularTag from "./PopularTag";
import RatingFilter from "./RatingFilter";
import { Filter } from "lucide-react";
function AdvancedFilter() {
  return (
    <div className="filter-container">
      <span className="title-filter">
        <Filter className="icon-btn-size" /> Bộ lọc
      </span>
      <PriceSorter />
      <PriceRangeSelect/>
      <PopularTag/>  
      <RatingFilter/>
    </div>
  );
}
export default AdvancedFilter;
