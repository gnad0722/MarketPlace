import React from "react";
import { Check, X } from "lucide-react";
import { useState } from "react";
function Notification(){
    const [show,setShow]=useState(true)
    return <div className="notifi-container" style={{display:show?"flex":"none"}}>
        <span>
           <Check style={{marginRight:"10px"}}/> Sản phẩm của bạn đã được đăng bán thành công
        </span>
        <div style={{marginLeft:"auto",marginRight:"40px",cursor:"pointer"}} onClick={()=>{
            setShow(false)
        }}>
            <X/>
        </div>
    </div>
}
export default Notification;