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
import { sortByPrice, sortByCriteria } from "../../utils/utils";
function HomePage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { show } = location.state || false;
  const { message } = location.state || "";
  const { color } = location.state || "#ff9013";
  const [showNotifi, setShow] = useState(show);
  const closeNotifi = () => setShow(false);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [page, setPage] = useState(1);
  const [filter,setFilter] =useState({
    category:"Tất cả",
    sortBy:"Mới nhất"
  })
  const [advanFilter,setFilterAdvanced]=useState({
    rating_min: 0,
    price_min: 0,
    price_max: Infinity,
    keyword:[],
    sortByPrice: "Giá: Thấp đến cao"
  })
  function handleFilter(filtBy={}){
    setFilter(prev=>({
      ...prev,
      ...filtBy
    }))
  }
  function handleAdvFilter(filtBy={}){
    setFilterAdvanced(prev=>({
      ...prev,
      ...filtBy
    }))
  }
  const [listProduct, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getListProduct() {
    try {
      const data = await getProduct({
        search: search + advanFilter.keyword.length>0 ? ` ${advanFilter.keyword.join()}` : "" ,
        category: filter.category==="Tất cả" ? "" :filter.category,
        rating_min: advanFilter.rating_min,
        price_min: advanFilter.price_min,
        price_max: advanFilter.price_max,
        page: page,
      });
      let list=data;
      list=sortByPrice(list,advanFilter.sortByPrice);
      list=sortByCriteria(list,filter.sortBy);
      setList(list);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getListProduct();
  }, [filter,advanFilter, page]);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <div className="container py-4 position-relative">
        {showNotifi && (
          <Notification message={message} color={color} onClose={closeNotifi} />
        )}
        <div className="row">
          <div className="col">
            <FilterSection filter={filter} onFilter={handleFilter} listCategories={listCategories} />
          </div>
          <div className="col-6">
            <CreateProductPost />
            {listProduct.map((product, index) => (
              <Post
                key={index}
                productInfo={product}
                showAddToCart={true}
                showActionc={false}
              />
            ))}
            <ChangePage page={page} onChange={setPage}/>
          </div>
          <div className="col">
            <AdvancedFilter filter={advanFilter} onFilter={handleAdvFilter}/>
            <RecommendSeller />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
