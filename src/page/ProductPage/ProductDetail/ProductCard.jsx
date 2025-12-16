import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hashtag from "../../../component/Hashtag";
import { formatPriceByCode } from "../../../utils/utils";
import { Minus, Plus, ShoppingCart, Truck, Shield } from "lucide-react";
import { addItemToCart,getCartItems } from "../../../services/cartService";
function ProductCard(props) {
  const navigate=useNavigate();
  const product=props.product;
  const id=product.id
  const title = product.name;
  const sold = product.sold;
  const quantity = product.stock;
  const price = product.price;
  const currencyCode = props.currencyCode;
  const [count, setCount] = useState(1);
  function handleCount(action) {
    if (action === "plus") {
      if (count < quantity) {
        setCount(count + 1);
      }
    } else { // action === "minus"
      if (count > 1) {
        setCount(count - 1);
      }
    }
  }
  async function handleCart() {
    if (count > quantity) {
      alert(`Số lượng sản phẩm không đủ. Chỉ còn ${quantity} sản phẩm.`);
      return;
    }
    try {
      const data = await getCartItems();
      if (data.items.length > 0) {
        const items = data.items;
        if (!(items.some(item => item.product_id === id))) await addItemToCart(id, count);
      }
      else {
        await addItemToCart(id, count);
      }
    }
    catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="product-card">
      <h5>{title}</h5>
      <span
        style={{
          fontSize: "2rem",
          color: "#ff6a00",
          fontWeight: "500",
          marginTop: "10px",
        }}
      >
        {formatPriceByCode(price, currencyCode)}
      </span>
      <div className="hashtag-product">
        <Hashtag hashtag={`Còn ${quantity} sản phẩm`} />
      </div>
      <div className="product-count">
        <span style={{ fontWeight: "500" }}>Số lượng:</span>
        <button
          type="button"
          className="btn btn-outline-secondary btn-custom btn-sm ms-3 "
          style={{ color: "black" }}
          onClick={() => handleCount("minus")}
          disabled={count <= 1}
        >
          <Minus className="icon-btn-size" />
        </button>
        <div className="number">{count}</div>
        <button
          type="button"
          className="btn btn-outline-secondary btn-custom btn-sm ms-3 "
          style={{ color: "black", marginLeft: "10px" }}
          onClick={() => handleCount("plus")}
          disabled={count >= quantity}
        >
          <Plus className="icon-btn-size" />
        </button>
      </div>
      <div className="action-buy">
        <div className="btn-create" style={{ width: "100%" }} onClick={async () => {
          await handleCart();
          navigate("/cart", {
            state: {
              idFromProductPage: [id]
            }
          })
        }}>
          <span style={{ fontWeight: "490" }}>Mua ngay</span>
        </div>
        <div className="btn-add-cart" onClick={handleCart}>
          <span style={{ fontWeight: "490" }}>
            <ShoppingCart className="icon-btn-size" /> Thêm vào giỏ hàng
          </span>
        </div>
      </div>
      <hr style={{ color: "gray" }}></hr>
      <div className="service-gurantees">
        <span>
          <Truck size={15} style={{ marginRight: "10px" }} color="#ff6a00" />
          Miễn phí giao hàng toàn quốc
        </span>
        <span>
          <Shield size={15} style={{ marginRight: "10px" }} color="#ff6a00" />
          Bảo hành 12 tháng chính hãng
        </span>
        <span style={{ opacity: "0.5" }}>
          Đổi trả trong 7 ngày nếu có lỗi từ nhà sản xuất
        </span>
      </div>
    </div>
  );
}
export default ProductCard;
