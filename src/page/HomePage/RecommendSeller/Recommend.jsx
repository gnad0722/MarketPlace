import React from "react";
import { useState } from "react";
function Recommend(props) {
  const [followed, setFollowed] = useState(false);
  function handleFollow() {
    setFollowed(!followed);
  }
  return (
    <div className="recommend">
      <div className="avt-container">
        <span className="avt-mini">
          {props.avatar === "" ? (
            props.name[0]
          ) : (
            <img src={props.avatar} alt="avatar" />
          )}
        </span>
      </div>
      <div className="info-recommend">
        <span style={{ fontSize: "1rem" }}>{props.name}</span>
        <span style={{ fontSize: "0.8rem", opacity: "0.5" }}>
          {(props.followers / 1000).toFixed(1)}K người theo dõi
        </span>
      </div>
      <button
        type="button"
        className=" btn-sm btn-follow"
        onClick={handleFollow}
      >
        {followed ? "Bỏ theo dõi" : "Theo dõi"}
      </button>
    </div>
  );
}
export default Recommend;
