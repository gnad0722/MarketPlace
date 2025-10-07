import React from "react";
import { MapPin } from "lucide-react";
function OrderInfo() {
  return (
    <div className="order-info">
      <span style={{ fontWeight: "500" }}>
        <MapPin color="#ff6a00" style={{ marginRight: "5px" }} />
        Thông tin nhập hàng
      </span>
      <span style={{ opacity: "0.5", marginLeft: "5px" }}>
        Nhập thông tin giao hàng của bạn
      </span>
      <form>
        <div className="row mt-3">
          <div className="col-6 ">
            <label htmlFor="InputName" className="form-label">
              Họ và tên*
            </label>
            <input
              type="text"
              id="InputName"
              className="form-control"
              placeholder="Ví dụ: Nguyễn Văn A"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
          <div className="col-6">
            <label htmlFor="InputPhone" className="form-label">
              Số điện thoại*
            </label>
            <input
              type="text"
              id="InputPhone"
              className="form-control"
              placeholder="Nhập số điện thoại của bạn"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
          <div className="col-12 mt-3">
            <label htmlFor="InputEmail" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="InputEmail"
              className="form-control"
              placeholder="example@gmail.com"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
          <div className="col-12 mt-3">
            <label htmlFor="InputAddress" className="form-label">
              Địa chỉ*
            </label>
            <input
              type="text"
              id="InputAddress"
              className="form-control"
              placeholder="Số nhà, tên đường"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
           <div className="col-6 mt-3">
            <label htmlFor="InputCity" className="form-label">
              Tỉnh/Thành phố*
            </label>
            <input
              type="text"
              id="InputCity"
              className="form-control"
              placeholder="Nhập tên tỉnh/thành phố"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
           <div className="col-6 mt-3">
            <label htmlFor="InputDistrict" className="form-label">
              Phường/Xã/Thị trấn*
            </label>
            <input
              type="text"
              id="InputDistrict"
              className="form-control"
              placeholder="Nhập tên phường/xã/thị trấn"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
           <div className="col-12 mt-3 mb-3">
            <label htmlFor="InputNote" className="form-label">
              Ghi chú
            </label>
            <input
              type="text"
              id="InputNote"
              className="form-control"
              placeholder="Ghi chú thêm về địa chỉ (tùy chọn)"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default OrderInfo;
