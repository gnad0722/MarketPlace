import React from "react";
import Header from "../../component/Header";
import FilterSection from "./FilterSection/FilterSection";
import Trending from "./Trending/Trending";
import RecommendSeller from "./RecommendSeller/RecommendSeller";
import CreateProductPost from "./CreateProduct/CreateProductPost";
import Notification from "../../component/Notification";
import AdvancedFilter from "./AdvancedFilter/AdvancedFilter";
import Post from "./Post/Post";
import ChangePage from "./Post/ChangePage";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { getProduct } from "../../services/productService";
import { listCategories } from "../dataDemo";
import {  sortProductsByCriteria } from "../../utils/utils";
function HomePage() {
  const userId = JSON.parse(sessionStorage.getItem("userId"));
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { show } = location.state || false;
  const { message } = location.state || "";
  const { color } = location.state || "#ff9013";
  const [showNotifi, setShow] = useState(show);
  const closeNotifi = () => setShow(false);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    category: "Tất cả",
    sortBy: "Mới nhất",
  });
  const [sortState, setOrder] = useState({
    price: "Giá: Thấp đến cao",
    type: "Mới nhất",
  });
  const [advanFilter, setFilterAdvanced] = useState({
    rating_min: 0,
    price_min: 0,
    price_max: Infinity,
    keyword: [],
    sortByPrice: "Giá: Thấp đến cao",
  });
  function handleFilter(filtBy = {}) {
    setFilter((prev) => ({
      ...prev,
      ...filtBy,
    }));
  }
  function handleAdvFilter(filtBy = {}) {
    setFilterAdvanced((prev) => ({
      ...prev,
      ...filtBy,
    }));
  }
  const [listProduct, setList] = useState([]);
  const [listCategories, setListCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getListProduct() {
    try {
      console.log("category: ", filter.category === "Tất cả" ? "" : filter.category);
      const data = await getProduct({
        search:
          search +
          (advanFilter.keyword.length > 0
            ? ` ${advanFilter.keyword.join()}`
            : ""),
        category: filter.category === "Tất cả" ? "" : filter.category,
        rating_min: advanFilter.rating_min,
        price_min: advanFilter.price_min,
        price_max: advanFilter.price_max,
        page: page,
      });
      console.log("products: ", data);
      const list = applySort(data, "Mới nhất);
      setList(list);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    setLoading(true);
    Promise.all([getListProduct(), getCategories()])
      .then(([_, categories]) => {
        console.log(categories)
        // categories is already a map: { "Category Name": count, ... }
        // We need to extract the category names (keys) for setListCategories
        const categoryNames = Object.keys(categories);
        console.log(["Tất cả", ...categoryNames]);
        setListCategories(["Tất cả", ...categoryNames]);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [filter.category, advanFilter.keyword, advanFilter.rating_min, advanFilter.price_min, advanFilter.price_max, page]);

  useEffect(() => {
    setList(applySort(listProduct, sortState));
  }, [filter.sortBy, advanFilter.sortByPrice]);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <div className="container py-4 position-relative">
        {showNotifi && (
          <Notification message={message} color={color} onClose={closeNotifi} />
        )}
        <div className="row">
          <div className="col">
            <FilterSection
              filter={filter}
              onFilter={handleFilter}
              listCategories={listCategories}
              onSort={setOrder}
            />
          </div>
          <div className="col-6">
            <CreateProductPost />
            {listProduct.map((product, index) => (
              <Post
                key={index}
                productInfo={product}
                showAddToCart={userId !== product.seller_id}
                showAction={false}
              />
            ))}
            <ChangePage page={page} onChange={setPage} />
          </div>
          <div className="col">
            <AdvancedFilter onSort={setOrder} filter={advanFilter} onFilter={handleAdvFilter} />
            <RecommendSeller />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
