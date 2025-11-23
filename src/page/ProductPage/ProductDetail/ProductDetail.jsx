import React from "react";
import ProductCard from "./ProductCard";
import SellerCard from "./SellerCard";
import DescriptionProduct from "./DescriptionProduct";
import ImageProduct from "./ImageProduct";
import Feedback from "../Feedback/Feedback";
function ProductDetail(props) {
  const product=props.product;
  const infoSellerDemo={
    name: "Demo",
    avatar: "",
    ratingAvg: 3,
    follower: 1000
  }
  const infoSeller=product.infoSeller || infoSellerDemo;
  const hashtag=product.hashtag || ["Demo", "Demo"];
  return (
    <div className="row mt-3 ">
      <div className="col-8 gap-4 d-flex flex-column">
        <ImageProduct />
        <DescriptionProduct content={product.description} hashtag={hashtag} />
      </div>
      <div className="col-4 ">
        <div className="position-sticky" style={{ top: "80px" }}>
          <div className="d-flex flex-column gap-4">
            <ProductCard id={product.id} title={product.name} quantity={product.stock}  sold={0} price={product.price} currencyCode={"VND"}/>
            <SellerCard infoSeller={infoSeller}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
