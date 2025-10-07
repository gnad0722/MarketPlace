import React from "react";
import myPicture from "../../../img/iphone.webp";
function ProductItem(props){
    const nameProduct=props.nameProduct;
    const quantity=props.quantity;
    const price=props.price;
    return <div style={{
        display:"flex",
        alignItems:"center",
        gap:"10px",
        padding:"0"
    }}>
        <div className="mini-img">
            <img src={myPicture}/>
        </div>
        <div className="d-flex flex-column" style={{fontSize:"13px", fontWeight:"500",width:"70%"}}>
            <span>{nameProduct}</span>
            <span style={{opacity:"0.5"}}>Số lượng: {quantity}</span>
            <span style={{color:"#ff6a00"}}>{price}</span>
        </div>
    </div>
}
export default ProductItem;