import React from "react";
import Header from "../../component/Header";
import FilterSection from "./FilterSection/FilterSection";
import Trending from "./Trending/Trending";
import RecommendSeller from "./RecommendSeller/RecommendSeller";
import CreateProductPost from "./CreateProduct/CreateProductPost";
import Notification from "./Notification";
import AdvancedFilter from "./AdvancedFilter/AdvancedFilter";
import Post from "./Post/Post";
import ChangePage from "./Post/ChangePage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { getProduct } from "../../services/productService";
import {
  listTrending,
  listCategories,
  listRecommendSeller,
  listPosts,
} from "../dataDemo";
function HomePage() {
  const location = useLocation();
  const { show } = location.state || false;
  const [showNotifi, setShow] = useState(show);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("1");
  const [category, setCategory] = useState("");
  const [listProduct, setList] = useState([]);
  async function getListProduct() {
    try {
      const data = await getProduct({
        search,
        category,
        page,
      });
      setList(data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getListProduct();
  }, []);
  return (
    <div>
      <div className="container py-4 position-relative">
        <Notification show={show} />
        <div className="row">
          <div className="col">
            <FilterSection listCategories={listCategories} />
            <Trending listTrending={listTrending} />
          </div>
          <div className="col-6">
            <CreateProductPost />
            {listProduct.map((product, index) => (
              <Post key={index} productInfo={product} showAddToCart={true} showActionc={false}/>
            ))}
            <ChangePage page={page}/>
          </div>
          <div className="col">
            <AdvancedFilter />
            <RecommendSeller listRecommendSeller={listRecommendSeller} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
