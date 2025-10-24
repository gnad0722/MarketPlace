import React from "react";
import TypeAction from "./TypeAction";
import { useState } from "react";
function FilterNotification() {
    const [chosen,setChosen]=useState("Tất cả");
    function handleChoose(chosen){
        setChosen(chosen);
    }
  return (
    <div className="filter-bar row">
      <TypeAction type="Tất cả" chosen={chosen} onChosen={handleChoose}/>
      <TypeAction type="Người dùng" chosen={chosen} onChosen={handleChoose}/>
      <TypeAction type="Đớn hàng của tôi" chosen={chosen} onChosen={handleChoose}/>
      <TypeAction type="Hệ thống" chosen={chosen} onChosen={handleChoose}/>
    </div>
  );
}
export default FilterNotification;
