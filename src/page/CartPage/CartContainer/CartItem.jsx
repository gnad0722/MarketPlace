import React from "react";
import myPicture from "../../../img/iphone.webp";
import { Minus, Plus, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateItemQuantity, removeItem } from "../../../services/cartService";
import { getProductImageById } from "../../../services/productService";
import { API_BASE } from "../../../api/axiosClient";
import { formatPriceByCode } from "../../../utils/utils";
function CartItem(props) {
  const item = props.item;
  const checkAll = props.checked;
  const id = item.product_id;
  const name = item.name;
  const price = Number(item.price);
  const navigate = useNavigate();
  const [count, setCount] = useState(item.quantity);
  const [total, setTotal] = useState(item.subtotal);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [checked,setChecked]=useState(checkAll);
  function handleCheck(e){
    const isChecked=e.target.checked;
    props.onSelect(id,isChecked);
    setChecked(isChecked);
  }
  function handleCount(action) {
    setCount(action === "plus" ? count + 1 : count - 1);
    setTotal(action === "plus" ? price * (count + 1) : price * (count - 1));
  }
  useEffect(() => {
    updateItemQuantity(item.product_id, count);
  }, [count]);
  async function getImgProduct(id) {
    try {
      const data = await getProductImageById(id);
      data.length > 0 && setImage(data[0].image_url);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  async function removeItemCart() {
    navigate(0);
    try {
      const data = removeItem(item.product_id);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getImgProduct(item.product_id);
  }, []);
  useEffect(()=>{
    setChecked(checkAll)
  },[checkAll])
  if (loading) return <div>Loading...</div>;
  return (
    <div className="cart-bar" style={{ padding: "20px 20px", gap: "7px" }}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={id}
          checked={checked}
          id={`check-${id}`}
          onChange={handleCheck}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "0",
          width: "40%",
          height: "auto",
          marginRight: "80px",
        }}
      >
        <div className="mini-img">
          <img src={`${API_BASE}${image}`} />
        </div>
        <div
          style={{
            textAlign: "left",
            alignSelf: "flex-start",
            fontSize: "15px",
            width: "100%",
          }}
        >
          <span>{name}</span>
        </div>
      </div>
      <div
        className="d-flex "
        style={{
          marginLeft: "auto",
          gap: "0px",
          alignItems: "center",
          textAlign: "center",
          fontSize: "15px",
          width: "60%",
          fontWeight: "500",
        }}
      >
        <span style={{ width: "25%", color: "#ff6a00" }}>
          {formatPriceByCode(price, "VND")}
        </span>
        <div style={{ width: "25%" }}>
          <div className="product-count">
            <button
              type="button"
              className="btn btn-outline-secondary btn-custom btn-sm ms-3 "
              style={{ color: "black", marginRight: "5px" }}
              onClick={() => {
                if (count > 1) handleCount("minus");
              }}
            >
              <Minus size={10} />
            </button>
            <div
              className="number"
              style={{ margin: "0px", padding: "4px 10px" }}
            >
              {count}
            </div>
            <button
              type="button"
              className="btn btn-outline-secondary btn-custom btn-sm "
              style={{ color: "black", marginLeft: "5px" }}
              onClick={() => handleCount("plus")}
            >
              <Plus size={10} />
            </button>
          </div>
        </div>
        <span style={{ width: "25%", color: "#ff6a00" }}>
          {formatPriceByCode(total, "VND")}
        </span>
        <div
          className="btn-create"
          onClick={() => {
            navigate("/order", {
              state: {
                listItem: [item],
              },
            });
          }}
        >
          <span style={{ fontWeight: "500" }}>Mua ngay</span>
        </div>
        <div
          style={{
            top: "5px",
            right: "10px",
            zIndex: "10",
            position: "absolute",
            cursor: "pointer",
          }}
          onClick={removeItemCart}
        >
          <X size={15} />
        </div>
      </div>
    </div>
  );
}
export default CartItem;
