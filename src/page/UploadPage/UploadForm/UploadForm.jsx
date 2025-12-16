import React from "react";
import { Package, Upload } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectBox from "../../HomePage/FilterSection/SelectBox";
import OptionList from "../../HomePage/FilterSection/OptionList";
import ImageForm from "./ImageForm";
import { createProduct, getCategories } from "../../../services/productService";
import { makeHashtag } from "../../../utils/utils";

function UploadForm() {
  const navigate = useNavigate();
  const [listOption, setListOption] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoriesMap = await getCategories();
        // Sort category names based on their index from the map
        const sortedCategoryNames = Object.keys(categoriesMap).sort(
          (a, b) => categoriesMap[a] - categoriesMap[b]
        );
        setListOption(sortedCategoryNames);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }
    fetchCategories();
  }, []);

  const [message, setMessage] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    category: "",
    image: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState("Danh mục");
  const [nameProduct, setName] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState([]);
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
    if (
      category === "" ||
      nameProduct === "" ||
      price === "" ||
      stock ==="" ||
      files.length === 0
    ) {
      msg["image"] = "Vui lòng nhập đầy đủ các thông tin yêu cầu!";
    } else {
      try {
        const formData = new FormData();
        formData.append("name", nameProduct);
        formData.append("stock", stock);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("hashtags", [category, makeHashtag(nameProduct)]);
        files.forEach((file) => {
          formData.append("images", file);
        });
        const data = await createProduct(formData);
        navigate("/home", {
          state: {
            show: true,
            message: "Sản phẩm của bạn đã được đăng bán thành công!",
            color: "#ff9013",
          },
        });
      } catch (err) {
        if (err.response && err.response.status === 400) {
          const listError = err.response.data.errors;
          listError.forEach((error) => {
            msg[error.path] = error.msg;
          });
        }
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
              name="nameProduct"
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
              type="number"
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
              type="number"
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
            <ImageForm onUpload={setFiles} setMessage={setMessage} />
            <span style={{ color: "red" }}>{message.image}</span>
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
