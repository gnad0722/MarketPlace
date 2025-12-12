import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import CartHeader from "./CartHeader/CartHeader";
import CartContainer from "./CartContainer/CartContainer";
import FooterCart from "./FooterCart/FooterCart";
import { getCartItems } from "../../services/cartService";
import { getInfoCheckout } from "../../utils/utils";
function CartPage(props) {
  const [cart, setCart] = useState({});
  const [items, setList] = useState([]);
  const [listSelected, setListSelected] = useState([]);
  const [checkAll, setAll] = useState(false);
  function handleSelect(id, checked) {
    if (checked) {
      setListSelected((prev) => [...prev, id]);
    } else {
      setListSelected((prev) => prev.filter((item) => item != id));
    }
  }
   function handleCheckAll(checked) {
    if (checked) {
      setAll(true);
      setListSelected(items.map(item=>item.product_id));
    } else {
       setAll(false);
      setListSelected([]);
    }
  }
  async function getCart() {
    try {
      const data = await getCartItems();
      setCart(data);
      setList(data.items);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      <div
        className="container px-5 py-3 d-flex flex-column gap-4"
        style={{ width: "1000px" }}
      >
        <CartHeader />
        <CartContainer items={items} onSelect={handleSelect} checkAll={checkAll}/>
      </div>
      <div class="footer-spacer"></div>
      <FooterCart
        items={items}
        listSelected={listSelected}
        infoCheckout={getInfoCheckout(items, listSelected)}
        onCheckAll={handleCheckAll}
        checkAll={checkAll}
      />
    </div>
  );
}
export default CartPage;
