import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import BreadcrumnNavigation from "./BreadcrumbNavigation/BreadcrumbNavigation";
import ProductDetail from "./ProductDetail/ProductDetail";
import Feedback from "./Feedback/Feedback";
import { useLocation } from "react-router-dom";
import { getProductById } from "../../services/productService";
function ProductPage() {
  const {state}=useLocation();
  const id=state.id;
  const [product,setProduct]=useState({})
  async function getProduct(id) {
     try {
          const data = await getProductById(id);
          console.log(data);
          setProduct(data);
        } catch (err) {
          console.error(err);
        }
  }
  useEffect(()=>{
    getProduct(id)
  },[]);
  return (
    <div>
      <Header />
      <div className="container py-3 px-5">
        <div className="cotainer-product-page">
            <BreadcrumnNavigation title={product.name}/>
            <ProductDetail product={product}/>
            <Feedback/>
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
