import React from "react";
import { useState } from "react";
import TagItem from "./TagItem";
function PopularTag(props) {
  const tag = props.tag;
  const listTag = [
    { name: "Chơi game", selected: false },
    { name: "Học tập", selected: false },
    { name: "Làm việc văn phòng", selected: false },
    { name: "Thiết kế đồ họa", selected: false },
    { name: "Lập trình", selected: false },
    { name: "Chụp ảnh & Quay video", selected: false },
    { name: "Giải trí & Xem phim", selected: false },
    { name: "Nghe nhạc", selected: false },
    { name: "Sức khỏe & Thể thao", selected: false },
    { name: "Theo dõi giấc ngủ", selected: false },
    { name: "Di chuyển & Du lịch", selected: false },
    { name: "Nhà thông minh", selected: false },
    { name: "Phụ huynh & Trẻ em", selected: false },
    { name: "Người lớn tuổi", selected: false },
    { name: "Dùng hằng ngày", selected: false },
  ];

  const [tags, setTags] = useState(
    listTag.map((item) => ({
      ...item,
      selected: tag.includes(item.name),
    }))
  );
  function handleTag(name) {
    const index = tag.indexOf(name);
    if (index !== -1) {
      tag.splice(index, 1);
    } else {
      tag.push(name);
    }
    setTags((prev) =>
      prev.map((tag) =>
        tag.name === name ? { ...tag, selected: !tag.selected } : tag
      )
    );
    props.onTag({ keyword: tag });
  }
  return (
    <div className="categories-container" style={{ marginTop: "20px" }}>
      <span
        style={{
          fontWeight: "500",
          marginBottom: "10px",
        }}
      >
        Từ khóa phổ biến
      </span>
      <div className="tag-container">
        {tags.map((tag, index) => {
          return (
            <TagItem
              key={index}
              name={tag.name}
              selected={tag.selected}
              onSelect={handleTag}
            />
          );
        })}
      </div>
    </div>
  );
}
export default PopularTag;
