import React from "react";
import Post from "../../HomePage/Post/Post";
import { getProduct } from "../../../services/productService";
import { useEffect, useState } from "react";
import ChangePage from "../../HomePage/Post/ChangePage";
function MyProduct() {
  const [listProduct, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("1");
  const [category, setCategory] = useState("");
  async function getListProduct(e) {
    try {
      const data = await getProduct({
        search,
        category,
        page,
      });
      console.log(data);
      setList(data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getListProduct();
  }, []);
  return (
    <div
      className="d-flex flex-column gap-2 align-items-start"
      style={{ marginTop: "20px" }}
    >
      <span style={{ fontWeight: "500", fontSize: "17px" }}>
        Sản phẩm của tôi
      </span>
      {listProduct.map((product, index) => (
        <Post key={index} productInfo={product} showAddToCart={false}  showAction={true}/>
      ))}
       <ChangePage page={page}/>
    </div>
  );
}
export default MyProduct;
