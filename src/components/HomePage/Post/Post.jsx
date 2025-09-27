import React from "react";
import HeaderPost from "./HeaderPost";
import myPicture from "../../../img/iphone.webp";
import InforProduct from "./InforProduct";
function Post(props) {
  const headerInfo={
    author:props.postInfo.author,
    createAt:props.postInfo.createAt,
    updateAt:props.postInfo.updateAt,
  }
  const postInfo={
    product:props.postInfo.product,
    title:props.postInfo.title,
    content:props.postInfo.content,
    imageURL:props.postInfo.imageURL,
    upVotes:props.postInfo.upVotes,
    downVotes:props.postInfo.downVotes,
    comments:props.postInfo.comments,
  };
  return (
    <div className="post-container">
     <HeaderPost headerInfo={headerInfo}/>
     <img src={myPicture} />
     <InforProduct postInfo={postInfo}/>
    </div>
  );
}
export default Post;
