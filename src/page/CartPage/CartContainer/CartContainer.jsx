import React from "react";
import CartBar from "./CartBar";
import CartItem from "./CartItem";
function CartContainer() {
  return (
    <div
      className="d-flex flex-column gap-3"
      style={{
        border: "1px solid rgba(11, 18, 32, 0.1)",
        borderRadius: "0.7rem",
      }}
    >
      <CartBar />
      <CartItem />
      <hr style={{margin:"5px", width:"95%",alignSelf:"center", opacity:"0.1"}}/>
      <CartItem />
      <hr style={{margin:"5px", width:"95%",alignSelf:"center", opacity:"0.1"}}/>
      <CartItem />
      <hr style={{margin:"5px", width:"95%",alignSelf:"center", opacity:"0.1"}}/>
      <CartItem />
      <hr style={{margin:"5px", width:"95%",alignSelf:"center", opacity:"0.1"}}/>
      <CartItem />
      <hr style={{margin:"5px", width:"95%",alignSelf:"center", opacity:"0.1"}}/>
      <CartItem />
    </div>
  );
}
export default CartContainer;
