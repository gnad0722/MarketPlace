import React from "react";
import CartBar from "./CartBar";
import CartItem from "./CartItem";
function CartContainer(props) {
  const items = props.items;
  return (
    <div
      className="d-flex flex-column gap-3"
      style={{
        border: "1px solid rgba(11, 18, 32, 0.1)",
        borderRadius: "0.7rem",
      }}
    >
      <CartBar />
      {items.map((item, index) => {
        if (index !== items.length-1){
           return (
            <div>
              <CartItem item={item} key={index} />
              <hr
                style={{
                  margin: "5px",
                  width: "95%",
                  alignSelf: "center",
                  opacity: "0.1",
                  marginLeft: "20px",
                }}
              />
            </div>
          );
        }
        else {
          return <CartItem item={item} key={index} />;
        }
      })}
    </div>
  );
}
export default CartContainer;
