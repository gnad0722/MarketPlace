import React from "react";
import Start from "./Start";
import { useState } from "react";
import { formatTime } from "../../../utils/utils";
import myPicture from "../../../img/iphone.webp";
import myPicture2 from "../../../img/iphone2.webp";
import { parseISO } from "date-fns";
function Comment(props) {
  const authorName=props.author;
  const authorAvatar=props.avatar;
  const createAt=parseISO(props.createAt);
  const content=props.content;
  const [show,setShow]=useState(false);
   const [source,setSource]=useState();
  const rating = props.rating;
  const number = Math.floor(props.number / 1000);
  const fullStarts = Math.floor(rating);
  const partialStartWidth = (rating - fullStarts) * 100;
  const starts = Array.from({ length: 5 }, (_, index) => {
    const startNumber = index + 1;
    if (startNumber <= fullStarts) {
      return <Start key={index} type="full" />;
    } else if (startNumber === fullStarts + 1 && partialStartWidth > 0) {
      return <Start key={index} type="partial" width={partialStartWidth} />;
    } else {
      return <Start key={index} type="empty" />;
    }
  });
  function handleShow(e){
    if (source === e.target.src || !show)  setShow(!show);
    setSource(e.target.src)
  }
  return (
    <div className="comment-container">
     <div className="avt-container">
          <span className="avt-mini">
        {authorAvatar === "" ? (
          authorName[0]
        ) : (
          <img src={authorAvatar} alt="avatar" />
        )}
      </span>
        </div>

      <div className="info-comment">
        <span style={{ fontWeight: "500", paddingLeft: "2px" }}>
          {authorName}
        </span>
        <span style={{ opacity: "0.5", fontSize: "12px", paddingLeft: "2px" }}>
          {formatTime(createAt)}
        </span>
        <div className="star-list" style={{ fontSize: "9px" }}>
          {starts}
        </div>
        <span style={{ marginTop: "10px" }}>
          {content}
        </span>
        <div className="image-feedback">
          <div style={{ height: "90px", width: "90px" }}>
            <img src={myPicture} onClick={handleShow} style={{cursor:"pointer"}}/>
          </div>
          <div style={{ height: "90px", width: "90px" }}>
            <img src={myPicture2} onClick={handleShow} style={{cursor:"pointer"}}/>
          </div>
         <div className="show-image" style={{display: show ? "":"none"}}>
             <img src={source} />
         </div>
         
        </div>
      </div>
    </div>
  );
}
export default Comment;
