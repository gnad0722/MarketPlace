import React from "react";
import ActionBar from "./ActionBar";
import MyProduct from "./MyProduct";
import MyOrder from "./MyOrder";
import AboutMe from "./AboutMe";
import Setting from "./Setting";
import { useState } from "react";
function ProfileAction() {
  const [current, setCurrent] = useState("Sản phẩm của tôi");
  function handleCurrent(chosen) {
    setCurrent(chosen);
  }
  console.log(current);
  return (
    <div className="container-action">
      <ActionBar onCurrent={handleCurrent} />
      {current === "Sản phẩm của tôi" && <MyProduct />}
      {current === "Đơn hàng của tôi" && <MyOrder />}
      {current === "Giới thiệu" && <AboutMe />}
      {current === "Cài đặt" && <Setting />}
    </div>
  );
}
export default ProfileAction;
