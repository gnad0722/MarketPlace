import React from "react";
import HeaderFeedback from "./HeaderFeedback";
import RatingInfo from "./RatingInfo";
import Comment from "./Comment";
function Feedback() {
  const rateList = [
    {
      number: 5,
      rate: 5000,
    },
    {
      number: 4,
      rate: 4000,
    },
    {
      number: 3,
      rate: 3000,
    },
    {
      number: 2,
      rate: 4000,
    },
    {
      number: 1,
      rate: 1000,
    },
  ];
  const commentList = [
    {
      author: "Nguyễn Văn A",
      createAt: "2025-09-27T09:40:12.345+07:00",
      content: "Sản phẩm chất lượng, giao hàng nhanh. Recommend!",
      rating: 5,
      avatar: "",
    },
    {
      author: "Nguyễn Văn B",
      createAt: "2025-09-27T09:40:12.345+07:00",
      content: "Sản phẩm chất lượng, giao hàng nhanh. Recommend!",
      rating: 4,
      avatar: "",
    },
    {
      author: "Nguyễn Văn C",
      createAt: "2025-09-27T09:40:12.345+07:00",
      content: "Sản phẩm chất lượng, giao hàng nhanh. Recommend!",
      rating: 3,
      avatar: "",
    },
    {
      author: "Nguyễn Văn D",
      createAt: "2025-09-27T09:40:12.345+07:00",
      content: "Sản phẩm chất lượng, giao hàng nhanh. Recommend!",
      rating: 5,
      avatar: "",
    },
  ];
  return (
    <div className="feedback-container">
      <HeaderFeedback />
      <RatingInfo rateList={rateList} />
      {commentList.map((comment, index) => {
        return (
          <>
            <Comment
              rating={comment.rating}
              author={comment.author}
              createAt={comment.createAt}
              avatar={comment.avatar}
              content={comment.content}
            />
            <hr style={{ alignSelf: "center", width: "95%", color: "gray" }} />
          </>
        );
      })}
    </div>
  );
}
export default Feedback;
