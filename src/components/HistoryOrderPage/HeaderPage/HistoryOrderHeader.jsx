import React from "react";
import { useState } from "react";
import SelectBox from "../../HomePage/FilterSection/SelectBox";
import OptionList from "../../HomePage/FilterSection/OptionList";
function HistoryOrderHeader() {
  const listOption = ["Tất cả", "Đang giao", "Đang xử lí", "Hoàn tất"];
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState("Tất cả");
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  function handleOptionSelect(option) {
    setOption(option);
    setIsOpen(!isOpen);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span style={{ fontSize: "25px", fontWeight: "500" }}>
        Lịch sử đơn hàng
      </span>
      <span style={{ opacity: "0.5" }}>
        Quản lí và theo dõi các đơn hàng của bạn
      </span>
      <div className="selector-container" style={{fontWeight:"500"}}>
        <SelectBox onToggle={toggleDropdown} isOpen={isOpen} option={option} />
        {isOpen && (
          <OptionList
            option={option}
            onSelect={handleOptionSelect}
            listOption={listOption}
          />
        )}
      </div>
    </div>
  );
}
export default HistoryOrderHeader;
