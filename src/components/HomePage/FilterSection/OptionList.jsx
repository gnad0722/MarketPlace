import React from "react";
function OptionList(props) {
  return (
    <ul className="option-list">
      <li
        className={`option-item ${
          props.filterBy === "Mới nhất" ? "selected-filter" : ""
        }`}
        onClick={() => props.onSelect("Mới nhất")}
      >
        Mới nhất
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-check2"
          viewBox="0 0 16 16"
          display={props.filterBy === "Mới nhất" ? "block" : "none"}
        >
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
        </svg>
      </li>
      <li
        className={`option-item ${
          props.filterBy === "Tốt nhất" ? "selected-filter" : ""
        }`}
         onClick={() => props.onSelect("Tốt nhất")}
      >
        Tốt nhất
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-check2"
          viewBox="0 0 16 16"
          display={props.filterBy === "Tốt nhất" ? "block" : "none"}
        >
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
        </svg>
      </li>
      <li
        className={`option-item ${
          props.filterBy === "Tệ nhất" ? "selected-filter" : ""
        }`}
         onClick={() => props.onSelect("Tệ nhất")}
      >
        Tệ nhất
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-check2"
          viewBox="0 0 16 16"
          display={props.filterBy === "Tệ nhất" ? "block" : "none"}
        >
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
        </svg>
      </li>
    </ul>
  );
}
export default OptionList;
