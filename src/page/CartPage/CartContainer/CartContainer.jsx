import React,{useState} from "react";
import CartBar from "./CartBar";
import CartItem from "./CartItem";
function CartContainer(props) {
  const items = props.items;
  const checkAll=props.checkAll;
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
            <div key={index}>
              <CartItem item={item} checked={checkAll} onSelect={props.onSelect}/>
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
          return <CartItem item={item} key={index} checked={checkAll} onSelect={props.onSelect}/>;
        }
      })}
    </div>
  );
}
export default CartContainer;
