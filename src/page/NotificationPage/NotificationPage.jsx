import React from "react";
import Header from "../../component/Header";
import NotificationHeader from "./HeaderPage/NotificationHeader";
import ActionComponent from "./ActionComponent/ActionComponent";
import NotificationContainer from "./NotificationContainer/NotificationContainer";
function NotificationPage() {
  return (
    <div>
      <Header />
      <div className="container px-5 py-3 d-flex flex-column gap-4" style={{width:"1000px"}}>
            <NotificationHeader/>
            <ActionComponent/>
            <NotificationContainer/>
      </div>
    </div>
  );
}
export default NotificationPage;
