import React from "react";
import Header from "../../component/Header";
import CartHeader from "./CartHeader/CartHeader";
import CartContainer from "./CartContainer/CartContainer";
import FooterCart from "./FooterCart/FooterCart";
function CartPage() {
  return (
    <div>
      <Header />
      <div
        className="container px-5 py-3 d-flex flex-column gap-4"
        style={{ width: "1000px" }}
      >
        <CartHeader />
        <CartContainer />
      </div>
      <div class="footer-spacer"></div>
      <FooterCart />
    </div>
  );
}
export default CartPage;
