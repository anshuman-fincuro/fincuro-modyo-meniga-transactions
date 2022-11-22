import * as moment from "moment";

export const getdateRanges = () => {
  const dates = [
    "This month",
    "Last month",
    "Last 3 months",
    "Last 6 months",
    "Last 12 months",
    "This year",
    "Last year",
    "Custom",
  ];
  const ranges = dates.map((item) => {
    let startDate = "";
    let endDate = "";
    if (item === "This month") {
      startDate = moment().startOf("month").format("YYYY-MM-DD");
      endDate = moment().endOf("month").format("YYYY-MM-DD");
    } else if (item === "Last month") {
      startDate = moment()
        .subtract(1, "months")
        .startOf("month")
        .format("YYYY-MM-DD");
      endDate = moment()
        .subtract(1, "months")
        .endOf("month")
        .format("YYYY-MM-DD");
    } else if (item === "Last 3 months") {
      startDate = moment()
        .subtract(3, "months")
        .startOf("month")
        .format("YYYY-MM-DD");
      endDate = moment()
        .subtract(1, "months")
        .endOf("month")
        .format("YYYY-MM-DD");
    } else if (item === "Last 6 months") {
      startDate = moment()
        .subtract(6, "months")
        .startOf("month")
        .format("YYYY-MM-DD");
      endDate = moment()
        .subtract(1, "months")
        .endOf("month")
        .format("YYYY-MM-DD");
    } else if (item === "Last 12 months") {
      startDate = moment()
        .subtract(12, "months")
        .startOf("month")
        .format("YYYY-MM-DD");
      endDate = moment()
        .subtract(1, "months")
        .endOf("month")
        .format("YYYY-MM-DD");
    } else if (item === "This year") {
      startDate = moment().startOf("year").format("YYYY-MM-DD");
      endDate = moment().endOf("month").format("YYYY-MM-DD");
    } else if (item === "Last year") {
      startDate = moment()
        .subtract(1, "year")
        .startOf("year")
        .format("YYYY-MM-DD");
      endDate = moment().subtract(1, "year").endOf("year").format("YYYY-MM-DD");
    } else {
      startDate = null;
      endDate = null;
    }

    let value = startDate && endDate ? `${startDate},${endDate}` : "Custom";

    return { value: value, label: item };
  });
  return ranges;
};

export const getFromToDate = (period) => {
  let startDate = "";
  let endDate = "";
  switch (period) {
    case "0":
      startDate = moment().startOf("month").format("YYYY-MM-DD");
      endDate = moment().endOf("month").format("YYYY-MM-DD");
      break;
    case "1":
      startDate = moment()
        .subtract(1, "months")
        .startOf("month")
        .format("YYYY-MM-DD");
      endDate = moment()
        .subtract(1, "months")
        .endOf("month")
        .format("YYYY-MM-DD");
      break;
    case "3":
      startDate = moment()
        .subtract(3, "months")
        .startOf("month")
        .format("YYYY-MM-DD");
      endDate = moment()
        .subtract(1, "months")
        .endOf("month")
        .format("YYYY-MM-DD");
      break;

    case "6":
      startDate = moment()
        .subtract(6, "months")
        .startOf("month")
        .format("YYYY-MM-DD");
      endDate = moment()
        .subtract(1, "months")
        .endOf("month")
        .format("YYYY-MM-DD");
      break;

    case "12":
      startDate = moment()
        .subtract(12, "months")
        .startOf("month")
        .format("YYYY-MM-DD");
      endDate = moment()
        .subtract(1, "months")
        .endOf("month")
        .format("YYYY-MM-DD");
      break;
    case "thisYear":
      startDate = moment().startOf("year").format("YYYY-MM-DD");
      endDate = moment().endOf("month").format("YYYY-MM-DD");
      break;
    case "lastYear":
      startDate = moment()
        .subtract(1, "year")
        .startOf("year")
        .format("YYYY-MM-DD");
      endDate = moment().subtract(1, "year").endOf("year").format("YYYY-MM-DD");
      break;
  }
  return { startDate, endDate };
};

export const isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);

export const getToDate = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${year}-${month < 10 ? `0${month}` : `${month}`}-${
    date < 10 ? `0${date}` : `${date}`
  }`;
};

export const getFromDate = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() - 2;
  let year = newDate.getFullYear();
  return `${year}-${month < 10 ? `0${month}` : `${month}`}-${
    date < 10 ? `0${date}` : `${date}`
  }`;
};
