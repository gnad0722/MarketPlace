import React from "react";
import Header from "../Header";
import HistoryOrderHeader from "./HeaderPage/HistoryOrderHeader";
import OrderContainer from "./OrderContainer/OrderContainer";
function HistoryOrderPage(){
    return <div>
         <Header />
         <div className="container px-5 py-3 d-flex flex-column gap-4" style={{width:"1000px"}}>
          <HistoryOrderHeader/>
          <OrderContainer/>
      </div>
    </div>
}
export default HistoryOrderPage;