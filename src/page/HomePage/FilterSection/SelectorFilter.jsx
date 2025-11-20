import React from "react";
import { useState } from "react";
import SelectBox from "./SelectBox";
import OptionList from "./OptionList";
function SelectorFilter() {
  const listOption=["Mới nhất","Bán chạy","Phổ biến"];
  const [isOpen,setIsOpen]=useState(false);
  const [option,setOption]=useState("Mới nhất");
  function toggleDropdown(){
    setIsOpen(!isOpen);
  }
  function handleOptionSelect(option){
    setOption(option);
    setIsOpen(!isOpen);
  }
  
  return (
    <div className="selector-container">
      <span
        style={{
          fontWeight: "500",
          marginBottom: "5px",
        }}
      >
        Sắp xếp
      </span>
        <SelectBox onToggle={toggleDropdown} isOpen={isOpen} option={option}/>
       {isOpen&&<OptionList option={option} onSelect={handleOptionSelect} listOption={listOption}/>}
    </div>
  );
}
export default SelectorFilter;
