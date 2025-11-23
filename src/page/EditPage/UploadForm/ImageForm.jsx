import React from "react";
function ImageForm() {
  return (
    <div className="img-form">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{width:"50px",height:"50px", color:"grey"}}
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.03l5.88-5.879a.75.75 0 011.06 0l5.879 5.88 3.841-3.84a.75.75 0 011.06 0l.94 1.98V6a.75.75 0 00-.75-.75H3.75A.75.75 0 003 6v10.03zM14.25 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        <span style={{ fontWeight: "500", fontSize: "17px" }}>
          Nhấn đê tải ảnh lên
        </span>
        <span style={{ opacity: "0.5", fontSize: "14px" }}>
          PNJ, JPG hoặc WEBP
        </span>
      </div>
    </div>
  );
}
export default ImageForm;
