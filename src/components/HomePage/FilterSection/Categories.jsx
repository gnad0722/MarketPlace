import React from "react"
import CategoryList from "./CategoryList";
import { useState } from "react";
function Categories(props){
    
    const listCategories=props.listCategories;
    
    return <div className="categories-container">
          <span
        style={{
          fontWeight: "500",
          marginBottom: "5px",
        }}
      >
        Danh mục
      </span>
        <CategoryList listCategories={listCategories}/>
    </div>
}
export default Categories;