import React from "react";
import { useState } from "react";
import SelectBox from "./SelectBox";
import OptionList from "./OptionList";
function SelectorFilter() {
  const [isOpen,setIsOpen]=useState(false);
  const [filterBy,setFilterBy]=useState("Mới nhất");
  function toggleDropdown(){
    setIsOpen(!isOpen);
  }
  function handleOptionSelect(option){
    setFilterBy(option);
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
        <SelectBox onToggle={toggleDropdown} isOpen={isOpen} filterBy={filterBy}/>
       {isOpen&&<OptionList filterBy={filterBy} onSelect={handleOptionSelect}/>}
    </div>
  );
}
export default SelectorFilter;
