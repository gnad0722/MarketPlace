import React from "react";
import PriceProduct from "./PriceProduct";
import Hashtag from "../../Hashtag";
import { extractWords } from "../../utils";
function InforProduct(props) {
  const postInfo = props.postInfo;
  const product = props.postInfo.product;
  return (
    <div className="info-product">
      <div className="name-seller">
        <span style={{ fontSize: "1.1rem" }}>{postInfo.title}</span>
        <span
          style={{ fontSize: "0.9rem", opacity: "0.5", marginTop: "0.3rem" }}
        >
          {extractWords(postInfo.content,15)}
        </span>
      </div>
      <div className="hashtag-product">
       {product.hashtag.map((hashtag,index)=><Hashtag hashtag={hashtag} key={index}/>)}
      </div>
      <PriceProduct price={product.price} quantity={product.quantity} currencyCode={product.currencyCode} showAddToCart={props.showAddToCart}/>
    </div>
  );
}
export default InforProduct;
