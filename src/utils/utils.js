import {
  differenceInHours,
  differenceInMinutes,
  format,
  parseISO,
} from "date-fns";
function formatPriceByCode(price, currencyCode) {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: currencyCode.toUpperCase() === "VND" ? 0 : 2,
    maximumFractionDigits: currencyCode.toUpperCase() === "VND" ? 0 : 2,
  });
  return formatter.format(price);
}

function getTotalRating(rateList) {
  return rateList.reduce((sum, item) => sum + item.rate, 0);
}

function getAvgRating(rateList) {
  const total = getTotalRating(rateList);
  if (total === 0) return 0;
  const weightedSum = rateList.reduce(
    (sum, item) => sum + item.number * item.rate,
    0
  );
  return (weightedSum / total).toFixed(1);
}

function formatTime(dateData) {
  const now = new Date();
  const hoursDifference = differenceInHours(now, dateData);
  if (hoursDifference < 24) {
    if (hoursDifference === 0) {
      return `${Math.abs(differenceInMinutes(now, dateData))} phút trước`;
    }
    return `${hoursDifference} giờ trước`;
  } else {
    return format(dateData, "dd/MM/yyyy");
  }
}

function extractWords(content, wordLimit) {
  const words = content.trim().split(/\s+/);
  const firstNWords = words.slice(0, wordLimit);
  let excerpt = firstNWords.join(" ");
  if (words.length > wordLimit) {
    excerpt += "...";
  }
  return excerpt;
}
function checkValidAccount(email, password, username, page) {
  const valid = {
    email: true,
    password: true,
    username: true,
  };
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>?/]).{8,}$/;
  const regexUsername = /^(?![._-])[A-Za-zÀ-ỹ0-9\s._'&!-]{3,50}(?<![._-])$/;
  if (page === "login") {
    valid.username = true;
    valid.password = true;
    if (!regexEmail.test(email)) {
      valid.email = false;
      return valid;
    }
  } else if (page === "register") {
    if (email !== "" && !regexEmail.test(email)) {
      valid.email = false;
      return valid;
    } else if (password !== "" && !regexPassword.test(password)) {
      valid.password = false;
      return valid;
    } else if (username !== "" && !regexUsername.test(username)) {
      valid.username = false;
      return valid;
    }
  }
  return valid;
}
function groupNotifications(notifications) {
  const groups = {};

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  notifications.forEach((item) => {
    const createdAt = new Date(item.created_at);
    const itemDate = new Date(
      createdAt.getFullYear(),
      createdAt.getMonth(),
      createdAt.getDate()
    );

    let key;

    if (itemDate.getTime() === today.getTime()) {
      key = "Hôm nay";
    } else if (itemDate.getTime() === yesterday.getTime()) {
      key = "Hôm qua";
    } else {
      key = `${itemDate.getDate()}/${
        itemDate.getMonth() + 1
      }/${itemDate.getFullYear()}`;
    }

    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });

  return groups;
}
function countRating(feedback) {
  const ratingCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  feedback.forEach((item) => {
    if (item.rating >= 1 && item.rating <= 5) {
      ratingCount[item.rating]++;
    }
  });
  return [
    { number: 5, rate: ratingCount[5] },
    { number: 4, rate: ratingCount[4] },
    { number: 3, rate: ratingCount[3] },
    { number: 2, rate: ratingCount[2] },
    { number: 1, rate: ratingCount[1] },
  ];
}
function makeHashtag(productName) {
  if (!productName) return "";

  const firstWord = productName.trim().split(/\s+/)[0];
  return firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
}
function multiSort(products, options) {
  const sorted = [...products];

  sorted.sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);

    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    const ratingA = parseFloat(a.average_rating);
    const ratingB = parseFloat(b.average_rating);

      
    if (options.sortBy === "Mới nhất") {
      if (dateA.getTime() !== dateB.getTime())
        return dateB - dateA;
    }

    if (options.sortBy === "Cũ nhất") {
      if (dateA.getTime() !== dateB.getTime())
        return dateA - dateB;
    }

    if (options.sortBy === "Tốt nhất") {
      if (ratingA !== ratingB) return ratingB - ratingA;
      if (dateA.getTime() !== dateB.getTime()) return dateB - dateA;
    }
    return 0;
  });

  return sorted;
}

function getOrderStatus(status) {
  switch (status) {
    case "PENDING":
      return "Đang chờ xử lý";
    case "CONFIRMED":
      return "Đã xác nhận";
    case "SHIPPED":
      return "Đang vận chuyển";
    case "COMPLETED":
      return "Hoàn thành";
    default:
      return "Không xác định";
  }
}
function getStatusColor(status) {
  switch (status) {
    case "PENDING":
      return "#f1c40f"; 
    case "CONFIRMED":
      return "#2ecc71"; 
    case "SHIPPED":
      return "#3498db"; 
    case "COMPLETED":
      return "#ff6600"; 
    default:
      return "#7f8c8d"; 
  }
}
function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + Number(item.subtotal);
  }, 0);
}
export {
  formatPriceByCode,
  getAvgRating,
  getTotalRating,
  formatTime,
  extractWords,
  checkValidAccount,
  groupNotifications,
  countRating,
  makeHashtag,
  multiSort,
  getOrderStatus,
  getStatusColor,
  calculateTotal
};
