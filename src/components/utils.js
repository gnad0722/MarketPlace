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
export { formatPriceByCode, getAvgRating, getTotalRating, formatTime, extractWords };
