import React from "react";
import Header from "../../component/Header";
import HeaderOrder from "./OrderForm/HeaderOrder";
import OrderForm from "./OrderForm/OrderForm"
function OrderPage(){
    return <div>
        <div className="container-order">
            <div className="container px-5 py-3 d-flex flex-column gap-4" style={{textAlign:"left"}}>
                <HeaderOrder/>
                <OrderForm/>
            </div>
        </div>
    </div>
}
export default OrderPage;