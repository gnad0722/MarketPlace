import React from "react";
import InfoOrder from "./InfoOrder";
import InfoSeller from "./InfoSeller";
import ImgProduct from "./ImgProduct";
import ActionOrder from "./ActionOrder";
import FeedBackPopup from "../FeedBackPopup/FeedBackPopup";
import { useState } from "react";
import DetailPopup from "../DetailPopup/DetailPopup";
function OrderItem(props) {
  const orderInfo=props.order;
  const products=props.order.products;
  const [isFeedBackPopupOpen, setIsFeedBackPopupOpen] = useState(false);
  const openFeedBackPopup = () => setIsFeedBackPopupOpen(true);
  const closeFeedBackPopup = () => setIsFeedBackPopupOpen(false);

  const [isDetailPopupOpen, setIsDetailPopupOpen] = useState(false);
  const openDetailPopup = () => setIsDetailPopupOpen(true);
  const closeDetailPopup = () => setIsDetailPopupOpen(false);
  return (
    <div>
      <div className="order-container">
        <InfoOrder id={orderInfo.id} totalAmount={orderInfo.total_amount} status={orderInfo.status} created_at={orderInfo.created_at}/>
        <hr style={{ marginTop: "0", opacity: "0.1" }} />
        <div className="d-flex gap-2">
          {products.map((product,index)=>{
            return <ImgProduct key={index} src={product.image_url}/>
          })}
        </div>
        <ActionOrder onOpenFeedBack={openFeedBackPopup} onOpenDetail={openDetailPopup}/>
      </div>
      <FeedBackPopup isOpen={isFeedBackPopupOpen} onClose={closeFeedBackPopup}/>
      <DetailPopup orderInfo={orderInfo} products={products} isOpen={isDetailPopupOpen} onClose={closeDetailPopup} onOpenFeedBack={openFeedBackPopup}/>
    </div>
  );
}
export default OrderItem;
