import React from "react";
import InfoOrder from "./InfoOrder";
import InfoSeller from "./InfoSeller";
import ImgProduct from "./ImgProduct";
import ActionOrder from "./ActionOrder";
import FeedBackPopup from "../FeedBackPopup/FeedBackPopup";
import { useState } from "react";
import DetailPopup from "../DetailPopup/DetailPopup";
function OrderItem() {
  const [isFeedBackPopupOpen, setIsFeedBackPopupOpen] = useState(false);
  const openFeedBackPopup = () => setIsFeedBackPopupOpen(true);
  const closeFeedBackPopup = () => setIsFeedBackPopupOpen(false);

  const [isDetailPopupOpen, setIsDetailPopupOpen] = useState(false);
  const openDetailPopup = () => setIsDetailPopupOpen(true);
  const closeDetailPopup = () => setIsDetailPopupOpen(false);
  return (
    <div>
      <div className="order-container">
        <InfoOrder />
        <InfoSeller />
        <hr style={{ marginTop: "0", opacity: "0.1" }} />
        <div className="d-flex gap-2">
          <ImgProduct />
          <ImgProduct />
        </div>
        <ActionOrder onOpenFeedBack={openFeedBackPopup} onOpenDetail={openDetailPopup}/>
      </div>
      <FeedBackPopup isOpen={isFeedBackPopupOpen} onClose={closeFeedBackPopup}/>
      <DetailPopup isOpen={isDetailPopupOpen} onClose={closeDetailPopup}/>
    </div>
  );
}
export default OrderItem;
