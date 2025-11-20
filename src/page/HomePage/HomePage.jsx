import React from "react";
import Header from "../../component/Header";
import FilterSection from "./FilterSection/FilterSection";
import Trending from "./Trending/Trending";
import RecommendSeller from "./RecommendSeller/RecommendSeller";
import CreateProductPost from "./CreateProduct/CreateProductPost";
import Notification from "./Notification";
import AdvancedFilter from "./AdvancedFilter/AdvancedFilter";
import Post from "./Post/Post";
import {
  listTrending,
  listCategories,
  listRecommendSeller,
  listPosts,
} from "../dataDemo";
function HomePage() {
  return (
    <div >
      <Header pageName="Home" />
      <div className="container py-4 position-relative">
        {/* <Notification /> */}
        <div className="row">
          <div className="col">
            <FilterSection listCategories={listCategories} />
            <Trending listTrending={listTrending} />
          </div>
          <div className="col-6">
            <CreateProductPost />
            {listPosts.map((post, index) => (
              <Post key={index} postInfo={post} showAddToCart={true}/>
            ))}
          </div>
          <div className="col">
            <AdvancedFilter/>
            <RecommendSeller listRecommendSeller={listRecommendSeller} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
