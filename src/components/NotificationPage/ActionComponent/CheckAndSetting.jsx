import React from "react";
import {Settings,Check} from 'lucide-react'
function CheckAndSetting(){
    return <div className="d-flex flex-row-reverse gap-3">
         <button
            type="button"
            className="btn btn-outline-secondary btn-custom btn-sm d-none d-md-inline"
            style={{ color: "black" }}
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