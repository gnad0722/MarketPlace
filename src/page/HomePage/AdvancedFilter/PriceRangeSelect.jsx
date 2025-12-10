import React from "react";
import PriceRange from "./PriceRange";
import { useState } from "react";
function PriceRangeSelect(props) {
  const listPrice = [
    {
      range: "Tất cả",
      price_min: 0,
      price_max: Infinity,
    },
    {
      range: "Dưới 100.000₫",
      price_min: 0,
      price_max: 100000,
    },
    {
      range: "100.000₫ - 300.000₫",
      price_min: 100000,
      price_max: 300000,
    },
    {
      range: "300.000₫ - 500.000₫",
      price_min: 300000,
      price_max: 500000,
    },
    {
      range: "500.000₫ - 1.000.000₫",
      price_min: 500000,
      price_max: 1000000,
    },
    {
      range: "1.000.000₫ - 2.000.000₫",
      price_min: 1000000,
      price_max: 2000000,
    },
    {
      range: "2.000.000₫ - 5.000.000₫",
      price_min: 2000000,
      price_max: 5000000,
    },
    {
      range: "Trên 5.000.000₫",
      price_min: 5000000,
      price_max: Infinity,
    },
  ];

  const defaultIndex = listPrice.findIndex(
    (range) =>
      range.price_min === props.price_min && range.price_max === props.price_max
  );

  const [selected, setSelected] = useState(
    defaultIndex === -1 ? 0 : defaultIndex
  );
  function handleSelected(id) {
    const range = {
      price_min: listPrice[id].price_min,
      price_max: listPrice[id].price_max,
    };
    props.onRange(range);
    setSelected(id);
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
      {listPrice.map((price, index) => {
        return (
          <PriceRange
            key={index}
            id={index}
            range={price.range}
            selected={selected}
            onSelect={handleSelected}
          />
        );
      })}
    </div>
  );
}
export default PriceRangeSelect;
