import React from "react";
import { Package, Upload } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectBox from "../../HomePage/FilterSection/SelectBox";
import OptionList from "../../HomePage/FilterSection/OptionList";
import ImageForm from "./ImageForm";
import { createProduct } from "../../../services/productService";
import { de } from "date-fns/locale";
function UploadForm() {
  const navigate = useNavigate();
  const listOption = [
    "Điện thoại",
    "Đồ điện tử",
    "Laptop",
    "Thời trang",
    "Máy tính bảng",
    "Phụ kiện",
    "Đồng hồ",
    "Giày dép",
    "Túi xách",
    "Mỹ phẩm",
    "Sức khỏe",
    "Thể thao",
    "Nội thất",
  ];
  const [message, setMessage] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    category: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState("Danh mục");
  const [nameProduct, setName] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  function handleOptionSelect(option) {
    setOption(option);
    if (option !== "Danh mục") setCategory(option);
    setIsOpen(!isOpen);
  }
  async function handleCreate(e) {
    e.preventDefault();
    const msg = {};
    try {
      const data = await createProduct(
        nameProduct,
        description,
        price,
        stock,
        category
      );
      navigate("/home", {
        state: {
          show: true,
          message: "Sản phẩm của bạn đã được đăng bán thành công!",
          color: "#ff9013"
        },
      });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        const listError = err.response.data.errors;
        listError.forEach((error) => {
          msg[error.param] = error.msg;
        });
      }
    }
    setMessage(msg);
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
              value={nameProduct}
              onChange={(e) => setName(e.target.value)}
            />
            <span style={{ color: "red" }}>{message.name}</span>
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <span style={{ color: "red" }}>{message.price}</span>
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
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
            <span style={{ color: "red" }}>{message.stock}</span>
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
              value={description}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <span style={{ color: "red" }}>{message.description}</span>
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
              <span style={{ color: "red" }}>{message.category}</span>
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
            <div
              className="btn-create"
              style={{ marginLeft: "15px" }}
              onClick={handleCreate}
            >
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
