import React from "react";
function FeedBackForm() {
  return (
    <div className="d-flex flex-column">
      <label htmlFor="InputDescription" className="form-label">
        Nhận xét của bạn
      </label>
      <textarea
        type="text"
        id="InputDescription"
        className="form-control"
        placeholder="Chia sẽ trải nghiệm của bạn về sản phẩm này...."
        style={{ borderRadius: "0.5rem" }}
        rows="5"
      ></textarea>
    </div>
  );
}
export default FeedBackForm;