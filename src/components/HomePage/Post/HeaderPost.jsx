import React from "react";
import {
  differenceInHours,
  differenceInMinutes,
  format,
  parseISO,
} from "date-fns";
function HeaderPost(props) {
  const headerInfo = props.headerInfo;
  const author = headerInfo.author;
  const createAt = parseISO(headerInfo.createAt);
  function formatPostTime(dateData) {
    const now = new Date();
    const hoursDifference = differenceInHours(now, dateData);
    if (hoursDifference < 24) {
      if (hoursDifference === 0) {
        return `${Math.abs(differenceInMinutes(now, dateData))} phút trước`;
      }
      return `${hoursDifference} giờ trước`;
    } else {
      return format(dateData, "dd/MM/yyyy");
    }
  }
  return (
    <div className="info-seller">
      <span className="avt-mini">
        {author.avatar === "" ? (
          author.firstName[0]
        ) : (
          <img src={author.avatar} alt="avatar" />
        )}
      </span>
      <div className="name-seller">
        <span style={{ fontSize: "1.1rem" }}>
          {author.firstName} {author.lastName}
        </span>
        <span style={{ fontSize: "0.9rem", opacity: "0.5" }}>
          {headerInfo.updateAt === ""
            ? formatPostTime(createAt)
            : `Đã chỉnh sửa ${formatPostTime(parseISO(headerInfo.updateAt))}` }
        </span>
      </div>
      <button
        type="button"
        className="btn btn-outline-secondary btn-custom btn-sm"
        style={{
          color: "black",
          borderRadius: "0.5rem",
          fontSize: "1rem",
          marginLeft: "auto",
        }}
      >
        Theo dõi
      </button>
    </div>
  );
}
export default HeaderPost;
