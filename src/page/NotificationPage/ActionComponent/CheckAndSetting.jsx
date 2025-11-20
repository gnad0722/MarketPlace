import React from "react";
import {Settings,Check} from 'lucide-react';
import { useNavigate } from "react-router-dom";
function CheckAndSetting(){
  const navigate=useNavigate();
    return <div className="d-flex flex-row-reverse gap-3">
         <button
            type="button"
            className="btn btn-outline-secondary btn-custom btn-sm d-none d-md-inline"
            style={{ color: "black" }}
            onClick={()=>{
              navigate("/profile")
            }}
          >
            <Settings size={15} style={{marginRight:"10px",marginBottom:"3px"}}/> <span style={{fontSize:"13.5px"}}>Cài đặt thông báo</span>
          </button>
             <button
            type="button"
            className="btn btn-outline-secondary btn-custom btn-sm d-none d-md-inline"
            style={{ color: "black" }}
          >
            <Check size={15} style={{marginRight:"10px",marginBottom:"3px"}}/> <span style={{fontSize:"13.5px"}}>Đánh dấu tất cả là đã đọc</span>
          </button>
    </div>
}
export default CheckAndSetting;