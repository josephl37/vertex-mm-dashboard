import truncateEthAddress from "truncate-eth-address";

export function convertData(response, key) {
  let groupedData = {};

  response.forEach(obj => {
    let address = truncateEthAddress(obj.address);

    obj.data.forEach(dataObj => {
      let timestamp = dataObj.timestamp;
      let value = dataObj[key];

      let date = (timestamp * 1000);

      if (!groupedData[date]) {
        groupedData[date] = {};
      }

      groupedData[date][address] = value;
    });
  });

  let convertedData = [];

  Object.keys(groupedData).forEach(timestamp => {
    let dataObj = groupedData[timestamp];
    dataObj.timestamp = timestamp;
    convertedData.push(dataObj);
  });

  return convertedData;
}

export function timeFormat(interval) {
  switch (interval) {
    case 900:
    case 3600:
    case 14400:
    case 86400:
    case 172800:
      return (t) =>
      new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      }).format(t);
    case 604800:
      return (t) =>
      new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      day: "numeric",
      }).format(t);
    case 2630000:
      return (t) =>
      new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      }).format(t);
    case 7890000:
      return (t) =>
      new Intl.DateTimeFormat("en-US", {
      month: "short",
      }).format(t);
    default:
      return (t) =>
      new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      }).format(t);
  }
}

export function getFormattedTime(interval) {
  switch (interval) {
    case 900:
    case 3600:
    case 14400:
    case 86400:
    case 172800:
      return new Intl.DateTimeFormat("en-US", {
        timeStyle: "short",
        dateStyle: "short",
      });
    case 604800:
    case 2630000:
    case 7890000:
      return new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
      });
    default:
      return new Intl.DateTimeFormat("en-US", {
        timeStyle: "short",
        dateStyle: "short",
      });
  }
}