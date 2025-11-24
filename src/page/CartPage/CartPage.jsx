import React, {useEffect, useState} from "react";
import Header from "../../component/Header";
import CartHeader from "./CartHeader/CartHeader";
import CartContainer from "./CartContainer/CartContainer";
import FooterCart from "./FooterCart/FooterCart";
import { getCartItems } from "../../services/cartService";
function CartPage() {
  const [cart,setCart] =useState({});
  const [items,setList]=useState([])
  async function getCart() {
    try{
      const data= await getCartItems();
      setCart(data);
      setList(data.items);
    }
    catch(err){
      console.error(err);
    }
  }
  useEffect(()=>{
    getCart()
  },[])
  return (
    <div>
      <div
        className="container px-5 py-3 d-flex flex-column gap-4"
        style={{ width: "1000px" }}
      >
        <CartHeader />
        <CartContainer items={items}/>
      </div>
      <div class="footer-spacer"></div>
      <FooterCart />
    </div>
  );
}
export default CartPage;
