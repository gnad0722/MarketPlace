import React from "react";
import PriceRange from "./PriceRange";
import { useState } from "react";
function PriceRangeSelect() {
  const listRange = [
    "Tất cả",
    "Dưới 100.000₫",
    "100.000₫ - 300.000₫",
    "300.000₫ - 500.000₫",
    "500.000₫ - 1.000.000₫",
    "1.000.000₫ - 2.000.000₫",
    "2.000.000₫ - 5.000.000₫",
    "Trên 5.000.000₫",
  ];
  const [selected,setSelected]=useState(0);
  function handleSelected(id){
    setSelected(id)
  }
  return (
    <div className="categories-container">
      <span
        style={{
          fontWeight: "500",
          marginBottom: "5px",
        }}
      >
        Khoảng giá
      </span>
      {listRange.map((range,index)=>{
        return <PriceRange key={index} id={index} range={range} selected={selected} onSelect={handleSelected}/>
      })}
    </div>
  );
}
export default PriceRangeSelect;
