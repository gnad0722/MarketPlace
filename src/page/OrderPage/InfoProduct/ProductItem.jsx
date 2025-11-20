import React, { use } from "react";
import myPicture from "../../../img/iphone.webp";
import { useNavigate } from "react-router-dom";
function ProductItem(props){
    const navigate=useNavigate();
    const nameProduct=props.nameProduct;
    const quantity=props.quantity;
    const price=props.price;
    return <div style={{
        display:"flex",
        alignItems:"center",
        gap:"10px",
        padding:"0",
        cursor:"pointer"
    }}
    onClick={()=>{
        navigate("/detail")
    }}
    >
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