import React from "react";
import Payment from "./Payment";
import OrderInfo from "./OrderInfo"
import InfoProduct from "../InfoProduct/InfoProducts";
function OrderForm() {
  return (
    <div className="row">
      <div className="col-8 d-flex flex-column gap-4">
        <OrderInfo/>
        <Payment/>
      </div>
      <div className="col-4">
        <InfoProduct/>
      </div>
    </div>
  );
}
export default OrderForm;
