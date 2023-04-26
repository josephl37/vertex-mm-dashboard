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