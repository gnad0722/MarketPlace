import React from "react";
import OrderItem from "./OrderIItem";
function OrderContainer(){
    return <div className="d-flex flex-column gap-2">
            <OrderItem/>
             <OrderItem/>
    </div>
}
export default OrderContainer