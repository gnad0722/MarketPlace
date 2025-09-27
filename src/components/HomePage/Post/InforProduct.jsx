import React from "react";
import ActionBar from "./ActionBar";
import PriceProduct from "./PriceProduct";
import Hashtag from "../../Hashtag";
function InforProduct(props) {
  const postInfo = props.postInfo;
  const product = props.postInfo.product;
  function extractWords(content, wordLimit) {
    const words = content.trim().split(/\s+/);
    const firstNWords = words.slice(0, wordLimit);
    let excerpt = firstNWords.join(" ");
    if (words.length > wordLimit) {
      excerpt += "...";
    }
    return excerpt;
  }
  return (
    <div className="info-product">
      <div className="name-seller">
        <span style={{ fontSize: "1.1rem" }}>{postInfo.title}</span>
        <span
          style={{ fontSize: "0.9rem", opacity: "0.5", marginTop: "0.3rem" }}
        >
          {extractWords(postInfo.content,20)}
        </span>
      </div>
      <div className="hashtag-product">
       {product.hashtag.map((hashtag,index)=><Hashtag hashtag={hashtag} key={index}/>)}
      </div>
      <ActionBar upVotes={postInfo.upVotes} downVotes={postInfo.downVotes} comments={postInfo.comments.length}/>
      <PriceProduct price={product.price} quantity={product.quantity} currencyCode={product.currencyCode}/>
    </div>
  );
}
export default InforProduct;
