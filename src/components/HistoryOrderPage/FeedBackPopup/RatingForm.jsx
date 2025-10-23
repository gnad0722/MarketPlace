import React from "react";
import { Star } from "lucide-react";
import { useState } from "react";
function RatingForm() {
  const [rating, setRating] = useState(0);
  function handleClick(index) {
    if (index === rating) {
      setRating(0);
    } else {
      setRating(index);
    }
  }
  return (
    <div className="d-flex flex-column gap-2">
      <span style={{ fontWeight: "500" }}>Đánh giá của bạn</span>
      <div className="d-flex gap-3">
        {[1, 2, 3, 4, 5].map((index) => (
          <Star
            key={index}
            size={30}
            color={index <= rating ? "#ff6600" : "gray"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleClick(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
export default RatingForm;
