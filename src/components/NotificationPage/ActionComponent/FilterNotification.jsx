import React from "react";
import TypeNotification from "./TypeNotification";
import { useState } from "react";
function FilterNotification() {
    const [chosen,setChosen]=useState("Tất cả");
    function handleChoose(chosen){
        setChosen(chosen);
    }
  return (
    <div className="filter-bar row">
      <TypeNotification type="Tất cả" chosen={chosen} onChosen={handleChoose}/>
      <TypeNotification type="Người dùng" chosen={chosen} onChosen={handleChoose}/>
      <TypeNotification type="Đớn hàng của tôi" chosen={chosen} onChosen={handleChoose}/>
      <TypeNotification type="Hệ thống" chosen={chosen} onChosen={handleChoose}/>
    </div>
  );
}
export default FilterNotification;
