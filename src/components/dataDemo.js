const listTrending = [
  {
    hashtag: "#iphone14",
    ranknumber: 1,
    countnumber: 234,
  },
  {
    hashtag: "#fashion",
    ranknumber: 2,
    countnumber: 189,
  },
  {
    hashtag: "#food",
    ranknumber: 3,
    countnumber: 156,
  },
  {
    hashtag: "#vintage",
    ranknumber: 4,
    countnumber: 98,
  },
  {
    hashtag: "#tech",
    ranknumber: 5,
    countnumber: 87,
  },
];
const listCategories = [
  "Tất cả",
  "Điện thoại",
  "Máy tính bảng",
  "Laptop",
  "Phụ kiện",
  "Đồng hồ",
  "Thời trang",
  "Giày dép",
  "Túi xách",
  "Mỹ phẩm",
  "Sức khỏe",
  "Thể thao",
  "Nội thất",
  "Đồ gia dụng",
  "Đồ điện tử",
  "Đồ chơi",
  "Sách vở",
];
const listRecommendSeller = [
  {
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    name: "TechWorld VN",
    followers: 12500,
  },
  {
    avatar: "",
    name: "Fashion Bouqutie",
    followers: 11000,
  },
  {
    avatar: "",
    name: "Home Decor Plus",
    followers: 8500,
  },
];
const listPosts = [
  {
    author: {
      firstName: "TechWorld",
      lastName: "VN",
      avatar:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    createAt: "2025-09-25T09:32:12.345+07:00",
    updateAt: "",
    title: " iPhone 15 Pro Max 256GB - Chính hãng VN/A",
    content:
      "iPhone 15 mang thiết kế sang trọng, màn hình sắc nét, hiệu năng mạnh mẽ, camera tiên tiến, pin bền bỉ, tích hợp nhiều công nghệ thông minh, đem lại trải nghiệm mượt mà cho người dùng.",
    imageURL:
      "https://images.unsplash.com/photo-1661956600686-2f1d8f3b0e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    upVotes: 120,
    downVotes: 10,
    product: {
      productName: "iPhone 15 Pro Max",
      hashtag: ["#iphone", "#apple"],
      price: 15000000,
      currencyCode: "VND",
      quantity: 2,
      condition: "Mới",
      stockStatus: "Còn hàng",
      category: "Điện thoại",
    },
    comments: [
      {
        id_user: 1,
        content: "Sản phẩm chất lượng, đáng mua!",
        parentId: null,
        creatAt: "2025-09-27T09:40:12.345+07:00",
        updateAt: "2025-09-27T09:40:12.345+07:00",
      },
      {
        id_user: 1,
        content: "Sản phẩm chất lượng, đáng mua!",
        parentId: null,
        creatAt: "2025-09-27T09:40:12.345+07:00",
        updateAt: "2025-09-27T09:40:12.345+07:00",
      },
      {
        id_user: 1,
        content: "Sản phẩm chất lượng, đáng mua!",
        parentId: null,
        creatAt: "2025-09-27T09:40:12.345+07:00",
        updateAt: "2025-09-27T09:40:12.345+07:00",
      },
      {
        id_user: 1,
        content: "Sản phẩm chất lượng, đáng mua!",
        parentId: null,
        creatAt: "2025-09-27T09:40:12.345+07:00",
        updateAt: "2025-09-27T09:40:12.345+07:00",
      },
    ],
  },
  {
    author: {
      firstName: "TechWorld",
      lastName: "VN",
      avatar:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    createAt: "2025-09-25T09:32:12.345+07:00",
    updateAt: "",
    title: " iPhone 15 Pro Max 256GB - Chính hãng VN/A",
    content:
      "iPhone 15 mang thiết kế sang trọng, màn hình sắc nét, hiệu năng mạnh mẽ, camera tiên tiến, pin bền bỉ, tích hợp nhiều công nghệ thông minh, đem lại trải nghiệm mượt mà cho người dùng.",
    imageURL:
      "https://images.unsplash.com/photo-1661956600686-2f1d8f3b0e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    upVotes: 120,
    downVotes: 10,
    product: {
      productName: "iPhone 15 Pro Max",
      hashtag: ["#iphone", "#apple"],
      price: 15000000,
      currencyCode: "VND",
      quantity: 2,
      condition: "Mới",
      stockStatus: "Còn hàng",
      category: "Điện thoại",
    },
    comments: [
      {
        id_user: 1,
        content: "Sản phẩm chất lượng, đáng mua!",
        parentId: null,
        creatAt: "2025-09-27T09:40:12.345+07:00",
        updateAt: "2025-09-27T09:40:12.345+07:00",
      },
      {
        id_user: 1,
        content: "Sản phẩm chất lượng, đáng mua!",
        parentId: null,
        creatAt: "2025-09-27T09:40:12.345+07:00",
        updateAt: "2025-09-27T09:40:12.345+07:00",
      },
      {
        id_user: 1,
        content: "Sản phẩm chất lượng, đáng mua!",
        parentId: null,
        creatAt: "2025-09-27T09:40:12.345+07:00",
        updateAt: "2025-09-27T09:40:12.345+07:00",
      },
      {
        id_user: 1,
        content: "Sản phẩm chất lượng, đáng mua!",
        parentId: null,
        creatAt: "2025-09-27T09:40:12.345+07:00",
        updateAt: "2025-09-27T09:40:12.345+07:00",
      },
    ],
  },
  {
    author: {
      firstName: "TechWorld",
      lastName: "VN",
      avatar:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    createAt: "2025-09-25T09:32:12.345+07:00",
    updateAt: "",
    title: " iPhone 15 Pro Max 256GB - Chính hãng VN/A",
    content:
      "iPhone 15 mang thiết kế sang trọng, màn hình sắc nét, hiệu năng mạnh mẽ, camera tiên tiến, pin bền bỉ, tích hợp nhiều công nghệ thông minh, đem lại trải nghiệm mượt mà cho người dùng.",
    imageURL:
      "https://images.unsplash.com/photo-1661956600686-2f1d8f3b0e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    upVotes: 120,
    downVotes: 10,
    product: {
      productName: "iPhone 15 Pro Max",
      hashtag: ["#iphone", "#apple"],
      price: 15000000,
      currencyCode: "VND",
      quantity: 2,
      condition: "Mới",
      stockStatus: "Còn hàng",
      category: "Điện thoại",
    },
    comments: [
      {
        id_user: 1,
        content: "Sản phẩm chất lượng, đáng mua!",
        parentId: null,
        creatAt: "2025-09-27T09:40:12.345+07:00",
        updateAt: "2025-09-27T09:40:12.345+07:00",
      },
      {
        id_user: 1,
        content: "Sản phẩm chất lượng, đáng mua!",
        parentId: null,
        creatAt: "2025-09-27T09:40:12.345+07:00",
        updateAt: "2025-09-27T09:40:12.345+07:00",
      },
      {
        id_user: 1,
        content: "Sản phẩm chất lượng, đáng mua!",
        parentId: null,
        creatAt: "2025-09-27T09:40:12.345+07:00",
        updateAt: "2025-09-27T09:40:12.345+07:00",
      },
      {
        id_user: 1,
        content: "Sản phẩm chất lượng, đáng mua!",
        parentId: null,
        creatAt: "2025-09-27T09:40:12.345+07:00",
        updateAt: "2025-09-27T09:40:12.345+07:00",
      },
    ],
  }
];
export { listTrending, listCategories, listRecommendSeller, listPosts };
