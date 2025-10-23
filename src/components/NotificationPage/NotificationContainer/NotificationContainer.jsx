import React from "react";
import NotificationItemUser from "./NotificationItemUser";
import NotificationItemProduct from "./NotificationItemProduct";
import NotificationItemSystem from "./NotificationItemSystem";
function NotificationContainer(){
    return <div className="d-flex flex-column gap-2" style={{textAlign:"left"}}>
        <span style={{fontSize:"15px", fontWeight:"500",opacity:"0.5"}}>Hôm nay</span>
        <div className="notification-container">
            <NotificationItemUser/>
            <NotificationItemProduct/>
            <NotificationItemSystem/>
        </div>
          <span style={{fontSize:"15px", fontWeight:"500",opacity:"0.5"}}>Hôm nay</span>
        <div className="notification-container">
            <NotificationItemUser/>
            <NotificationItemProduct/>
            <NotificationItemSystem/>
        </div>
    </div>
}
export default NotificationContainer;