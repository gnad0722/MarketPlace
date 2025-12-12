import React,{useState, useEffect} from "react";
import ProductItem from "./ProductItem";
import { ShoppingCart, Package } from "lucide-react";
import { formatPriceByCode,calculateTotal } from "../../../utils/utils";
import { getProductImageById } from "../../../services/productService";
function InfoProduct(props) {
  const products = props.products;
  const [image,setImage]=useState('');
   async function getImgProduct(id) {
        try{
          const data=await getProductImageById(id);
          data.length>0 && setImage(data[0].image_url);
        }
        catch(err){
          console.error(err);
        } 
    }
  return (
    <div className="order-info">
      <span style={{ fontWeight: "500", marginBottom: "20px" }}>
        <ShoppingCart
          color="#ff6a00"
          style={{ marginRight: "10px" }}
          size={22}
        />
        Đơn hàng của bạn
      </span>
      {products.map( (product, index) => {
        getImgProduct(product.product_id);
        return (
          <ProductItem
            id={product.product_id}
            key={index}
            nameProduct={product.name}
            quantity={product.quantity}
            onOpenFeedBack={props.onOpenFeedBack}
            onClose={props.onClose}
            price={formatPriceByCode(product.price, "VND")}
            img={image}
            showFeedback={false}
          />
        );
      })}
      <hr style={{ color: "gray", marginBottom: "5px" }}></hr>
      <div
        className="d-flex justify-content-between"
        style={{ fontSize: "15px", fontWeight: "500", opacity: "0.5" }}
      >
        <span>Tạm tính</span>
        <span>{formatPriceByCode(calculateTotal(products),"VND")}</span>
      </div>
      <hr style={{ color: "gray", marginTop: "5px" }}></hr>
      <div
        className="d-flex justify-content-between"
        style={{ fontSize: "18px", fontWeight: "500" }}
      >
        <span>Tổng cộng</span>
        <span style={{ color: "#ff6a00" }}>{formatPriceByCode(calculateTotal(products),"VND")}</span>
      </div>
      <div className="btn-create" style={{ width: "100%", marginTop: "7px" }}>
        <span style={{ fontWeight: "500" }}>
          <Package color="white" style={{ marginRight: "10px" }} />
          Đặt hàng
        </span>
      </div>
    </div>
  );
}
export default InfoProduct;
