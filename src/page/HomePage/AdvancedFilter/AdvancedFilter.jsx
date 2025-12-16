import React from "react";
import PriceSorter from "./PriceSorter";
import PriceRangeSelect from "./PriceRangeSelect";
import BrandFilter from "./BrandFilter";
import PopularTag from "./PopularTag";
import RatingFilter from "./RatingFilter";
import { Filter } from "lucide-react";
function AdvancedFilter(props) {
  const filter=props.filter;
  return (
    <div className="filter-container">
      <span className="title-filter" style={{marginBottom:"10px"}}>
        <Filter className="icon-btn-size" /> Bộ lọc
      </span>
      {/* <PriceSorter sortBy={filter.sortByPrice} onSort={props.onFilter} onOrder={props.onSort}/> */}
      <PriceRangeSelect prince_min={filter.prince_min} prince_max={filter.prince_max} onRange={props.onFilter}/>
      <PopularTag  tag={filter.keyword} onTag={props.onFilter}/>  
      <RatingFilter ratingMin={filter.rating_min} onRating={props.onFilter}/>
    </div>
  );
}
export default AdvancedFilter;
