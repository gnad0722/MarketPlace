import React from "react";
import { Package, Upload } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectBox from "../../HomePage/FilterSection/SelectBox";
import OptionList from "../../HomePage/FilterSection/OptionList";
import ImageForm from "./ImageForm";
function UploadForm() {
  const navigate=useNavigate();
  const listOption = ["Điện thoại", "Đồ điện tử", "Laptop", "Thời trang"];
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState("Danh mục");
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  function handleOptionSelect(option) {
    setOption(option);
    setIsOpen(!isOpen);
  }
  return (
    <div className="order-info">
      <span style={{ fontWeight: "500" }}>
        <Package color="#ff6a00" style={{ marginRight: "5px" }} />
        Thông tin sản phẩm
      </span>
      <span style={{ opacity: "0.5", marginLeft: "5px" }}>
        Nhập thông tin sản phẩm của bạn
      </span>
      <form>
        <div className="row mt-3">
          <div className="col-12">
            <label htmlFor="InputNameProduct" className="form-label">
              Tên sản phẩm*
            </label>
            <input
              type="text"
              id="InputNameProduct"
              className="form-control"
              placeholder="Ví dụ: Iphone 15 Pro Max 256GB"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
          <div className="col-6 mt-3">
            <label htmlFor="InputPrice" className="form-label">
              Giá sản phẩm*
            </label>
            <input
              type="text"
              id="InputPrice"
              className="form-control"
              placeholder="Nhập giá sản phẩm"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
          <div className="col-6 mt-3">
            <label htmlFor="InputQuantity" className="form-label">
              Số lượng*
            </label>
            <input
              type="text"
              id="InputQuantity"
              className="form-control"
              placeholder="Nhập số lượng"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
          <div className="col-12 mt-3">
            <label htmlFor="InputDescription" className="form-label">
              Mô tả*
            </label>
            <textarea
              type="text"
              id="InputDescription"
              className="form-control"
              placeholder="Mô tả chi tiết về sản phẩm tình trạng, đặc điểm,...."
              style={{ borderRadius: "0.5rem" }}
              rows="5"
            ></textarea>
          </div>
          <div className="col-12">
            <div className="selector-container">
              <label
                style={{
                  fontWeight: "500",
                  marginLeft: "5px",
                  marginBottom: "8px",
                }}
              >
                Danh mục*
              </label>
              <SelectBox
                onToggle={toggleDropdown}
                isOpen={isOpen}
                option={option}
              />
              {isOpen && (
                <OptionList
                  option={option}
                  onSelect={handleOptionSelect}
                  listOption={listOption}
                />
              )}
            </div>
          </div>
          <div className="col-12">
            <label
              style={{
                fontWeight: "500",
                marginLeft: "5px",
                marginBottom: "8px",
              }}
            >
              Hình ảnh sản phẩm*
            </label>
            <ImageForm />
          </div>
          <div className="col-12  mt-3 d-flex flex-row-reverse">
          
            <div className="btn-create" style={{marginLeft:"15px"}}>
              <span style={{ fontWeight: "500" }}>
                <Upload
                  color="white"
                  size={20}
                  style={{ marginRight: "5px", paddingBottom: "3px" }}
                />
                Đăng sản phẩm
              </span>
            </div>
              <button
              type="button"
              className="btn btn-outline-secondary btn-custom btn-sm"
              style={{
                color: "black",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                display: "flex",
                padding: "5px 15px",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
              onClick={() => {
                navigate("/home");
              }}
            >
              Hủy
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default UploadForm;
