import React from "react";
import {useState} from "react";
import TagItem from "./TagItem";
function PopularTag() {
  const listTag = [
    { name: "Điện thoại", selected: false },
    { name: "Laptop", selected: false },
    { name: "Máy tính bảng", selected: false },
    { name: "Tai nghe", selected: false },
    { name: "Loa", selected: false },
    { name: "Tivi", selected: false },
    { name: "Máy ảnh", selected: false },
    { name: "Màn hình", selected: false },
    { name: "Bàn phím", selected: false },
    { name: "Chuột máy tính", selected: false },
    { name: "Smartwatch", selected: false },
    { name: "Phụ kiện", selected: false },
    { name: "Thiết bị mạng", selected: false },
    { name: "Ổ cứng", selected: false },
    { name: "Linh kiện PC", selected: false },
  ];
  const [tags, setTags] = useState(listTag);
    function handleTag(name) {
      setTags((prev) =>
        prev.map((tag) =>
          tag.name === name ? { ...tag, selected: !tag.selected } : tag
        )
      );
    }
  return (
    <div className="categories-container" style={{ marginTop: "20px", }}>
      <span
        style={{
          fontWeight: "500",
          marginBottom: "10px",
        }}
      >
        Từ khóa phổ biến
      </span>
      <div className="tag-container">
        {tags.map((tag,index)=>{
            return <TagItem key={index} name={tag.name} selected={tag.selected} onSelect={handleTag}/>
        })}
      </div>
    </div>
  );
}
export default PopularTag;
