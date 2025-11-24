import React from "react";
import HeaderPost from "./HeaderPost";
import { useNavigate } from "react-router-dom";
import myPicture from "../../../img/iphone.webp";
import InforProduct from "./InforProduct";
function Post(props) {

  const navigate=useNavigate();
  const product=props.productInfo;
  const headerInfo={
    author:{
      name: product.sellerName || "Test",
      avatar: product.avatarSeller || "",
    },
    createAt:product.created_at || "",
    updateAt:product.updated_at || "",
  }
  return (
    <div className="post-container" >
     <HeaderPost idProduct={product.id} headerInfo={headerInfo} showAction={props.showAction}/>
     <img src={myPicture} onClick={()=>{
      navigate("/detail",{state:{
        id: product.id
      }})
    }}/>
     <InforProduct productInfo={product} showAddToCart={props.showAddToCart}/>
    </div>
  );
}
export default Post;
