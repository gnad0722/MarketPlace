import React from "react";
import { useNavigate } from "react-router-dom";
function ActionOrder(props){
    const navigate=useNavigate();
    return <div className="d-flex gap-3" style={{margin:"10px 0px"}}>
         <button
            type="button"
            className="btn btn-outline-secondary btn-custom btn-sm d-none d-md-inline"
            style={{ color: "black" }}
            onClick={props.onOpenDetail}
          >
            Xem chi tiết
          </button>
           <button
            type="button"
            className="btn btn-outline-secondary btn-custom btn-sm d-none d-md-inline"
            style={{ color: "black" }}
            onClick={()=>{
                navigate("/order")
            }}
          >
            Mua lại
          </button>
    </div>
}
export default ActionOrder;