import React from "react";
import CategoryItem from "./CategoryItem";
import { useState } from "react";
function CategoryList(props) {
  const listCategories=props.listCategories;
  const [fitlerByCategory, setFilterByCategory] = useState("Tất cả");
  function handleCategorySelect(category){
        setFilterByCategory(category);
    }
  return (
    <ul className="category-list">
      {listCategories.map((category, index) => (
        <CategoryItem
          key={index} category={category} onSelect={handleCategorySelect} onFilter={fitlerByCategory}/>))}
    </ul>
  );
}
export default CategoryList;
