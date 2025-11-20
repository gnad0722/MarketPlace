import React from "react";

import { useState } from "react";
import { formatTime } from "../../../utils/utils";
import { parseISO } from "date-fns";
function HeaderPost(props) {
  const [followed, setFollowed] = useState(false);
  function handleFollow() {
    setFollowed(!followed);
  }
  const headerInfo = props.headerInfo;
  const author = headerInfo.author;
  const createAt = parseISO(headerInfo.createAt);
  
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
            ? formatTime(createAt)
            : `Đã chỉnh sửa ${formatTime(parseISO(headerInfo.updateAt))}`}
        </span>
      </div>  
    </div>
  );
}
export default HeaderPost;
